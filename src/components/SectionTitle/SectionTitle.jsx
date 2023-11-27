/* eslint-disable react/prop-types */
import Container from "../../shared/Container/Container";

const SectionTitle = ({ heading }) => {
  return (
    <Container>
      {" "}
      <div className="max-w-screen-xl mx-auto text-center md:w-3/12 my-12 mt-28">
        <h3 className="text-xl md:text-2xl font-bold uppercase border-y-4 rounded-t-full bg-secondary border-primary py-3 px-4 md:py-12 lg:py-6 lg:px-6 mt-2">
          {heading}
        </h3>
      </div>
    </Container>
  );
};

export default SectionTitle;
