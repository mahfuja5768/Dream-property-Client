import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../../shared/Container/Container";
import Property from "./Property";
import CustomButton from "../../shared/CustomButton/customButton";
import { useEffect, useState } from "react";
import axiosSecure from "../../api";
import { Link } from "react-router-dom";
import usePropertiesCount from "../../hooks/usePropertiesCount";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [sort, setSort] = useState([]);
  const [searchProperty, setSearchProperty] = useState("");

  /* pagination */
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const [count] = usePropertiesCount();
  const value = count.count;
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
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSort = () => {
    axiosSecure.get(`/sort-properties?order=${sort}`).then((res) => {
      // console.log(res.data);
      setProperties(res.data);
    });
  };

  useEffect(() => {
    axiosSecure
      .get(`/properties?&page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        // console.log(res.data);
        setProperties(res.data);
      });
  }, [currentPage, itemsPerPage]);

  const handleSearch = () => {
    // console.log("ggggggg--->", searchProperty);
    axiosSecure.get(`search-properties/${searchProperty}`).then((res) => {
      const selectedProps = res.data;
      // console.log(selectedProps);
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

export default AllProperties;
