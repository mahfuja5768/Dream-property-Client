const customButton = ({ buttonText }) => {
  return (
    <div>
      <button className="btn bg-primary text-white hover:border-primary border-4 hover:bg-transparent hover:text-primary">
        {buttonText}
      </button>
    </div>
  );
};

export default customButton;
