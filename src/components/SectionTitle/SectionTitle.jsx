/* eslint-disable react/prop-types */

const SectionTitle = ({ heading }) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div
        className="arrow-left"
        style={{
          width: 0,
          height: 0,
          borderTop: "40px solid transparent",
          borderRight: "50px solid #276597",
          borderBottom: "40px solid transparent",
        }}
      ></div>
      <h3 className="text-xl md:text-2xl lg:text-3xl border-y-8 border-[#276597] bg-secondary w-1/4 font-bold  text-center py-3">
        {heading}
      </h3>
      <div
        className="arrow-right"
        style={{
          width: 0,
          height: 0,
          borderTop: "50px solid transparent",
          borderLeft: "50px solid #276597",
          borderBottom: "40px solid transparent",
        }}
      ></div>
    </div>
  );
};

export default SectionTitle;
