import { Helmet } from "react-helmet-async";
import Empty from "../../../components/Empty/Empty";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useProperties from "../../../hooks/useProperties";
import Container from "../../../shared/Container/Container";
import CustomButton from "../../../shared/CustomButton/customButton";
import { useState } from "react";
import axiosSecure from "../../../api";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const AdvertiseProperty = () => {
  const [properties, refetch] = useProperties();
  console.log(properties.map(i=>i.adStatus));
  const { user } = useAuth();

  const { data: getAdsProperties } = useQuery({
    queryKey: ["getAdsProperties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/advertise-properties");
      console.log(res.data);
      return res.data;
    },
  });
  console.log(getAdsProperties?.length)

  const [loading, setLoading] = useState(false);

  const handleAdvertise = async (item) => {
    console.log(item);
    try {
      setLoading(true);

      const adsProperty = {
        propertyId: item._id,
        propertyImg: item.propertyImg,
        agentImg: item.agentImg,
        agentName: item.agentName,
        location: item.location,
        priceRange: item.priceRange,
        status: item.status,
        title: item.title,
        agentEmail: item.agentEmail,
      };
      // console.log(adsProperty)

      if (getAdsProperties.length < 7) {
        const addToAds = await axiosSecure.post(
          "/advertise-properties",
          adsProperty
        );

        const updateStatus = await axiosSecure.patch(`/ads-status/${item._id}`);

        Swal.fire({
          title: `Dear ${user?.displayName},`,
          text: "Property add to advertise successfully!",
          icon: "success",
          confirmButtonText: "Done",
        });
        refetch();
        setLoading(false);
      } else {
        Swal.fire({
          title: "Error!",
          text: "You can not advertise  more than 6 properties!",
          icon: "error",
          confirmButtonText: "Done",
        });
      }
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

  const handleRemoveAds = async (id) => {
    console.log('i--->',id);
    try {
      setLoading(true);
      const data = await axiosSecure.delete(`/advertise-properties/${id}`);
     
      Swal.fire({
        title: `Dear ${user?.displayName},`,
        text: "Property removed from advertise!",
        icon: "success",
        confirmButtonText: "Done",
      });

      const removeAds = await axiosSecure.patch(`/remove-status/${id}`);
      console.log(removeAds);
     
      refetch();
      setLoading(false);
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
        <title>Dream-Property | Advertise Property</title>
      </Helmet>
      <SectionTitle heading={"Advertise Properties"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg  text-primary  border-y-4 border-[#276597] bg-secondary">
              <th></th>
              <th>Property Image</th>
              <th>Property Title</th>

              <th>Agent Name</th>
              <th>Price Range</th>
              <th>Advertise</th>
              <th>Remove Advertise</th>
            </tr>
          </thead>
          {properties?.length > 0 ? (
            <tbody>
              {properties?.map((item, idx) => (
                <tr key={item?._id} className="text-lg font-semibold">
                  <th>{idx + 1}</th>
                  <th>
                    <img
                      className="w-24 h-24 rounded-2xl"
                      src={item.propertyImg}
                      alt=""
                    />
                  </th>
                  <th>{item.title}</th>
                  <td>{item.agentName}</td>
                  <td>
                    ({item.priceRange.min}-{item.priceRange.max})$
                  </td>
                  <td>
                    {item?.adStatus === "advertised" ? (
                      <span>
                        <CustomButton
                          disabled
                          buttonText={"Advertise"}
                        ></CustomButton>
                      </span>
                    ) : (
                      <span onClick={() => handleAdvertise(item)}>
                        <CustomButton buttonText={"Advertise"}></CustomButton>
                      </span>
                    )}
                  </td>

                  <td>
                    {item?.adStatus === "advertised" && (
                      <span onClick={() => handleRemoveAds(item._id)}>
                        <CustomButton buttonText={"Remove Ad"}></CustomButton>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <Empty text={"This"}></Empty>
          )}
        </table>
      </div>
    </Container>
  );
};

export default AdvertiseProperty;
