import Lottie from "lottie-react";
import gif from "../../assets/loader.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
       <Lottie animationData={gif}></Lottie>
    </div>
  );
};

export default Loading;
