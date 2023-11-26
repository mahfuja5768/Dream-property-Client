/* eslint-disable react-hooks/rules-of-hooks */
import useAxiosPublic from "../hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();

export const saveUser = async (user) => {
  console.log(user);
  console.log(user?.email);
  const currentUser = {
    name: user?.displayName,
    photoUrl: user?.photoURL,
    email: user?.email,
    role: "guest",
  };
  const { data } = await axiosPublic.post("/users", currentUser);
  console.log(data);
  return data;
};
