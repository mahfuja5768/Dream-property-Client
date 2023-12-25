/* eslint-disable react/prop-types */

const SectionTitle = ({ heading }) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <h3 className="text-xl md:text-2xl lg:text-3xl bg-secondary w-1/4 font-bold  text-center py-3">
        {heading}
      </h3>
      
    </div>
  );
};

export default SectionTitle;
