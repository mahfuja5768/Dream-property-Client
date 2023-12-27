import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useGetRole from "../../hooks/useGetRole";
import Container from "../../shared/Container/Container";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import MenuItem from "../../components/Dashboard/MenuItem";
import { IoIosArrowDown } from "react-icons/io";

const DashboardHome = () => {
  const [userRole, loading] = useGetRole();
  const { user, logOut } = useAuth();

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
    <Container>
      <div className=" ps-3 my-12">
        <div className="flex items-center justify-between  ">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Welcome to, {userRole} Dashboard
            </h2>
          </div>
          <div className="">
            {user?.photoURL && (
              <div className="dropdown dropdown-left">
                <label
                  tabIndex={0}
                  className="container mx-auto btn m-1 bg-transparent hover:bg-transparent border-none"
                >
                  <img
                    src={user?.photoURL}
                    className=" w-10 h-10 cursor-pointer rounded-full select-none"
                    alt="user photo"
                  />{" "}
                  <IoIosArrowDown className="text-xl font-bold" />
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content flex flex-col justify-center items-center text-black z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <MenuItem
                    icon={FaUser}
                    label={"My Profile"}
                    address="/dashboard/myProfile"
                  ></MenuItem>
                  <Link
                    to="/login"
                    onClick={handleLogout}
                    className=" text-red-500 mb-4 font-semibold text-xl flex-row-reverse items-center border-none flex justify-center gap-3"
                  >
                    <span> Log out</span> <MdLogout className="text-lg" />
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="divider divider-Neutral"></div>
      </div>
    </Container>
  );
};

export default DashboardHome;
