import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CustomButton from "../../shared/CustomButton/customButton";

const Career = () => {
  return (
    <div className="my-24 px-4">
      <SectionTitle
        heading={"  Join Our Team at Dream-Property"}
      ></SectionTitle>
      <div className="py-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              style={{
                borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
                borderImageSlice: 1,
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              className="mb-6 p-4 bg-white shadow-md rounded"
            >
              <h3 className="text-xl font-semibold mb-2">Real Estate Agent</h3>
              <p className="text-gray-700">
                We are looking for motivated and experienced real estate agents
                to join our team. If you have a passion for helping people find
                their dream homes, we want to hear from you!
              </p>
              <p className="mt-4 text-blue-500 mb-5">
                Location: Springfield, USA
              </p>
              <CustomButton buttonText={"Apply Now"}></CustomButton>
            </div>

            <div
              style={{
                borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
                borderImageSlice: 1,
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              className="mb-6 p-4 bg-white shadow-md rounded"
            >
              <h3 className="text-xl font-semibold mb-2">Property Manager</h3>
              <p className="text-gray-700">
                Dream-Property is seeking an organized and detail-oriented
                property manager to oversee our rental properties. If you have
                experience in property management, we'd love to hear from you!
              </p>
              <p className="mt-4 text-blue-500 mb-5">
                Location: Harmonyville, TX
              </p>
              <CustomButton buttonText={"Apply Now"}></CustomButton>
            </div>

            <div
              style={{
                borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)",
                borderImageSlice: 1,
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              className="mb-6 p-4 bg-white shadow-md rounded"
            >
              <h3 className="text-xl font-semibold mb-2">
                Marketing Specialist
              </h3>
              <p className="text-gray-700">
                We are hiring a creative and results-driven marketing specialist
                to promote Dream-Property and its listings. If you have a strong
                background in marketing, join us in showcasing dream properties
                to the world!
              </p>
              <p className="mt-4 text-blue-500 mb-5">
                Location: Pinecrest Heights, FL
              </p>
              <CustomButton buttonText={"Apply Now"}>Apply Now</CustomButton>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Interested candidates should send their resume and cover letter to
            careers@dreamproperty.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
