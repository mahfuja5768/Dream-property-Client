
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useProperties from "../../hooks/useProperties";
import Container from "../../shared/Container/Container";
import Property from "./Property";
import CustomButton from "../../shared/CustomButton/customButton";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../api";

const AllProperties = () => {
  let [properties] = useProperties();
  return (
    <Container>
      <Helmet>
        <title>Dream-Property | All Properties</title>
      </Helmet>
      <SectionTitle heading={"All Verified Properties"}></SectionTitle>

      <div className="input-group my-12">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered me-2 rounded-2xl border-2 border-red text-black"
        >
          <option value="max">Max</option>
          <option value="min">Min</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-9 justify-center items-center">
        {properties?.map((property) => (
          <Property key={property._id} property={property}></Property>
        ))}
      </div>
    </Container>
  );
};

export default AllProperties;
