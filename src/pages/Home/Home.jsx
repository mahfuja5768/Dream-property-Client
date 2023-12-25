import { Helmet } from "react-helmet-async";
import AdvertiseProperties from "../../components/Advertise/AdvertiseProperties";
import Banner from "../../components/Banner/Banner";
import LatestReviews from "../../components/LatestReviews/LatestReviews";
import Featured from "../../components/Featured/Featured";
import ExploreProperties from "../../components/ExploreProperties/ExploreProperties";
import Customer from "../../components/Customer/Customer";
import Map from "../../components/GoogleMap/Map";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dream-Property | Home</title>
      </Helmet>
      <Banner></Banner>
      <AdvertiseProperties></AdvertiseProperties>
      <Featured></Featured>
      <LatestReviews></LatestReviews>
      <ExploreProperties></ExploreProperties>
      <Customer></Customer>
      <Map></Map>
    </div>
  );
};

export default Home;
