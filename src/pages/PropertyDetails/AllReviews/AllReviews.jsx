import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Empty from "../../../components/Empty/Empty";
import useReviews from "../../../hooks/useReviews";

const AllReviews = ({ propertyId }) => {
  // console.log(propertyId);

  const [allReviews, refetch] = useReviews();
  const [reviews, setReviews] = useState([]);
  // console.log(allReviews);
  useEffect(() => {
    const selectedProperty = allReviews.filter(
      (item) => item.propertyId === propertyId
    );
    // console.log(selectedProperty);
    setReviews(selectedProperty);
  }, [allReviews]);


  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="w-1/2 text-center mx-auto">
          {!reviews.length ? (
            <>
              <Empty text={"Reviews"} />
            </>
          ) : (
            reviews.map((item) => (
              <SwiperSlide className="text-center mx-auto" key={item._id}>
                <div className=" p-12 rounded-2xl">
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
