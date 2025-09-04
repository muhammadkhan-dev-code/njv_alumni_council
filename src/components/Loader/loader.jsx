import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <FadeLoader 
        color="#1E90FF"
        height={20}
        width={15}
        radius={10}
        margin={10}
      />
    </div>
  );
}
