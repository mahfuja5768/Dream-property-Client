import { Link } from "react-router-dom";
import Container from "../shared/Container/Container";
import Navbar from "../shared/Navbar/Navbar";
import UserProfile from "../shared/Navbar/UserProfile";
import logo from '../assets/images/logo.png'

const Layout = ({ children }) => {
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full  bg-[#e7efff] fixed z-10">
          <Container>
            <div className="navbar">
              <div className="navbar-start  flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="navbar-start  px-2 mx-2 ">
                <img src={logo} className="w-24 h-24" alt="logo" />
                <Link to="/" className=" cursor-pointer font-bold text-2xl">
                Dream-Property
                </Link>
              </div>
              <div className="navbar-center flex-none hidden lg:block">
                <ul className="menu menu-horizontal text-lg font-semibold">
                  <Navbar></Navbar>
                 
                </ul>
              </div>
              <div className="navbar-end hidden lg:flex">
               <UserProfile flex={'flex'} center={'center'}/>
              </div>

            </div>
          </Container>
        </div>
        {children}
      </div>
      <div className="drawer-side z-10 to-black">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-secondary">
          <Navbar></Navbar>
          <div className="pl-4">
          <UserProfile></UserProfile>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
