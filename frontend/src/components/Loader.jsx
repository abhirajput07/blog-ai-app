import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]  ">
      <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-white border-gray-700"></div>
    </div>
  );
};

export default Loader;
