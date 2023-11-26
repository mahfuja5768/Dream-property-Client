import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useProperties from "../../hooks/useProperties";
import Container from "../../shared/Container/Container";
import Property from "./Property";

const AllProperties = () => {
  const [properties, refetch] = useProperties();
  console.log(properties);
  return (
    <>
      <SectionTitle heading={"All Verified Properties"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {properties.map((property) => (
          <Property key={property._id} property={property}></Property>
        ))}
      </div>
    </>
  );
};

export default AllProperties;
