import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../shared/Container/Container";
import Swal from "sweetalert2";
import { deleteWishlist } from "../../../api/auth";
import { useState } from "react";
import Empty from "../../../components/Empty/Empty";
import { Link } from "react-router-dom";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";

const Wishlists = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const { refetch, data: userWishlists = [] } = useQuery({
    queryKey: ["userWishlists"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-wishlists/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const {
    propertyImg,
    agentImg,
    agentName,
    agentEmail,
    location,
    priceRange,
    status,
    title,
    propertyId,
    _id,
    description,
  } = userWishlists || {};

  const handleDelete = async (id) => {
    // console.log(id)
    try {
      const wishlist = await deleteWishlist(id);
      // console.log(review);
      Swal.fire({
        title: "Success!",
        text: "Remove from wishlist successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
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
        <title>Dream-Property | My Wishlist</title>
      </Helmet>
      <SectionTitle heading={"My Wishlists"}></SectionTitle>
      {!userWishlists?.length && <Empty text={"Your wishlist"}></Empty>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userWishlists?.map((item) => (
          <div  style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)", // Using colors from Tailwind configuration
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
            key={item._id}
            className="bg-white shadow-xl p-6 space-y-3"
          >
            {" "}
            <img
              src={item.propertyImg}
              className="h-[250px] object-cover"
              alt=""
            />
            <h3 className="text-2xl font-bold">Property Title: {item.title}</h3>
            <p className="text-xl">Location: {item.location}</p>
            <div className="flex items-center gap-2">
              <img
                src={item.agentImg}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <h3 className="text-xl">Agent Name: {item.agentName}</h3>
            </div>
            <h3 className="text-lg font-medium">Status: {item.status}</h3>
            <h3 className=" mb-3">
              <span className="">Price:</span> ${item?.priceRange?.min}-
              {item?.priceRange?.max}
            </h3>
            <div className="flex justify-between items-center">
              <Link
                to={`/dashboard/make-offer/${item.propertyId}`}
                className="w-full"
              >
                <CustomButton buttonText={"Make An Offer"}></CustomButton>
              </Link>
              <span onClick={() => handleDelete(item._id)}>
                <CustomButton buttonText={"Remove"}></CustomButton>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Wishlists;
