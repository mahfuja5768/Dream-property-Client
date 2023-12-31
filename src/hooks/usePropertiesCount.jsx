
import axiosSecure from "../api";
import { useQuery } from "@tanstack/react-query";

const usePropertiesCount = () => {
  const { refetch, data: count = [] } = useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const res = await axiosSecure.get("/properties-count");
      return res.data;
    },
  });

  return [count, refetch];
};

export default usePropertiesCount;
