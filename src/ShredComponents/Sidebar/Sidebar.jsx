import React from "react";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IoNotificationsSharp, IoCreate } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-[22rem] min-h-screen p-3 sticky top-[73px]">
      <ul>
        <li className="text-lg text-gray-dark font-semibold mb-3 p-2 hover:bg-gray-100 w-full rounded-xl flex items-center cursor-pointer">
          <span className="mr-2">
            <HiHome size="1.8rem" />
          </span>
          Home
        </li>
        <li className="text-base text-gray-dark font-semibold mb-3 p-2 hover:bg-gray-50 w-full rounded-xl flex items-center cursor-pointer">
          <span className="mr-2">
            <BsSearch size="1.8rem" />
          </span>
          Search
        </li>
        <li className="text-base text-gray-dark font-semibold mb-3 p-2 hover:bg-gray-50 w-full rounded-xl flex items-center cursor-pointer">
          <span className="mr-2">
            <MdOutlineExplore size="1.8rem" />
          </span>
          Explore
        </li>
        <li className="text-base text-gray-dark font-semibold mb-3 p-2 hover:bg-gray-50 w-full rounded-xl flex items-center cursor-pointer">
          <span className="mr-2">
            <IoNotificationsSharp size="1.8rem" />
          </span>
          Notification
        </li>
        <li className="text-base text-gray-dark font-semibold mb-3 p-2 hover:bg-gray-50 w-full rounded-xl flex items-center cursor-pointer">
          <span className="mr-2">
            <IoCreate size="1.8rem" />
          </span>
          Create
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
