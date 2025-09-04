import React from "react";

export default function Home() {
  return (
    <div className="max-w-[90%] p-6 mt-2.5 ">
      <h3 className="text-3xl font-bold mx-[50%] font-serif text-gray-800 tracking-tight sm:text-4xl mb-4">
        Introduction
      </h3>
      <div className="flex flex-row gap-6">
        <div className="flex-1 flex justify-center">
          <img
            src="https://schoolvisor.org/wp-content/uploads/2021/09/NJV-School-3.jpg"
            alt="Njv Intro"
            className="w-full h-64 object-cover rounded-sm shadow-md"
          />
        </div>
        <div className="flex-1 " >
          <p className="text-xl text-black  leading-relaxed text-left mt-1 " >
            The NJV Alumni Council is an initiative aimed at uniting former
            students of NJV School on a single platform where memories,
            experiences, and aspirations converge. It serves as a bridge between
            alumni and their alma mater, fostering a sense of belonging while
            opening avenues for mentorship, professional networking, and community
            service. By connecting generations of graduates, the Council strives
            to preserve NJV’s spirit, celebrate its legacy, and contribute
            meaningfully to the growth and success of its current and future
            students.
          </p>
        </div>
      </div>
    </div>
  );
}