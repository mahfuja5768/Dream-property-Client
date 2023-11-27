import { useQuery } from "@tanstack/react-query";
import axiosSecure from ".";

export const getDetails = async (id) => {
    // console.log(user)
  const { data } = await axiosSecure.get(`/properties/${id}`);
  return data;
};
