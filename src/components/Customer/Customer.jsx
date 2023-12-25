import img1 from "../../assets/images/p1.jpg";
import img2 from "../../assets/images/p2.jpg";
import img3 from "../../assets/images/p3.webp";
import img4 from "../../assets/images/p4.webp";
import img5 from "../../assets/images/p5.webp";
import img6 from "../../assets/images/p6.webp";
import img7 from "../../assets/images/p7.webp";
import Container from "../../shared/Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";

const Customer = () => {
  return (
    <Container>
      <div
        className=" my-12"
       
      >
        <SectionTitle heading={"Happy Customer"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <img data-aos="flip-left" src={img1} className="" alt="" />
          <img data-aos="flip-left" src={img2} className="" alt="" />
          <img data-aos="flip-left" src={img3} className="" alt="" />
          <img data-aos="flip-left" src={img4} className="" alt="" />
          <img data-aos="flip-left" src={img5} className="" alt="" />
          <img data-aos="flip-left" src={img6} className="" alt="" />
          <img data-aos="flip-left" src={img7} className="" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Customer;
