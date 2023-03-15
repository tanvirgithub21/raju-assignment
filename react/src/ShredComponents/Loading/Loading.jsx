import React from "react";

const Loading = ({ size }) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
      </div>
    </div>
  );
};
export default Loading;
