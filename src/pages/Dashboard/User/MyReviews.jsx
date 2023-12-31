import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useUserReview from "../../../hooks/useUserReview";
import Container from "../../../shared/Container/Container";
import { deleteReviews } from "../../../api/auth";
import Empty from "../../../components/Empty/Empty";
import CustomButton from "../../../shared/CustomButton/customButton";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const [userReviews, refetch] = useUserReview();
  //   console.log(userReviews);

  const handleDelete = async (id) => {
    // console.log(id)
    try {
      const review = await deleteReviews(id);
      // console.log(review);
      Swal.fire({
        title: "Success!",
        text: "Review deleted successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
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
    <Container>
      <Helmet>
        <title>Dream-Property | My Reviews</title>
      </Helmet>
      <SectionTitle heading={"My Reviews"}></SectionTitle>
      {!userReviews.length && <Empty text={"This"}></Empty>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userReviews?.map((item) => (
          <div
            style={{
              borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)", // Using colors from Tailwind configuration
              borderImageSlice: 1,
              borderWidth: "4px",
              borderStyle: "solid",
            }}
            key={item._id}
            className="bg-white border-2 border-primary shadow-xl p-6 space-y-3"
          >
            <h3 className="text-2xl font-bold">Property Title: {item.title}</h3>
            <h3 className="text-2xl font-medium">
              Agent Name: {item.agentName}
            </h3>
            <p className="text-xl">Review: {item.reviewDetail}</p>
            <h3 className="text-lg font-medium">Date: {item.date}</h3>
            <div className="flex justify-end">
              <span onClick={() => handleDelete(item._id)}>
                <CustomButton buttonText={"Delete"}></CustomButton>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyReviews;
