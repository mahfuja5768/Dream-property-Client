/* eslint-disable react/prop-types */
import useReviews from "../../../hooks/useReviews";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Empty from "../../../components/Empty/Empty";

const AllReviews = ({ propertyId }) => {
  // console.log(propertyId);

  const [allReviews, refetch] = useReviews();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const selectedProperty = allReviews.filter(
      (item) => item.propertyId === propertyId
    );
    // console.log(selectedProperty);
    setReviews(selectedProperty);
  }, [allReviews]);

  const date = new Date(reviews.date);
  const formattedDate = date.toLocaleString();
  // console.log(formattedDate);

  // console.log(reviews);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div className="w-1/2 text-center mx-auto">
          {!reviews.length ? (
            <>
             <Empty text={"Reviews"}/>
            </>
          ) : (
            reviews.map((item) => (
              <SwiperSlide className="text-center mx-auto" key={item._id}>
                <div className="bg-secondary p-12 rounded-2xl">
                  <p className="md:text-2xl text-xl font-medium text-primary">
                    Review for: {item.title}
                  </p>
                  <p className="md:text-2xl text-xl font-fold text-primary">
                    Review: {item.reviewDetail}
                  </p>
                  <p className="text-xl font-medium text-primary">
                    Reviewer Name: {item.reviewerName}
                  </p>
                  <p className="text-xl font-medium text-primary">
                    Reviewer Email: {item.email}
                  </p>
                  <p className="text-xl font-medium text-primary">
                    Date: {item.date}
                  </p>
                </div>
              </SwiperSlide>
            ))
          )}
        </div>
      </Swiper>
    </div>
  );
};

export default AllReviews;
