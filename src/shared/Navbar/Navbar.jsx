import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const {user} = useAuth()
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-primary bg-transparent hover:text-gray-400 hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-gray-400 hover:bg-transparent"
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
              ? " underline decoration-primary bg-transparent hover:text-gray-400 hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-gray-400 hover:bg-transparent"
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
              ? " underline decoration-primary bg-transparent hover:text-gray-400 hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-gray-400 hover:bg-transparent"
          }
        >
          Dashboard 
        </NavLink>
      </li>
      {/* <FaBell /> */}
    </>
  );
};

export default Navbar;
