import React from "react";

const StdCards = ({ name, image, role, shortDescription }) => {
  return (
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 gap-2 rounded-lg my-6 w-auto h-[24rem]">
    
      <div className="flex justify-center items-center h-1/2 overflow-hidden rounded-t-md bg-gray-50">
        <img
          src={image}
          alt={name}
          className="h-full w-auto object-contain rounded-t-md pt-2"
        />
      </div>

      {/* Content Section - Other Half */}
      <div className="p-6 text-center h-1/2 flex flex-col justify-center">
        <h4 className="mb-1 text-xl font-semibold text-slate-800">
          {name}
        </h4>
        <p className="text-sm font-semibold text-slate-500 uppercase">
          {role}
        </p>
        <p className="text-base text-slate-600 mt-4 font-light">
          {shortDescription}
        </p>
      </div>
    </div>
  );
};

export default StdCards;
