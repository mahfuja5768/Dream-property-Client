import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../api/auth";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  
  const handleGoogleSignIn = async () => {
    try {
      const result = await googleLogin();
      const saveUserInfo = await saveUser(result.user);
      // console.log(saveUserInfo);

      Swal.fire({
        title: "Success!",
        text: "Successfully user logged in!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };
  return (
    <div>
      <div className="w-full flex justify-center px-8 pb-12">
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          <span className="">
            <FaGoogle></FaGoogle>
          </span>{" "}
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
