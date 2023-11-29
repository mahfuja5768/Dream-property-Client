import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import Swal from "sweetalert2";
import Empty from "../../../components/Empty/Empty";
import CustomButton from "../../../hooks/customButton";

const RequestedProperties = () => {
  const [disable, setDisable] = useState(false);
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
      setDisable(true);
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
      setDisable(true);
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-primary bg-secondary">
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
          {properties?.length > 0 ? (
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
          ) : (
            <Empty text={"This"}></Empty>
          )}
        </table>
      </div>
    </Container>
  );
};

export default RequestedProperties;
