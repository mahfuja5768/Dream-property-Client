import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Container from "../../../shared/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";

const UpdateProperty = () => {
  const property = useLoaderData();
  const {id}=useParams()
  // console.log(id)
  const {
    location,
    priceRange,
    title,
  } = property[0] || {};
  // console.log(property);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  // console.log(user);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const min = parseInt(form.min.value);
    const max = parseInt(form.max.value);
    const formData = new FormData(form);
    const propertyImge = formData.get("propertyImg");

    try {
      setLoading(true);

      const propertyImgData = await imageUpload(propertyImge);
      const propertyImg = propertyImgData?.data?.display_url;

      const property = {
        title,
        location,
        propertyImg,
        agentImg: user?.photoURL,
        priceRange: { min, max },
        agentName: user?.displayName,
        agentEmail: user?.email,
      };
      // console.log(property);
      const data = await axiosSecure.patch(`/agent-properties/${id}`, property);
      Swal.fire({
        title: "Success!",
        text: "Property updated successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      form.reset();
      setLoading(false);
      navigate("/dashboard/addedProperties");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
      form.reset();
    }
  };
  return (
    <Container>
      <div className="">
        <Helmet>
          <title>Dream-Property | Update Property</title>
        </Helmet>
        <SectionTitle heading={"Update Property"}></SectionTitle>
        <div className="md:px-24 flex-col-reverse lg:flex-row-reverse justify-center items-center">
          <div className="card shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Title</span>
                </label>
                <input
                  defaultValue={title}
                  type="text"
                  name="title"
                  placeholder="Type here"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Location</span>
                </label>
                <input
                  defaultValue={location}
                  type="text"
                  name="location"
                  placeholder="location"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  required
                />
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Choose Property Photo </span>
                </label>
                <input
                  type="file"
                  required
                  id="image"
                  name="propertyImg"
                  accept="image/*"
                  className="w-full cursor-pointer file-input-secondary"
                />
              </div>

              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Agent Name </span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />{" "}
              </div>

              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Agent Email </span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />{" "}
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Price Range Minimum</span>
                </label>
                <input
                  defaultValue={priceRange.min}
                  type="number"
                  name="min"
                  required
                  placeholder="min range"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />{" "}
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Price Range Maximum</span>
                </label>
                <input
                  defaultValue={priceRange.max}
                  type="number"
                  placeholder="max range"
                  name="max"
                  required
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />{" "}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-primary"
                  type="submit"
                  value="Update Property"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UpdateProperty;
