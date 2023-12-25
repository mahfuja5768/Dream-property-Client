import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useProperties from "../../hooks/useProperties";
import Container from "../../shared/Container/Container";
import Property from "./Property";
import CustomButton from "../../shared/CustomButton/customButton";
import { useEffect, useState } from "react";
import axiosSecure from "../../api";
import { Link } from "react-router-dom";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [sort, setSort] = useState([]);
  const [searchProperty, setSearchProperty] = useState("");

  const handleSort = () => {
    axiosSecure
      .get(`/sort-properties?order=${sort}`)
      .then((res) => {
        // console.log(res.data);
        setProperties(res.data);
      });
  };

  useEffect(() => {
    axiosSecure.get("/properties").then((res) => {
      console.log(res.data);
      setProperties(res.data);
    });
  }, []);

  const handleSearch = () => {
    console.log("ggggggg--->", searchProperty);
    axiosSecure.get(`search-properties/${searchProperty}`).then((res) => {
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

      <div className="flex justify-evenly flex-col lg:flex-row items-center ">
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
        <div className="input-group my-12">
          <div className="input-group flex">
            <select
              onChange={(e) => setSort(e.target.value)}
              className="select select-bordered me-2 rounded-2xl border-2 border-primary text-black"
            >
              <option value="desc">Max</option>
              <option value="asc">Min</option>
            </select>
            <Link onClick={handleSort}>
              <CustomButton buttonText={"Search"}></CustomButton>
            </Link>
          </div>
        </div>
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
