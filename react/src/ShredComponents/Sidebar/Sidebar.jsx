import React, { useContext } from "react";
import { HiHome } from "react-icons/hi";
import { BsPostcardHeart, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FirebaseAuth } from "../../Context/FirebaseAuthProvider/FirebaseAuthProvider";

const Sidebar = () => {
  const { CheckAdmin } = useContext(FirebaseAuth);
  const adminStatus = CheckAdmin();
  // nav style css variable
  const deActive =
    "text-lg text-gray-dark font-semibold mb-3 p-2 hover:bg-gray-100 w-full rounded-xl flex items-center cursor-pointer";
  const active =
    "text-lg text-[#1C64F2] font-semibold mb-3 p-2 hover:bg-gray-100 w-full rounded-xl flex items-center cursor-pointer";

  return (
    <div className="w-[22rem] min-h-[calc(100vh-95px)] p-3 sticky top-[85px]  border-r-2 border-gray-100">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : deActive)}
          >
            <span className="mr-2">
              <HiHome size="1.8rem" />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sce"
            className={({ isActive }) => (isActive ? active : deActive)}
          >
            <span className="mr-2">
              <BsSearch size="1.8rem" />
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-post"
            className={({ isActive }) => (isActive ? active : deActive)}
          >
            <span className="mr-2">
              <BsPostcardHeart size="1.8rem" />
            </span>
            My Post
          </NavLink>
        </li>
        <li>
          {adminStatus && (
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? active : deActive)}
            >
              <span className="mr-2">
                <MdSpaceDashboard size="1.8rem" />
              </span>
              Dashboard
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
