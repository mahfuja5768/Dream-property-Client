import { FaArrowCircleRight } from "react-icons/fa";
import CustomButton from "../../shared/CustomButton/customButton";
import banner from "../../../src/assets/images/n2.jpeg";
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
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <img
            alt="daisy"
            src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
          />
        </div>
        <div className="diff-item-2">
          <img
            alt="daisy"
            src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg"
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default Banner;
