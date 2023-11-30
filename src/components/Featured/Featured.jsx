
import img2 from "../../../src/assets/images/b3.webp";
import img3 from "../../../src/assets/images/b3.webp";
import Container from "../../shared/Container/Container";
import CustomButton from "../../shared/CustomButton/customButton";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section
      className="my-24 text-white pt-12 bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img2})`,
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}  data-aos-duration="3000"
      data-aos="fade-up"
   data-aos-anchor-placement="center-bottom"
    >
      <Container>
        <div className="flex flex-col lg:flew-row justify-center items-center gap-6 py-24 px-16 pt-12">
          <div>
            <img src={img3} className="rounded-xl" alt="" />
          </div>
          <div className="md:ml-10 flex flex-col justify-center items-center">
            <p>March 29, 2023</p>
            <h3 className="text-xl font-bold ">
              Discover Our New Selection Properties
            </h3>
            <p className="lg:w-1/2  ">
              Embark on a journey of discovery with our newest selection of
              properties. At Dream-Property, we are proud to present a
              curated collection of homes that embody the epitome of comfort,
              style, and modern living. Our latest listings feature a diverse
              range of residences, from contemporary urban retreats to charming
              suburban homes. Each property is carefully selected to provide you
              with the utmost in quality and convenience. Take a step towards
              your dream home – explore our new listings today and let the
              search for your perfect space begin
            </p>
           <Link to={'/allProperties'} className="mt-6">
           <CustomButton buttonText={"Show Properties"}></CustomButton></Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
