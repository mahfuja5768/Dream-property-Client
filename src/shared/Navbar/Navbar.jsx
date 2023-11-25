import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
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
    </>
  );
};

export default Navbar;
