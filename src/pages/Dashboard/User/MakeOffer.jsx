import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../../../api/propertyDetails";
import axiosSecure from "../../../api";
import useProperties from "../../../hooks/useProperties";

const MakeOffer = () => {
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [properties] = useProperties();
  console.log(properties);

  const [offerProperty, setOfferProperty] = useState([]);

  useEffect(() => {
    const getProperty = properties.find((item) => item._id === id);
    console.log('g--->',getProperty);
  }, []);

  //   const { data: property = [] } = useQuery({
  //     queryKey: ["property"],
  //     queryFn: async () => {
  //       console.log("i---->", id);
  //       const res = await useProperties
  //       console.log("mm--->", res.data);
  //       return res.data;
  //     },
  //   });

  //   const {
  //     propertyImg,
  //     agentImg,
  //     agentName,
  //     location,
  //     priceRange,
  //     status,
  //     title,
  //     _id,
  //     email,
  //     description,
  //   } = property || {};

  const { user } = useAuth();

  const navigate = useNavigate();

  return <div>gdgfdg</div>;
};

export default MakeOffer;
