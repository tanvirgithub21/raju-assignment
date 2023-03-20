import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { BsPostcardHeart } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavbarComponentCopy = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", icon: <HiHome />, to: "/" },
    { title: "My Post", icon: <BsPostcardHeart />, to: "/my-post" },
    { title: "Dashboard", icon: <MdSpaceDashboard />, to: "/dashboard" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen px-5 pb-5 relative duration-300 bg-white`}
      >
        <BsArrowRightCircle
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full `}
          onClick={() => setOpen(!open)}
        />
        <ul className="border-r border-gray-300">
          {Menus.map((Menu, index) => (
            <NavLink
              to={`${Menu?.to}`}
              className={({ isActive }) => (isActive ? "bg-gray-200" : null)}
            >
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-700 font-medium text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                {Menu.icon}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default NavbarComponentCopy;
