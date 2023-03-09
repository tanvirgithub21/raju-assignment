import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsPostcardFill, BsPostcardHeart } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Avatar, Card } from "flowbite-react";

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* sideBar */}
      <div className="min-w-[15rem] bg-gray-50 p-2 h-[calc(100vh-70px)] sticky top-[61px]">
        <ul>
          <li className="my-3">
            <Link class="flex items-center p-2 text-base font-normal  text-gray-6B7280 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
              <BsPostcardHeart size="1.5rem" />
              <span class="flex-1 ml-3 whitespace-nowrap font-semibold">
                All Post
              </span>
            </Link>
          </li>
          <li className="my-3">
            <Link class="flex items-center p-2 text-base font-normal  text-gray-6B7280 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
              <BsPostcardFill size="1.5rem" />
              <span class="flex-1 ml-3 whitespace-nowrap font-semibold">
                My Post
              </span>
            </Link>
          </li>

          <li className="my-3">
            <Link class="flex items-center p-2 text-base font-normal  text-gray-6B7280 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaUserFriends size="1.5rem" />
              <span class="flex-1 ml-3 whitespace-nowrap font-semibold">
                Make Admin
              </span>
            </Link>
          </li>
          <li className="my-3">
            <Link class="flex items-center p-2 text-base font-normal  text-gray-6B7280 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaUserFriends size="1.5rem" />
              <span class="flex-1 ml-3 whitespace-nowrap font-semibold">
                User Management
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* show all route  */}
      <div className="w-full p-4">
        <Outlet />
      </div>

      {/* admin right sideBar  */}
      <div className="min-w-[22rem] bg-white border-l-4 border-gray-100 p-2 h-[calc(100vh-70px)] sticky top-[61px]">
        {/* admin profile  */}
        <div className="max-w-sm">
          <Card className="bg-[hsla(206,100%,71%,0)]">
            <div className="flex flex-col items-center pb-2">
              <img
                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie images"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-5">
                  @VisualDesigner
                </span>
                <span className="text-sm font-semibold bg-black px-2 py-1 rounded-xl text-[#09fb2a] dark:text-gray-400">
                  Admin
                </span>
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

            <div>
              <div className="flex flex-wrap gap-2 bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-200 mb-4">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
                <div>
                  <h5 className="text-base font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </h5>
                  <span className="text-xs font-semibold bg-black px-1 rounded-xl text-[#09fb2a] dark:text-gray-400">
                    Admin
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
