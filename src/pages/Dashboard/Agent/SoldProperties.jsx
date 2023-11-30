import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Helmet } from "react-helmet-async";

const SoldProperties = () => {
  const {user} =useAuth()
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
      <Helmet>
          <title>Dream-Property | Sold Property</title>
        </Helmet>
      <SectionTitle heading={"Sold Properties"}></SectionTitle>
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
            </tr>
          </thead>
          <tbody>
            {properties?.map((item, idx) => (
              <tr key={item._id}>
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
