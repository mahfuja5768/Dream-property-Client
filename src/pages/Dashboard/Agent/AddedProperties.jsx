import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../shared/Container/Container";
import AddedProperty from "./AddedProperty";
import useAuth from "../../../hooks/useAuth";
import axiosSecure from "../../../api";
import Empty from "../../../components/Empty/Empty";
import { Helmet } from "react-helmet-async";


const AddedProperties = () => {
    const {user} = useAuth()
     const { data: addedProperty, refetch } = useQuery({
       queryKey: ["addedProperty"],
       queryFn: async () => {
         const res = await axiosSecure.get(
           `/agent-properties?email=${user?.email}`
         );
         console.log(res.data);
         return res.data;
       },
     });
    return (
      <Container>
         <Helmet>
          <title>Dream-Property | My Added Properties</title>
        </Helmet>
        <SectionTitle heading={"Added Properties"}></SectionTitle>
        {
            !addedProperty?.length && <Empty text={'This'}></Empty>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-9 justify-center items-center">
          {addedProperty?.map((property) => (
            <AddedProperty key={property._id} refetch={refetch} property={property}></AddedProperty>
          ))}
        </div>
      </Container>
    );
};

export default AddedProperties;