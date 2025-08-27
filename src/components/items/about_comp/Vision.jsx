import React from 'react'
import vision from "../svg/vision.svg";
const Vision = () => {
  return (
    <>
       <div className="bg-white rounded-sm p-8 flex flex-col items-center text-center ">
          <img 
            src={vision} 
            alt="Our Vision" 
            className="w-24 h-24 mb-4 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-serif 
                         transition-all duration-300 ease-in-out hover:text-3xl hover:text-blue-700">
            Vision
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-sm">
            To inculcate in our fellows a knowledge base that cultivates: Free Thinkers, Creative 
            Problem Solvers and Compassionate Leaders who challenge the conventional wisdom of the 
            world.
          </p>
        </div>
    </>
  )
}

export default Vision
