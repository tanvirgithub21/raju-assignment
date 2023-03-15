import React, { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BsPostcardFill, BsPostcardHeart } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Avatar, Card } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { FirebaseAuth } from "../Context/FirebaseAuthProvider/FirebaseAuthProvider";
import UseLoginUserEmail from "../Hooks/UseLoginUserEmail";

const AdminDashboard = () => {
  const { getAllUsers } = useContext(FirebaseAuth);
  const [allUsers, , , GetAllUsersFN] = getAllUsers;

  useEffect(() => {
    GetAllUsersFN();
  }, []);

  //find login user
  const loginUserEmail = UseLoginUserEmail();
  const loginUserInfo = allUsers.result.find(
    (user) => user.email === loginUserEmail
  );

  // find all admin user
  const adminUserList = allUsers.result
    .filter((user) => user.admin === true)
    .sort((a, b) => new Date(b.time) - new Date(a.time));

  // navbar css style variable
  const deActive =
    "flex items-center p-2 text-base font-normal  text-gray-6B7280 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700";
  const active =
    "flex items-center p-2 text-base font-normal text-[#1C64F2]  rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <div className="flex">
      {/* sideBar */}
      <div className="min-w-[15rem] bg-gray-50 p-2 h-[calc(100vh-70px)] sticky top-[73px]">
        <ul>
          <li className="my-3">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : deActive)}
            >
              <HiHome size="1.5rem" />
              <span className="flex-1 ml-3 whitespace-nowrap font-semibold">
                Home
              </span>
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) => (isActive ? active : deActive)}
            >
              <BsPostcardHeart size="1.5rem" />
              <span className="flex-1 ml-3 whitespace-nowrap font-semibold">
                All Post
              </span>
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="/admin/my-post"
              className={({ isActive }) => (isActive ? active : deActive)}
            >
              <BsPostcardFill size="1.5rem" />
              <span className="flex-1 ml-3 whitespace-nowrap font-semibold">
                My Post
              </span>
            </NavLink>
          </li>

          <li className="my-3">
            <NavLink
              to="/admin/make-admin"
              className={({ isActive }) => (isActive ? active : deActive)}
            >
              <FaUserFriends size="1.5rem" />
              <span className="flex-1 ml-3 whitespace-nowrap font-semibold">
                Make Admin
              </span>
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="/admin/user-management"
              className={({ isActive }) => (isActive ? active : deActive)}
            >
              <FaUserFriends size="1.5rem" />
              <span className="flex-1 ml-3 whitespace-nowrap font-semibold">
                User Management
              </span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* show all route  */}
      <div className="w-full p-4">
        <Outlet />
      </div>

      {/* admin right sideBar  */}
      <div className="min-w-[22rem] bg-white border-l-4 border-gray-100 p-2 h-[calc(100vh-70px)] sticky top-[73px]">
        {/* admin profile  */}
        <div className="max-w-sm">
          <Card className="bg-[hsla(206,100%,71%,0)]">
            <div className="flex flex-col items-center pb-2">
              {loginUserInfo?.image ? (
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie images"
                />
              ) : (
                <div className="mb-3 w-24 h-24 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 text-7xl font-semibold text-blue-500 flex justify-center items-center">
                  {loginUserInfo.name.slice(0, 1)}
                </div>
              )}
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {loginUserInfo.name}
              </h5>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-5">
                  {loginUserInfo.username}
                </span>
                {loginUserInfo.admin && (
                  <span className="text-sm font-semibold bg-black px-2 py-1 rounded-xl text-[#09fb2a] dark:text-gray-400">
                    Admin
                  </span>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* all admin list */}
        <div className="max-w-sm">
          <Card className="bg-[hsla(206,100%,71%,0)]">
            <h1 className="text-base text-gray-dark font-semibold">
              Admin List
            </h1>

            <div className="max-h-[calc(100vh-30rem)] overflow-y-scroll pr-1">
              {adminUserList.map((user) => {
                return (
                  <div className="flex flex-wrap items-center gap-2 bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-200 mb-4">
                    {user?.image ? (
                      <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        rounded={true}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full ring-2 ring-gray-300 text-2xl font-semibold text-blue-500 flex justify-center items-center">
                        {user.name.slice(0, 1)}
                      </div>
                    )}
                    <div>
                      <h5 className="text-base font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </h5>
                      <span className="text-xs font-semibold bg-black px-1 rounded-xl text-[#09fb2a] dark:text-gray-400">
                        Admin
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
