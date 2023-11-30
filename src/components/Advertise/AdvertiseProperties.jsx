import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../api";
import { Helmet } from "react-helmet-async";
import Container from "../../shared/Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import Empty from "../Empty/Empty";
import AdvertiseProperty from "./AdvertiseProperty";


const AdvertiseProperties = () => {
    const { data: adsProperties } = useQuery({
        queryKey: ["adsProperties"],
        queryFn: async () => {
          const res = await axiosSecure.get('/advertise-properties'
          );
          console.log(res.data);
          return res.data;
        },
      });
    return (
      <Container>
      <Helmet>
         <title>Dream-Property | All Properties</title>
       </Helmet>
     <div className="mt-12">
     <SectionTitle heading={"Advertise Properties"}></SectionTitle>
     {
      !adsProperties?.length && <Empty text={'This'}></Empty>
     }
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-9 justify-center items-center">
       {adsProperties?.map((property) => (
         <AdvertiseProperty key={property._id} property={property}></AdvertiseProperty>
       ))}
     </div>
     </div>
   </Container>
    );
};

export default AdvertiseProperties;