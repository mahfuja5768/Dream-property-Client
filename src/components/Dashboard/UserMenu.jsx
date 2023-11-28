import { FaList, FaProductHunt } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { FaFaceLaughBeam } from "react-icons/fa6";


const UserMenu = () => {
    return (
        <>
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
        </>
    );
};

export default UserMenu;