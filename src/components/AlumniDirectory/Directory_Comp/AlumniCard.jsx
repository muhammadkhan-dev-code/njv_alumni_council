import React from 'react';
import { BriefcaseIcon, AcademicCapIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function AlumniCard({ alumni }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100 shadow-sm relative flex-shrink-0">
        <img
          src={alumni.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.name)}&background=random`}
          alt={alumni.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.name)}&background=random`; }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1 font-serif">{alumni.name}</h3>
      
      <div className="flex items-center text-blue-600 font-medium text-sm mb-4">
        <AcademicCapIcon className="w-4 h-4 mr-1" />
        <span>Class of {alumni.batch}</span>
      </div>

      <div className="w-full space-y-2 text-sm text-gray-600 mb-6 flex-1 flex flex-col justify-center">
        <div className="flex items-center justify-center">
          <BriefcaseIcon className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" />
          <span className="line-clamp-2">{alumni.profession}</span>
        </div>
        <div className="flex items-center justify-center">
          <MapPinIcon className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" />
          <span className="truncate">{alumni.location}</span>
        </div>
      </div>

      <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 rounded-lg transition duration-300 border border-blue-200 mt-auto">
        View Profile
      </button>
    </div>
  );
}
