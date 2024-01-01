import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../shared/Container/Container";
import Swal from "sweetalert2";
import { deleteWishlist } from "../../../api/auth";
import { useEffect, useState } from "react";
import Empty from "../../../components/Empty/Empty";
import { Link } from "react-router-dom";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Wishlists = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const { refetch, data: userWishlists = [] } = useQuery({
    queryKey: ["userWishlists", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/user-wishlists?&email=${user?.email}&page=${currentPage}&size=${itemsPerPage}`
      );
      // console.log(res.data);
      return res.data;
    },
  });

  /* pagination */
  const value = userWishlists.length;
  // console.log(value);

  const numberOfPages = Math.ceil(value / itemsPerPage);
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }

  const handleItemsPerPage = (e) => {
    // console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    // console.log('p');
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    // console.log('r');
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const wishlist = await deleteWishlist(id);
      // console.log(wishlist);
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
          <div
            style={{
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
              className="h-[250px] object-cover w-full"
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
              <Link to={`/dashboard/make-offer/${item._id}`} className="w-full">
                <CustomButton buttonText={"Make An Offer"}></CustomButton>
              </Link>
              <span onClick={() => handleDelete(item._id)}>
                <CustomButton buttonText={"Remove"}></CustomButton>
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}

      <div className="flex my-12 justify-center items-center gap-2 lg:gap-4 ">
        <button
          className="bg-primary text-sm md:text-lg border-2 border-transparent hover:text-primary hover:border-2 hover:border-primary text-white font-bold btn  rounded-full"
          onClick={handlePrev}
        >
          <FaAngleLeft></FaAngleLeft>
        </button>
        {pages.map((page) => (
          <button
            className={
              currentPage === page
                ? "font-bold btn text-sm md:text-lg rounded-full border-2 border-primary bg-primary text-white"
                : "text-sm md:text-lg font-bold btn rounded-full border-2 border-primary"
            }
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="bg-primary text-sm md:text-lg border-2 border-transparent hover:text-primary hover:border-2 hover:border-primary text-white font-bold btn  rounded-full"
        >
          <FaAngleRight></FaAngleRight>
        </button>

        <select
          className="border-2 border-red p-2 font-bold text-black"
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">25</option>
        </select>
      </div>
    </Container>
  );
};

export default Wishlists;
