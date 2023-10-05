const ServiceItem = ({ id, title, desc }) => {
  return (
    <div key={id} className="w-full bg-[#606C38] rounded-lg p-5 my-5 grid grid-cols-1">
      
      <div className="md:flex md:flex-col md:px-5 md:text-2xl">
        <h2 className="text-stone-200 font-bold text-xl mb-2">
          {title}
        </h2>
        <h2 className="text-stone-200 text-sm leading-5 text-justify">
          {desc}
        </h2>
      </div>
    </div>
  );
};

export default ServiceItem;