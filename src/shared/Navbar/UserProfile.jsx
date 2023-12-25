/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import CustomButton from "../CustomButton/customButton";

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
          <Link to="/signUp">
            <CustomButton buttonText="Sign up" />
          </Link>
        
        </>
      )}

      {/* <div className="hidden lg:flex gap-3 justify-center items-center">
        {user ? (
          <div className=" flex  items-center gap-2 justify-center mx-2">
            {user?.photoURL && (
              <div className="dropdown dropdown-bottom">
                <label
                  tabIndex={0}
                  className="w-full btn m-1 bg-transparent hover:bg-transparent border-none"
                >
                  <img
                    src={user?.photoURL}
                    className=" w-10 h-10 cursor-pointer rounded-full select-none"
                    alt="user photo"
                  />
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content text-black z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {user && (
                    <Link
                      to="/login"
                      onClick={handleLogout}
                      className="btn bg-primary border-none hover:bg-red text-white"
                    >
                      Log out
                    </Link>
                  )}
                  {!user && (
                    <div>
                      <Link
                        to="/login"
                        className="btn bg-primary border-none hover:bg-red text-white"
                      >
                        Login
                      </Link>
                      <Link
                        to="/login"
                        className="btn bg-primary border-none hover:bg-red text-white"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </ul>
              </div>
            )}

            <h3 className=" text-sm text-center mt-1">{user?.displayName}</h3>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="btn bg-primary border-none hover:bg-red text-white"
            >
              Login
            </Link>
            <Link
              to="/login"
              className="btn bg-primary border-none hover:bg-red text-white"
            >
              Login
            </Link>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default UserProfile;
