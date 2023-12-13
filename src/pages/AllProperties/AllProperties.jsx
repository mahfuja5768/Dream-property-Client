
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useProperties from "../../hooks/useProperties";
import Container from "../../shared/Container/Container";
import Property from "./Property";
import CustomButton from "../../shared/CustomButton/customButton";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../api";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProperties = () => {
  // let [properties] = useProperties();
  const [properties, setProperties] = useState([]);
  const [searchProperty, setSearchProperty] = useState('');


  useEffect(() => {
    axiosSecure.get('/properties').then((res) => {
        console.log(res.data);
      setProperties(res.data);
    });
  }, []);

  const handleSearch = () => {
    console.log("ggggggg--->", searchProperty);
    axiosSecure
      .get(
        `search-properties/${searchProperty}`
      )
      .then((res) => {
        const selectedProps = res.data;
        console.log(selectedProps);
        setProperties(selectedProps);
      });
  };
  return (
    <Container>
      <Helmet>
        <title>Dream-Property | All Properties</title>
      </Helmet>
      <SectionTitle heading={"All Verified Properties"}></SectionTitle>

      <div className="flex justify-center flex-col items-center ">
            <h2 className="text-red text-3xl mb-4 font-bold">
              Search property by title:
            </h2>
            <div className="input-group flex">
              <input
                onChange={(e) => setSearchProperty(e.target.value)}
                type="text"
                placeholder="Type here"
                className="px-3 me-2  border-2 border-primary rounded-md text-black"
              />
              <Link onClick={handleSearch}>
              <CustomButton buttonText={"Search"}></CustomButton>
              </Link>
            </div>
          </div>

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
