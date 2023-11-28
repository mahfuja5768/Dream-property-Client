
import axiosSecure from ".";

export const getDetails = async (id) => {
    // console.log(user)
  const { data } = await axiosSecure.get(`/properties/${id}`);
  return data;
};

export const getOfferPropertyPrice = async (id) => {
  // console.log(user)
  const { data } = await axiosSecure.get(`/offer-properties/${id}`);
  return data;
};
