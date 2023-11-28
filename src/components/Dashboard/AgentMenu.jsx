import { FaList, FaProductHunt, FaRegQuestionCircle } from "react-icons/fa";
import { FaFaceLaughBeam } from "react-icons/fa6";
import MenuItem from "./MenuItem";

const AgentMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaList}
        label={"My Added Properties"}
        address="/dashboard/addedProperties"
      ></MenuItem>
      <MenuItem
        icon={FaProductHunt}
        label={"Sold Properties"}
        address="/dashboard/soldProperties"
      ></MenuItem>
      <MenuItem
        icon={FaRegQuestionCircle}
        label={"Requested Properties"}
        address="/dashboard/requestedProperties"
      ></MenuItem>
    </>
  );
};

export default AgentMenu;
