/* eslint-disable react/prop-types */
const CustomButton = ({ buttonText }) => {
  return (
    <div>
      <button className="btn cursor-pointer bg-primary text-white hover:border-primary border-4 hover:bg-transparent hover:text-primary">
        {buttonText}
      </button>
    </div>
  );
};

export default CustomButton;
