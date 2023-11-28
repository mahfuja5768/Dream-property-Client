import React, { useState } from 'react';
import Container from '../../../shared/Container/Container';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
// import { getOfferProperty } from '../../../api/auth';
import Empty from '../../../components/Empty/Empty';
import axiosSecure from '../../../api';
import CustomButton from '../../../hooks/CustomButton';
import { Link } from 'react-router-dom';

const PropertyBrought = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
  
    const { refetch, data: offerProperties = [] } = useQuery({
      queryKey: ["offerProperties"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/offer-properties-for-buyer/${user?.email}`);
        console.log(res.data);
        return res.data;
      },
    });

    return (
        <Container>
        <SectionTitle heading={"My Wishlists"}></SectionTitle>
        {!offerProperties?.length && <Empty text={"This"}></Empty>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerProperties?.map((item) => (
            <div
              key={item._id}
              className="bg-secondary border-2 border-primary shadow-xl p-6 space-y-3"
            >
              {" "}
              <img src={item.propertyImg} className="h-[250px] object-cover" alt="" />
              <h3 className="text-2xl font-bold">Property Title: {item.title}</h3>
              <p className="text-xl">Location: {item.location}</p>
              <div className="flex items-center gap-2">
                <img
                  src={item.agentImg}
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <h3 className="text-xl">Agent Name: {item.agentName}</h3>
              </div>
              <h3 className={`${item?.status === 'pending' ? 'text-red-500 font-semibold'  : 'text-green-700 font-semibold'}`}>Status: <span className='text-lg font-bold'>{item.status}</span></h3>
              <h3 className=" mb-3">
                <span className="">Price:</span> ${item?.priceRange?.min}-
                {item?.priceRange?.max}
              </h3>
              {
                item.status === 'accepted' &&
                <div className="flex justify-end items-center">
                <Link to='/dashboard/payment' >{/* onClick={() => handlePay(item)} */}
                  <CustomButton buttonText={"Pay"}></CustomButton>
                </Link>
              </div>
              }
            </div>
          ))}
        </div>
      </Container>
    );
};

export default PropertyBrought;