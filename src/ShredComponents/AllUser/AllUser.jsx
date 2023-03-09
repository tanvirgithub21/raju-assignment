import React from "react";
import SingleUser from "./SingleUser";

const AllUser = () => {
  return (
    <div className="w-[23rem] h-[calc(100vh-95px)] pl-10 pt-6 pr-4 sticky top-[85px] overflow-y-scroll">
      {/* total user  */}
      <div className="bg-gray-100 px-4 py-2 rounded-md w-full flex justify-between sticky top-0 custom_scroll_bar">
        <h3 className="text-xl font-semibold ">All Users </h3>
        <span className="bg-blue-600 text-white text-sm font-bold p-1 rounded-full">
          50
        </span>
      </div>

      {/* all user show  */}
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
    </div>
  );
};

export default AllUser;
