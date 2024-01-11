import { FaArrowCircleRight } from "react-icons/fa";
import CustomButton from "../../shared/CustomButton/customButton";
import banner from '../../../src/assets/images/n2.jpeg'
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-up" data-aos-duration="3000">
            <div className=" lg:col-span-3 ">
              <h1 className="mb-4 text-3xl md:text-6xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
                Find Your Dream Home Today
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold">
                Luxury Homes Tailored to Your Distinctive Lifestyle
              </h2>
              <p className="w-2/3 mx-auto my-6 text-[#f5f4f4]">
                Welcome to Dream-Property where exceptional living begins.
                Immerse yourself in a world of timeless elegance as you explore
                our curated collection of luxury homes.
              </p>
            </div>
            <Link to={"/allProperties"} className="mt-6">
              <button className="btn cursor-pointer bg-primary text-white border hover:border-4 hover:border-white  border-transparent hover:bg-transparent hover:text-white">
                Show Properties
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="carousel w-full h-[90vh] mb-12 text-center  ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" alt="banner-png" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-b from-[#000000] h-full">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#272626] border-none text-white ms-5"
            >
              ❮
            </a>
            <div className="hero-content container text-white mx-auto flex justify-center items-center flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div
                  className=" lg:col-span-3 "
                  data-aos="fade-up"
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
      </div> */}
    </div>
  );
};

export default Banner;
