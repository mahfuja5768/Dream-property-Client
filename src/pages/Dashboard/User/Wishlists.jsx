import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../shared/Container/Container";
import { useEffect, useState } from "react";
import useProperties from "../../../hooks/useProperties";

const Wishlists = () => {
  const { user } = useAuth();
  const [properties] = useProperties();
  console.log(properties);
  const [wishlistProperties, setWishlistProperties] = useState([]);

  const { refetch, data: userWishlists = [] } = useQuery({
    queryKey: ["userWishlists"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-wishlists/${user?.email}`);
      console.log(res.data);
      const finalData = res.data;
      const propertyIds = finalData.map((item) => item.propertyId);
      return propertyIds;
    },
  });

  // useEffect(() => {
  //   const wishlistPro = properties.filter(item=>item._id === propertyIds)
  // }, []);

  return (
    <Container>
      <SectionTitle heading={"My Wishlists"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userWishlists?.map((item) => (
          <div
            key={item._id}
            className="bg-secondary border-2 border-primary shadow-xl p-6 space-y-3"
          >
            <h3 className="text-2xl font-bold">Property Title: {item.title}</h3>
            <h3 className="text-2xl font-medium">
              Agent Name: {item.agentName}
            </h3>
            <p className="text-xl">Review: {item.reviewDetail}</p>
            <h3 className="text-lg font-medium">Date: {item.date}</h3>
            <div className="flex justify-end">
              {/* <span onClick={() => handleDelete(item._id)}>
                <CustomButton buttonText={"Delete"}></CustomButton>
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Wishlists;
