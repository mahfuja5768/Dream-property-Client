/* eslint-disable react-hooks/rules-of-hooks */
import useAxiosPublic from "../hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic()

export const saveUser = async (user) => {
    // console.log(user)
    // console.log(user.email)
    const currentUser = {
      email: user.email,
      role: "guest"
    };
    const { data } = await axiosPublic.put(`/users/${user?.email}`, currentUser);
    //   console.log(data)
    return data;
  };
  