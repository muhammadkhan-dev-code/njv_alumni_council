import React from 'react';

const IntroCards = ({ name, image, shortDescription }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm mt-1">{shortDescription}</p>
    </div>
  );
};

export default IntroCards;