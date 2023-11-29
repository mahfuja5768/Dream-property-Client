
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useProperties from "../../hooks/useProperties";
import Container from "../../shared/Container/Container";
import Property from "./Property";

const AllProperties = () => {
  const [properties] = useProperties();
  
  return (
    <Container>
      <SectionTitle heading={"All Verified Properties"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-9 justify-center items-center">
        {properties?.map((property) => (
          <Property key={property._id} property={property}></Property>
        ))}
      </div>
    </Container>
  );
};

export default AllProperties;
