/* eslint-disable react/prop-types */

const SectionTitle = ({ heading }) => {
  return (
    <div className="flex items-center justify-center mb-12 w-full">
      <h3 className="text-2xl md:text-3xl lg:text-4xl bg-secondary  font-bold  text-center py-3 px-7 rounded-sm">
        {heading}
      </h3>
      
    </div>
  );
};

export default SectionTitle;
