import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaPhone } from "react-icons/fa6";
import Container from "../Container/Container";
import CustomButton from "../CustomButton/customButton";

const Footer = () => {
  return (
    <div className="bg-primary text-white border-t px-8 mt-12">
      <footer>
        <Container>
          <div
            // data-aos="fade-up"
            className="  md:py-16 mb-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center  lg:grid-cols-3 gap-12"
          >
             <div className="">
              <header className="font-bold text-2xl  mb-2 text-[#f5a637]">About</header>
              <p>
                {" "}
                Discover the perfect home with Dream-Property. As your dedicated
                real estate partner, we combine expertise with personalized
                service, ensuring a seamless experience. Trust us for integrity,
                innovation, and a commitment to your goals.
              </p>
            </div>
            <div className="md:grid-cols-2 flex justify-center items-center flex-col">
              <div className="flex flex-col gap-3 ">
                <Link to="/">
                  <img src={logo} alt="" className="mb-3 w-52 h-24" />
                </Link>
                <h3 className="text-[#f5a637]">QUESTION OR FEEDBACK?</h3>
                <p className="flex items-center gap-2 ">
                  <FaPhone className="text-lg"></FaPhone>{" "}
                  <span>+099 222 111</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaMailBulk className="text-lg"></FaMailBulk>{" "}
                  <span>@dreamProperty.com</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:items-center flex-col">
              <nav className="flex flex-col gap-4 list-none">
                <header className="text-[#f5a637] font-bold text-2xl  mb-2 ">
                  Quick Menu
                </header>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
                        : "bg-transparent hover:text-primary hover:bg-transparent"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allProperties"
                    className={({ isActive }) =>
                      isActive
                        ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
                        : "bg-transparent hover:text-primary hover:bg-transparent"
                    }
                  >
                    All Properties
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
                        : "bg-transparent hover:text-primary hover:bg-transparent"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/signUp"
                    className={({ isActive }) =>
                      isActive
                        ? " underline decoration-primary bg-transparent hover:text-primary hover:bg-transparent decoration-2 underline-offset-8"
                        : "bg-transparent hover:text-primary hover:bg-transparent"
                    }
                  >
                    Sign up
                  </NavLink>
                </li>
              </nav>
            </div>
          </div>
          <hr />
          <nav className="mx-auto flex justify-center items-center mt-5">
            <div className="flex justify-start md:items-center   md:justify-center gap-12 my-6">
              <a
                href="https://www.facebook.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaFacebookF className="text-xl text-[#f5a637]"></FaFacebookF>
              </a>
              <a
                href="https://www.dribbble.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaLinkedin className="text-xl text-[#f5a637]"></FaLinkedin>
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaTwitter className="text-xl text-[#f5a637]"></FaTwitter>
              </a>
            </div>
          </nav>
        </Container>
        <div className=" flex  justify-center text-center items-center flex-end  py-3 px-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            Here.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
