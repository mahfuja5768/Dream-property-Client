/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import CustomButton from "../../hooks/CustomButton";
import Swal from "sweetalert2";

const UserProfile = ({ flex, center }) => {
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
    <div
      className={
        flex
          ? "flex items-center justify-center gap-3 "
          : " flex flex-col gap-4"
      }
    >
      {user && (
        <div
          className={
            center
              ? "flex items-center justify-center gap-3 border p-2 rounded-3xl cursor-pointer"
              : "cursor-pointer flex-col gap-3"
          }
        >
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img className="" src={user?.photoURL} />
            </div>
          </div>
          <h1>{user?.displayName}</h1>
        </div>
      )}
      {user ? (
        <Link onClick={handleLogout} to="/login">
          <CustomButton buttonText="Log out" />
        </Link>
      ) : (
        <>
          <Link to="/login">
            <CustomButton buttonText="Login" />
          </Link>
        </>
      )}
    </div>
  );
};

export default UserProfile;
