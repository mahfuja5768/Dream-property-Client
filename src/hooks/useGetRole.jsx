import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosSecure from "../api";


const useGetRole = () => {
    const { user } = useAuth();
    const { data: userRole ,refetch} = useQuery({
      queryKey: ["userRole"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/user-role/${user?.email}`);
        // console.log(res.data[0].role);
        return res.data[0].role;
      },
    });
    return [userRole, refetch];
};

export default useGetRole;