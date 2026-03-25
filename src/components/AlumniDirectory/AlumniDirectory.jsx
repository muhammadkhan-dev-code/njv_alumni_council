import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import AlumniCard from './Directory_Comp/AlumniCard';

const dummyAlumni = [
  { id: 1, name: "Ali Khan", batch: "2015", profession: "Software Engineer at Google", location: "San Francisco, USA" },
  { id: 2, name: "Sara Ahmed", batch: "2018", profession: "Marketing Director", location: "Dubai, UAE" },
  { id: 3, name: "Usman Tariq", batch: "2010", profession: "Founder & CEO, TechHub", location: "Karachi, Pakistan" },
  { id: 4, name: "Aisha Rehman", batch: "2020", profession: "Data Scientist", location: "London, UK" },
  { id: 5, name: "Bilal Hashmi", batch: "2015", profession: "Investment Banker", location: "New York, USA" },
  { id: 6, name: "Fatima Noor", batch: "2012", profession: "Medical Doctor", location: "Toronto, Canada" },
  { id: 7, name: "Zainab Malik", batch: "2018", profession: "Architect", location: "Karachi, Pakistan" },
  { id: 8, name: "Omar Farooq", batch: "2016", profession: "UX Designer", location: "Berlin, Germany" }
];

export default function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBatch, setFilterBatch] = useState("All");

  const batchYears = [...new Set(dummyAlumni.map(a => a.batch))].sort(
    (firstBatch, secondBatch) => Number(secondBatch) - Number(firstBatch)
  );
  const batches = ["All", ...batchYears];

  const filteredAlumni = dummyAlumni.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          alumni.profession.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBatch = filterBatch === "All" || alumni.batch === filterBatch;
    return matchesSearch && matchesBatch;
  });

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 font-serif tracking-tight mb-4">
            Alumni Directory
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect, collaborate, and grow with the widespread network of NJV Alumni across the globe.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-10">
          <h3 className="text-2xl font-bold text-blue-950 font-serif mb-3 text-center">Why This Directory Matters</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            This directory helps alumni discover peers by profession and graduation year, creating a practical network for mentorship, hiring, collaboration, and community support.
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name or profession..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-full md:w-auto flex items-center gap-3">
            <label htmlFor="batch-filter" className="text-gray-600 font-medium whitespace-nowrap">Class of:</label>
            <select
              id="batch-filter"
              className="w-full md:w-48 py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer transition"
              value={filterBatch}
              onChange={(e) => setFilterBatch(e.target.value)}
            >
              {batches.map(batch => (
                <option key={batch} value={batch}>{batch}</option>
              ))}
            </select>
          </div>
          
        </div>

        {/* Directory Grid */}
        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAlumni.map(alumni => (
              <AlumniCard key={alumni.id} alumni={alumni} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Alumni Found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={() => { setSearchTerm(""); setFilterBatch("All"); }}
              className="mt-4 text-blue-600 hover:underline font-medium cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
