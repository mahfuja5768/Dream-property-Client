import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const useReviews = () => {
  const { refetch, data: allReviews = [] } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  return [allReviews, refetch];
};

export default useReviews;
