import {
  FaList,
  FaProductHunt,
  FaRegQuestionCircle,
  FaUserAlt,
} from "react-icons/fa";
import MenuItem from "./MenuItem";
import { FaFaceLaughBeam } from "react-icons/fa6";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaList}
        label={"Manage Properties"}
        address="/dashboard/manageProperties"
      ></MenuItem>
      <MenuItem
        icon={FaUserAlt}
        label={"Manage Users"}
        address="/dashboard/manageUsers"
      ></MenuItem>
      <MenuItem
        icon={FaFaceLaughBeam}
        label={"Manage Reviews"}
        address="/dashboard/manageReviews"
      ></MenuItem>
    </>
  );
};

export default AdminMenu;
