import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CustomButton from "../../../hooks/CustomButton";
import { useState } from "react";
import Swal from "sweetalert2";

const SoldProperties = () => {
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

  return (
    <Container>
      <SectionTitle heading={"Sold Properties"}></SectionTitle>
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
            </tr>
          </thead>
          <tbody>
            {properties?.map((item, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <th>{item.title}</th>
                <td>{item.location}</td>
                <td>{item.buyerEmail}</td>
                <td>{item.buyerName}</td>
                <td>{item.offerAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default SoldProperties;
