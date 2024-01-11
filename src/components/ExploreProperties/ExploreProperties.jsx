import img1 from "../../../src/assets/images/b1.webp";
import img2 from "../../../src/assets/images/b2.webp";
import img3 from "../../../src/assets/images/b3.webp";
import img4 from "../../../src/assets/images/b4.webp";
import img5 from "../../../src/assets/images/b5.webp";
import img6 from "../../../src/assets/images/b6.webp";
import img7 from "../../../src/assets/images/b7.webp";
import img8 from "../../../src/assets/images/b8.jpg";
import img9 from "../../../src/assets/images/n3.jpeg";
import img10 from "../../../src/assets/images/n4.jpeg";
import img11 from "../../../src/assets/images/n5.jpeg";
import Container from "../../shared/Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
// ... add more image imports if needed

const ExploreProperties = () => {
  return (
    <Container>
      <SectionTitle heading={"Explore More Properties"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img1}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img2}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img3}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img4}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img5}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img6}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img7}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img8}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img9}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img11}
          className=""
          alt=""
        />
        <img
          style={{
            borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
            borderImageSlice: 1,
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={img10}
          className=""
          alt=""
        />
      </div>
    </Container>
  );
};

export default ExploreProperties;
