import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import loginPng from "../../assets/images/login.png";
import Container from "../../shared/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        title: "Success!",
        text: "Successfully logged in!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <Container>
      <div className="">
        <Helmet>
          <title>Dream-Property | Login</title>
        </Helmet>
        <SectionTitle heading={'Login Now'}></SectionTitle>
        <div className="md:px-24 flex-col lg:flex-row justify-center items-center">
          <div className="text-center  lg:text-left ">
            <img src={loginPng} className="w-1/6 mx-auto" alt="" />
          </div>
          <div className="card shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                  required
                />
              </div>

              <label className="label">
                <p>
                  New to this?
                  <Link
                    to="/signUp"
                    className="ms-4 text-blue-600 text-xl label-text-alt link link-hover"
                  >
                    Sign up
                  </Link>
                </p>
              </label>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
