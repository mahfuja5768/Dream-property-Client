import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { saveUser } from "../../api/auth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { imageUpload } from "../../api/utils";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const navigate = useNavigate();
  // const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.image[0];
    // console.log(image);

    try {
      const imageData = await imageUpload(image);
      const result = await createUser(email, password);
      await updateUserProfile(name, imageData?.data?.display_url);

      // console.log(result.user);
      const saveUserInfo = await saveUser(result?.user);
      console.log(saveUserInfo);

      reset();
      Swal.fire({
        title: "Success!",
        text: "Successfully user created!",
        icon: "success",
        confirmButtonText: "Done",
      });
      reset();
      navigate("/");
      // sign up korar por name, profile ase na seta thekate ....
      //       logOut().then(() => {
      //         navigate("/login");
      // }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
      reset();
    }
    // try {
    //   const imageData = await imageUpload(image);
    //   const result = createUser(email, password);
    //   await updateUserProfile(name, imageData?.data?.display_url);

    //   const userInfo = {
    //     name: data.name,
    //     email: data.email,
    //   };
    //   axiosPublic
    //   .post("/users", userInfo)
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.insertedId) {
    //       reset();
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Successfully user created!",
    //         icon: "success",
    //         confirmButtonText: "Done",
    //       });
    //       // sign up korar por name, profile ase na seta thekate ....
    //       logOut().then(() => {
    //         navigate("/login");
    //       });
    //     }
    //   })

    // } catch (error) {
    //   console.log(error);
    //   Swal.fire({
    //     title: "Error!",
    //     text: `${error.message}`,
    //     icon: "error",
    //     confirmButtonText: "Done",
    //   });
    //   reset();
    // }
  };

  return (
    <div>
      <Helmet>
        <title>Dream-Property | Sign up</title>
      </Helmet>
      <SectionTitle heading={"Sign Up Now"}></SectionTitle>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Type here"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                   className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-500">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className="text-red-500">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-500">
                    Password must have one upper case, one lower case, one
                    number and one special characters
                  </p>
                )} */}
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  name="password"
                  placeholder="password"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Password is required
                  </p>
                )}
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Choose Photo For Profile</span>
                </label>
                {/* <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label> */}
                <input
                  {...register("image", { required: true })}
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="w-full file-input-warning"
                />
                {errors.image?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Image is required
                  </p>
                )}
              </div>

              <label className="label">
                <p>
                  Already have an account ?
                  <Link
                    to="/login"
                    className="ms-4 text-blue-600 text-xl label-text-alt link link-hover"
                  >
                    login now
                  </Link>
                </p>
              </label>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-primary"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
