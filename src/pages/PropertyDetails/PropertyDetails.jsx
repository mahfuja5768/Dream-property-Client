import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../shared/Container/Container";
import CustomButton from "../../hooks/customButton";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { addToWishlists } from "../../api/auth";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
// import AddReview from "./AddReview";

const PropertyDetails = () => {
  const property = useLoaderData();
  const [loading , setLoading]= useState(false)

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const {
    propertyImg,
    agentImg,
    agentName,
    location,
    priceRange,
    status,
    title,
    _id,
    description,
  } = property || {};
  //   console.log(property);

  const { user } = useAuth();

  const navigate = useNavigate();


  const handleToAddWishlist = async () => {
    try {
      setLoading(true)
      const wishlist = {
        propertyId: _id,
        email: user?.email,
        status: "pending",
      };

     const data = await addToWishlists(wishlist)
     
     Swal.fire({
       title: "Success!",
       text: "Property added to wishlist successfully!",
       icon: "success",
       confirmButtonText: "Done",
      });
      setLoading(false)

      //TODO: navigate to wishlist
      navigate("/");
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

  // const handleReview = async () => {
  //   try {
  //     handleOpen()
  //     setLoading(true)
  //     const wishlist = {
  //       propertyId: _id,
  //       email: user?.email,
  //       status: "pending",
  //     };

  //   //  const data = await addToWishlists(wishlist)
     
  //   //  Swal.fire({
  //   //    title: "Success!",
  //   //    text: "Property added to wishlist successfully!",
  //   //    icon: "success",
  //   //    confirmButtonText: "Done",
  //   //   });
  //   //   setLoading(false)

  //     //TODO: navigate to wishlist
  //     // navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       title: "Error!",
  //       text: `${error.message}`,
  //       icon: "error",
  //       confirmButtonText: "Done",
  //     });
  //   }
  // };

  



  return (
    <Container>
      <div className="px-4 mt-24">
        <SectionTitle heading={`${title} Details`}></SectionTitle>
        <div className="grid lg:grid-cols-6 gap-6 items-center justify-center">
          <div className=" lg:col-span-4">
            <img
              src={propertyImg}
              className="w-full rounded-2xl lg:h-[80vh] object-cover"
              alt=""
            />
          </div>

          <div className="lg:col-span-2 space-y-4 bg-secondary p-6 md:p-12 rounded-2xl">
            <h2 className="lg:text-3xl text-2xl font-bold flex gap-2 items-center">
              {title}
            </h2>
            <h3 className="text-2xl font-bold mb-3">Location: {location}</h3>
            <h3 className="text-2xl font-bold mb-3">
              Status: <span className="text-green-600">{status}</span>
            </h3>

            <h3 className="text-xl font-bold mb-3">
              <span className="">Price:</span> ${priceRange.min}-
              {priceRange.max}
            </h3>
            <p>{description}</p>
            <div className="flex flex-row-reverse justify-end items-center gap-3">
              <h3 className="text-xl font-bold mb-3">Agent Name:{agentName}</h3>
              <img src={agentImg} className="w-16 rounded-full h-16" alt="" />
            </div>
            <div className=" my-6 flex justify-between">
              {/* <span onClick={handleReview}>
                {" "}
                <CustomButton
                  buttonText="Add Review"
                ></CustomButton>
              </span> */}
              <span onClick={handleToAddWishlist}>
                {" "}
                <CustomButton
                  buttonText="Add To Wishlist"
                ></CustomButton>
              </span>
            </div>
          </div>
        </div>
        <div className="-mt-12">
          <SectionTitle heading={'Reviews'}></SectionTitle>
         {/* <AddReview open={open} handleOpen={handleOpen} handleClose={handleClose}></AddReview> */}
        </div>
      </div>
    </Container>
  );
};

export default PropertyDetails;
