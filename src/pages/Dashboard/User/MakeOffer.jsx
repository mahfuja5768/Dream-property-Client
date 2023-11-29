import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Container from "../../../shared/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { postOfferProperty } from "../../../api/auth";

const MakeOffer = () => {
  const { id } = useParams();
  // console.log(id)
  const property = useLoaderData();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  // console.log(user);

  const {
    propertyImg,
    agentImg,
    agentName,
    location,
    priceRange,
    status,
    title,
    _id,
    email,
    description,
  } = property || {};
    console.log(priceRange.min, priceRange.max);
  const navigate = useNavigate();

  const handleSubmit =  async(e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const offerAmountString = form.offerAmount.value;
    const offerAmount = parseInt(offerAmountString)

    if (offerAmount < priceRange.min) {
      return Swal.fire({
        title: "Error!",
        text: `Offer price must be greater than or equal ${priceRange.min}!`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
      if (offerAmount > priceRange.max) {
        return Swal.fire({
          title: "Error!",
          text: `Offer price must be less than ${priceRange.max} or equal!`,
          icon: "error",
          confirmButtonText: "Done",
        });
      }

    try {
      setLoading(true);
      const offerProperty = {
        propertyImg,
        agentName,
        offerAmount,
        location,
        title,
        propertyId:id,
        agentEmail: email,
        status: "pending",
        buyerEmail: user?.email,
        buyerName: user?.displayName
      };
      console.log(offerProperty);
      const data = await postOfferProperty(offerProperty);
      Swal.fire({
        title: "Success!",
        text: "Request send successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      form.reset();
      setLoading(false);
      navigate("/dashboard/propertyBrought");
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
          <title>Dream-Property | Make Offer</title>
        </Helmet>
        <SectionTitle heading={"Make Offer"}></SectionTitle>
        <div className="md:px-24 flex-col-reverse lg:flex-row-reverse justify-center items-center">
          <div className="text-center  lg:text-left ">
            {/* <img src={loginPng} className="lg:w-1/6 mx-auto" alt="" /> */}
          </div>
          <div className="card shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Title</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  readOnly
                  defaultValue={title}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Location</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  readOnly
                  defaultValue={location}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Agent Name</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  readOnly
                  defaultValue={agentName}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer Name</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  readOnly
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer Email</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  readOnly
                  defaultValue={user?.email}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Offer Amount</span>
                </label>
                <input
                  type="number"
                  name="offerAmount"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-primary"
                  type="submit"
                  value="Offer Now"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MakeOffer;
