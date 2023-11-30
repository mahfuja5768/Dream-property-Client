import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import Swal from "sweetalert2";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Empty from "../../../components/Empty/Empty";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";

const ManageProperties = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  //   console.log(user.email);
  const { data: properties, refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("all-agent-properties");
      console.log(res.data);
      return res.data;
    },
  });

  const handleVerify = async (id) => {
    try {
      setLoading(true);
      const data = await axiosSecure.patch(`/verify-agent-property/${id}`);
      refetch();

      const getProperty = await axiosSecure.get(`/agent-properties/${id}`);
      console.log(getProperty.data[0]);
      const {
        propertyImg,
        agentImg,
        agentName,
        location,
        priceRange,
        status,
        title,
        agentEmail,
      } = getProperty.data[0] || {};
      //   console.log("p---->", getProperty);
      const property = {
        propertyImg,
        agentImg,
        agentName,
        location,
        priceRange,
        status,
        title,
        agentEmail,
      };
      console.log("p---->", property);

      const addToProperty = await axiosSecure.post(
        "/add-to-properties",
        property
      );
      Swal.fire({
        title: "Success!",
        text: "Property verified successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  const handleReject = async (id) => {
    try {
      setLoading(true);
      const data = await axiosSecure.patch(`/reject-agent-property/${id}`);
      Swal.fire({
        title: "Success!",
        text: "Success!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
      setLoading(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Dream-Property | Manage Properties</title>
      </Helmet>
      <SectionTitle heading={"Requested Properties"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg  text-primary  border-y-4 border-[#276597] bg-secondary">
              <th></th>
              <th>Property Title</th>
              <th>Location</th>
              <th>Agent Email</th>
              <th>Agent Name</th>
              <th>Offer Price</th>
              <th>Make Verify</th>
              <th>Reject offer</th>
            </tr>
          </thead>
          {properties?.length > 0 ? (
            <tbody>
              {properties?.map((item, idx) => (
                <tr key={item?._id} className="text-lg font-semibold">
                  <th>{idx + 1}</th>
                  <th>{item.title}</th>
                  <td>{item.location}</td>
                  <td>{item.agentEmail}</td>
                  <td>{item.agentName}</td>
                  <td>
                    ({item.priceRange.min}-{item.priceRange.max})$
                  </td>
                  <td>
                    {item.status === "pending" && (
                      <span onClick={() => handleVerify(item._id)}>
                        <CustomButton buttonText={"Verify"}></CustomButton>
                      </span>
                    )}
                  </td>

                  <td>
                    {item.status === "pending" && (
                      <span onClick={() => handleReject(item._id)}>
                        <CustomButton buttonText={"Reject"}></CustomButton>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <Empty text={"This"}></Empty>
          )}
        </table>
      </div>
    </Container>
  );
};

export default ManageProperties;
