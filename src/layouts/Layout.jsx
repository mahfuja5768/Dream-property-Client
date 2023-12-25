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
          <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
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
              <div className="navbar-start">
                <img src={logo} className="w-28" alt="logo" />
                <Link to="/" className=" cursor-pointer font-bold md:text-2xl text-xl">
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
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side z-10 to-black">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-primary text-white  z-10 md:fixed flex flex-col justify-start pt-24 overflow-x-hidden  space-y-6 px-2 py-4 absolute inset-y-0 left-0">
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
