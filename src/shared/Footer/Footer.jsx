import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaPhone } from "react-icons/fa6";
import Container from "../Container/Container";
import CustomButton from "../CustomButton/customButton";

const Footer = () => {
  return (
    <div
      className="bg-secondary border-t px-8 mt-12"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
      <footer>
        <Container>
          <div className=" py-12 md:py-16  grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:grid-cols-2">
              <div className="flex flex-col gap-3 ">
                <Link to="/">
                  <img src={logo} alt="" className="mb-3 w-52 h-24" />
                </Link>
                <h3 className="ms-5">QUESTION OR FEEDBACK?</h3>
                <p className="flex items-center gap-2 ms-5">
                  <FaPhone className="text-lg"></FaPhone>{" "}
                  <span>+099 222 111</span>
                </p>
                <p className="flex items-center gap-2 ms-5">
                  <FaMailBulk className="text-lg"></FaMailBulk>{" "}
                  <span>@dreamProperty.com</span>
                </p>
              </div>
            </div>

            <div className="">
              <nav className="flex flex-col gap-4 list-none">
                <header className="font-bold text-2xl  mb-2 ">
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

            <form>
              <header className="font-bold text-2xl">Newsletter</header>
              <p className="w-3/4 my-2">
                You can trust us. we only send promo offers, not a single spam.
              </p>

              <fieldset className="form-control  my-4  md:w-80">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-1/2 md:w-full pr-16"
                  />
                  <span className=" w-1/2  md:w-1/3 absolute top-0 right-0 rounded-l-none normal-case">
                    <CustomButton buttonText={"Subscribe"}></CustomButton>
                  </span>
                </div>
              </fieldset>
            </form>
            <nav className="">
              <header className="font-bold text-2xl  text-start md:text-center">
                Social links
              </header>
              <div className="flex justify-start md:items-center md:flex-col  md:justify-center gap-12 my-6">
                <a
                  href="https://www.facebook.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaFacebookF className="text-xl "></FaFacebookF>
                </a>
                <a
                  href="https://www.dribbble.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaLinkedin className="text-xl"></FaLinkedin>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaTwitter className="text-xl"></FaTwitter>
                </a>
              </div>
            </nav>
          </div>
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
