import React from 'react'
import mission from "../svg/mission.svg";

const Mission = () => {
  return (
    <>
      <div className="  bg-white rounded-sm p-8 flex flex-col items-center text-center ">
                <img 
                  src={mission} 
                  alt="Mission" 
                  className="w-24 h-24 mb-4 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-serif 
                               transition-all duration-300 ease-in-out hover:text-3xl hover:text-blue-900">
                  Mission
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                  To empower our community through innovative education, fostering creativity, compassion, 
                  and leadership to drive transformative change worldwide.
                </p>
              </div>
    </>
  )
}

export default Mission
