/* eslint-disable react/prop-types */
const CustomButton = ({ disabled, buttonText }) => {
  return (
    <div>
      {disabled ? (
        <button
          disabled
          className="btn w-full cursor-pointer bg-primary text-white hover:border-primary border-4 hover:bg-transparent hover:text-primary"
        >
          {buttonText}
        </button>
      ) : (
        <button className="btn w-full cursor-pointer bg-primary text-white hover:border-primary border-4 hover:bg-transparent hover:text-primary">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CustomButton;
