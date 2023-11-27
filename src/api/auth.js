/* eslint-disable react-hooks/rules-of-hooks */
import axiosSecure from ".";
import useAxiosPublic from "../hooks/useAxiosPublic";
// import useAxiosSecure from "../hooks/useAxiosSecure";

const axiosPublic = useAxiosPublic();
// const axiosSecure = useAxiosSecure();

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


//clear token from client side
export const clearToken = async () => {
  localStorage.removeItem("access-token");
};


export const addToWishlists = async (wishlist) => {
  console.log(wishlist)
  const { data } = await axiosSecure.post('/wishlists', wishlist);
  return data;
};
