import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useReviews from "../../hooks/useReviews";
import Container from "../../shared/Container/Container";
import Empty from "../Empty/Empty";
import SectionTitle from "../SectionTitle/SectionTitle";

//reviews-for-home

const LatestReviews = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: homeReviews = [] } = useQuery({
    queryKey: ["homeReviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews-for-home");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <Container>
      <SectionTitle heading={"Recent Reviews"}></SectionTitle>
      {!homeReviews.length && <Empty text={"This"}></Empty>}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      
      >
        {homeReviews?.map((item) => (
          <div   data-aos="zoom-in" data-aos-duration="3000"
            style={{
              borderImage: "linear-gradient(to right, #0F1B4C, #e7efff)", // Using colors from Tailwind configuration
              borderImageSlice: 1,
              borderWidth: "4px",
              borderStyle: "solid",
            }}
            key={item._id}
            className=" border-2 bg-white shadow-xl p-6 space-y-3"
          >
            <h3 className="text-2xl font-bold">Property Title: {item.title}</h3>
            <div className="flex  items-center justify-end gap-3 flex-row-reverse">
              <h3 className="text-2xl font-medium">
                Reviewer Name: {item.reviewerName}
              </h3>
              {item.reviewerImg && (
                <img
                  src={item.reviewerImg}
                  className="w-12 h-12 rounded-full"
                ></img>
              )}
            </div>
            <p className="text-xl">Review: {item.reviewDetail}</p>
            <h3 className="text-lg font-medium">Date: {item.date}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LatestReviews;
