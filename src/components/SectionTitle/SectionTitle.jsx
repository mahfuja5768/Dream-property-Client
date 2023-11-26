/* eslint-disable react/prop-types */
import Container from "../../shared/Container/Container";

const SectionTitle = ({ heading }) => {
  return (
    <Container>
      {" "}
      <div className="max-w-screen-xl mx-auto text-center md:w-3/12 my-12 ">
        <h3 className="text-2xl md:text-3xl font-bold uppercase border-y-4 rounded-t-full bg-secondary border-primary py-4 mt-2">
          {heading}
        </h3>
      </div>
    </Container>
  );
};

export default SectionTitle;
