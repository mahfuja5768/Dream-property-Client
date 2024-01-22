import Container from "../../shared/Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import loginPng from "../../assets/images/n6.jpeg";
import Swal from "sweetalert2";

const Meeting = () => {
  const handleMeeting = (e) => {
    e.preventDefault();
    const form = e.target;
    Swal.fire({
      title: "Success!",
      text: "Successfully message sent!",
      icon: "success",
      confirmButtonText: "Done",
    });
    form.reset();
  };
  return (
    <div>
      {" "}
      <Container>
        <div className="">
          <SectionTitle heading={"SCHEDULE A MEETING"}></SectionTitle>
          <div className="grid  grid-cols-5 mx-auto justify-center items-center">
            <div className=" col-span-3">
              <img src={loginPng} className="w-1/2  mx-auto" alt="" />
            </div>
            <div className=" col-span-2 card shadow-2xl bg-base-100">
              <form onSubmit={handleMeeting} className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    name="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="number"
                    placeholder="Your Phone number"
                    className="w-full px-3 py-2 border rounded-md border-secondary focus:outline-primary bg-secondary text-gray-900"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary bg-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Meeting;
