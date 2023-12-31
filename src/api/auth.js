/* eslint-disable react-hooks/rules-of-hooks */
import axiosSecure from ".";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const saveUser = async (user) => {
  const axiosPublic = useAxiosPublic();
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
  // console.log(wishlist)
  const { data } = await axiosSecure.post("/wishlists", wishlist);
  return data;
};

export const addReviews = async (review) => {
  // console.log(review)
  const { data } = await axiosSecure.post("/reviews", review);
  return data;
};

export const deleteReviews = async (id) => {
  // console.log(review)
  const { data } = await axiosSecure.delete(`/reviews/${id}`);
  return data;
};

export const deleteWishlist = async (id) => {
  // console.log(review)
  const { data } = await axiosSecure.delete(`/wishlists/${id}`);
  return data;
};

export const postOfferProperty = async (property) => {
  // console.log(review)
  const { data } = await axiosSecure.post("/offer-properties", property);
  return data;
};

export const makeOfferDetail = async (id) => {
  // console.log(user)
  const { data } = await axiosSecure.get(`/properties2/${id}`);
  // console.log("ddd-------->", data);
  return data;
};

export const updateProperty = async (id) => {
  // console.log(user)
  const { data } = await axiosSecure.get(`/agent-properties/${id}`);
  // console.log("ddd-------->", data);
  return data;
};
