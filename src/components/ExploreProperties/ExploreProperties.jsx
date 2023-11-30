import img1 from "../../../src/assets/images/b1.webp";
import img2 from "../../../src/assets/images/b2.webp";
import img3 from "../../../src/assets/images/b3.webp";
import img4 from "../../../src/assets/images/b4.webp";
import img5 from "../../../src/assets/images/b5.webp";
import img6 from "../../../src/assets/images/b6.webp";
import img7 from "../../../src/assets/images/b7.webp";
import img8 from "../../../src/assets/images/b8.jpg";
import Container from "../../shared/Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
// ... add more image imports if needed

const ExploreProperties = () => {
  return (
    <Container>
      <SectionTitle heading={"Explore More Properties"}></SectionTitle>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <img src={img1} className="" alt="" />
        <img src={img2} className="" alt="" />
        <img src={img3} className="" alt="" />
        <img src={img4} className="" alt="" />
        <img src={img5} className="" alt="" />
        <img src={img6} className="" alt="" />
        <img src={img7} className="" alt="" />
        <img src={img8} className="" alt="" />
      </div>
    </Container>
  );
};

export default ExploreProperties;
