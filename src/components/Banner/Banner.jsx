import { FaArrowCircleRight } from "react-icons/fa";
import img1 from "../../../src/assets/images/b5.webp";
import img2 from "../../../src/assets/images/b2.webp";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[90vh] mb-12 text-center lg:text-start ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" alt="banner-png" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-b from-[#121212] h-full">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#272626] border-none text-white ms-5"
            >
              ❮
            </a>
            <div className="hero-content text-white">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div
                  className=" lg:col-span-3"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <h1 className="mb-4 text-3xl md:text-5xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
                    Find Your Dream Home Today
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    Luxury Homes Tailored to Your Distinctive Lifestyle
                  </h2>
                  <p className="my-3 md:w-3/4 lg:w-full mx-auto text-[#f5f4f4]">
                    Welcome to Dream-Property where exceptional living begins.
                    Immerse yourself in a world of timeless elegance as you
                    explore our curated collection of luxury homes.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#272626] border-none text-white me-5"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" alt="banner-png" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-b from-[#121212] h-full">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#272626] border-none text-white ms-5"
            >
              ❮
            </a>
            <div className="hero-content text-white">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div
                  className=" lg:col-span-3"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <h1 className="mb-4 text-3xl md:text-5xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
                    Where Dreams Meet Realty: Browse Our Properties
                  </h1>
                  <p className="my-3 md:w-3/4 lg:w-full mx-auto text-[#bebebe]">
                    Our commitment to personalized service ensures that each
                    residence is a masterpiece, crafted to suit the most
                    discerning tastes.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#272626] border-none text-white me-5"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
