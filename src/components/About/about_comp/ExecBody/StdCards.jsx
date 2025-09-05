import React from "react";
const StdCards = ({ name, image, role, shortDescription }) => {
  return (
    <div className="group relative flex flex-col bg-white shadow-md hover:shadow-2xl border border-slate-200  rounded-2xl my-6 w-72 h-[26rem] overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="relative h-1/2 w-full overflow-hidden bg-blue-950 hover:cursor-pointer ">
       <img
    src={image}
   alt={name}
  className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out   "
/>   
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition duration-300"></div>
      </div>
      <div className="p-5 text-center flex flex-col justify-center h-1/2">
        <h4 className="mb-1 text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h4>
        <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide">
          {role}
        </p>
        <p className="text-base text-slate-600 mt-3 font-light leading-relaxed">
          {shortDescription}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
    </div>
  );
};

export default StdCards;
