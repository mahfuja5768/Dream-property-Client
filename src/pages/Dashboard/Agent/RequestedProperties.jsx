import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import Swal from "sweetalert2";
import Empty from "../../../components/Empty/Empty";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";

const RequestedProperties = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  //   console.log(user.email);
  const { data: properties } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/requested-properties?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  const handleAccept = async (id) => {
    try {
      setLoading(true);
      const data = await axiosSecure.patch(`/accept-requested-property/${id}`);
      Swal.fire({
        title: "Success!",
        text: "Success!",
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
      const data = await axiosSecure.patch(`/reject-requested-property/${id}`);
      Swal.fire({
        title: "Success!",
        text: "Success!",
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

  return (
    <Container>
      <SectionTitle heading={"Requested Properties"}></SectionTitle>
      <Helmet>
        <title>Dream-Property | Requested Property</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-lg  text-primary  border-y-4 border-[#276597] bg-secondary">
              <th></th>
              <th>Property Title</th>
              <th>Location</th>
              <th>Buyer Email</th>
              <th>Buyer Name</th>
              <th>Offer Price</th>
              <th>Accept offer</th>
              <th>Reject offer</th>
            </tr>
          </thead>

          {properties?.length && (
            <tbody>
              {properties?.map((item, idx) => (
                <tr key={item?._id}>
                  <th>{idx + 1}</th>
                  <th>{item.title}</th>
                  <td>{item.location}</td>
                  <td>{item.buyerEmail}</td>
                  <td>{item.buyerName}</td>
                  <td>{item.offerAmount}</td>
                  <td>
                    <span onClick={() => handleAccept(item._id)}>
                      <CustomButton buttonText={"Accept"}></CustomButton>
                    </span>
                  </td>
                  <td>
                    <span onClick={() => handleReject(item._id)}>
                      <CustomButton buttonText={"Reject"}></CustomButton>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div className="flex justify-center items-center">
        {!properties?.length && <Empty text={"This"}></Empty>}
      </div>
    </Container>
  );
};

export default RequestedProperties;
