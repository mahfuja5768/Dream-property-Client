import React, { useState } from "react";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
// import { getOfferProperty } from '../../../api/auth';
import Empty from "../../../components/Empty/Empty";
import axiosSecure from "../../../api";
import { Link } from "react-router-dom";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";
import useGetBroughtProperty from "../../../hooks/useGetBroughtProperty";

const PropertyBrought = () => {

 const [offerProperties] = useGetBroughtProperty();

 

  return (
    <Container>
      <Helmet>
        <title>Dream-Property | My Brought Properties</title>
      </Helmet>
      <SectionTitle heading={"My Brought Properties"}></SectionTitle>
      {!offerProperties?.length && <Empty text={"This"}></Empty>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerProperties?.map((item) => (
          <div  style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)", // Using colors from Tailwind configuration
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
            key={item._id}
            className="bg-white  shadow-xl p-6 space-y-3"
          >
            {" "}
            <img
              src={item.propertyImg}
              className="h-[250px] object-cover w-full"
              alt=""
            />
            <h3 className="text-2xl font-bold">Property Title: {item.title}</h3>
            <p className="text-xl">Location: {item.location}</p>
            <h3 className="text-xl">Agent Name: {item.agentName}</h3>
            <h3
              className={`${
                item?.status === "pending"
                  ? "text-red-500 font-semibold"
                  : "text-green-700 font-semibold"
              }`}
            >
              Status: <span className="text-lg font-bold">{item.status}</span>
            </h3>
            <h3 className=" mb-3">
              <span className="">Price:</span> ${item?.offerAmount}
            </h3>
            {item.status === "accepted" && (
              <div className="flex justify-end items-center">
                <Link to={`/dashboard/payment/${item._id}`}>
                  <CustomButton buttonText={"Pay"}></CustomButton>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PropertyBrought;
