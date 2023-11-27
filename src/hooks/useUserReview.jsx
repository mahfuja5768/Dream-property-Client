import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";
import useAuth from "./useAuth";

const useUserReview = () => {
    const { user ,loading} = useAuth();
  const { data: userReviews = [], refetch } = useQuery({
    enabled: !loading,
    queryKey: ["userReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-reviews/${user?.email}`);
    //   console.log(res?.data)
      return res?.data;
    },
  });

  return [userReviews, refetch];
};

export default useUserReview;
