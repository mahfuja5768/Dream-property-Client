import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const useProperties = () => {
  const { refetch, data: properties = [] } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/properties");
      // console.log(res.data);
      return res.data;
    },
  });

  return [properties, refetch];
};

export default useProperties;
