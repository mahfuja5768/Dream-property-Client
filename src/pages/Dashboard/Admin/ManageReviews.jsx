import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from './../../../hooks/useAuth';
import axiosSecure from "../../../api";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Empty from "../../../components/Empty/Empty";
import Container from "../../../shared/Container/Container";
import CustomButton from "../../../hooks/customButton";

const ManageReviews = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  //   console.log(user.email);
  const { data: allReviews , refetch} = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get('/all-reviews');
      console.log(res.data);
      return res.data;
    },
  });

 const handleDelete = async (id) => {
    // console.log(id)
    try {
      const review =  await axiosSecure.delete(`/all-reviews/${id}`);
      // console.log(review);
      Swal.fire({
        title: "Success!",
        text: "Review deleted successfully !",
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
    <SectionTitle heading={"My Reviews"}></SectionTitle>
    {!allReviews?.length && <Empty text={'This'}></Empty>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allReviews?.map((item) => (
        <div
          key={item?._id}
          className="bg-secondary border-2 border-primary shadow-xl p-6 space-y-3"
        >
          <div className="flex flex-row-reverse items-center gap-2 justify-end ">
          <h3 className="text-2xl font-bold">Reviewer Name: {item?.reviewerName}</h3>
          <img src={item?.reviewerImg} className="w-12 h-12 rounded-3xl" alt="" />
          </div>
          <h3 className="text-2xl font-medium">
          Reviewer Email: {item.email}
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

export default ManageReviews;
