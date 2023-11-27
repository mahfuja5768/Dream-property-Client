import { useState } from "react";
import logo from "../../assets/images/logo.png";
// import MenuItem from './MenuItem'
import { AiOutlineBars } from "react-icons/ai";
import CustomButton from "../../hooks/CustomButton";
import { FaHouseChimney } from "react-icons/fa6";

import MenuItem from "./MenuItem";
import {
  FaUser,
  FaList,
  FaProductHunt,
  FaFaceLaughBeam,
} from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const { user, logOut } = useAuth();
  //   console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully log out!",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-secondary text-primary flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <img src={logo} className="w-28" alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-secondary w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
              <img src={logo} alt="" />
            </div>
            <h2 className="md:text-2xl text-xl font-bold text-primary">
              Welcome to dashboard,{" "}
              <span className="text-blue-900">{user?.displayName}</span>
            </h2>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem
                icon={FaHouseChimney}
                label={"Home"}
                address="/"
              ></MenuItem>
              <MenuItem
                icon={FaUser}
                label={"My Profile"}
                address="/dashboard/myProfile"
              ></MenuItem>
              <MenuItem
                icon={FaList}
                label={"My WishList"}
                address="/dashboard/wishList"
              ></MenuItem>
              <MenuItem
                icon={FaProductHunt}
                label={"Property Brought"}
                address="/dashboard/propertyBrought"
              ></MenuItem>
              <MenuItem
                icon={FaFaceLaughBeam}
                label={"My Reviews"}
                address="/dashboard/reviews"
              ></MenuItem>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <span onClick={handleLogout}>
            <CustomButton buttonText={"Logout Now"} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
