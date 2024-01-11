import { useQuery } from '@tanstack/react-query';
import axiosSecure from '../api';
import useAuth from './useAuth';

const useGetBroughtProperty = () => {
     const { user } = useAuth();

  const { refetch, data: offerProperties = [] } = useQuery({
    queryKey: ["offerProperties"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/offer-properties-for-buyer/${user?.email}`
      );
      // console.log(res.data);
      return res.data;
    },
  });

  return [offerProperties, refetch];
};

export default useGetBroughtProperty;