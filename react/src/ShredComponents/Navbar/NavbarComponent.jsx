import { onAuthStateChanged } from "firebase/auth";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../fierbaseConfig";
import UseSingOut from "../../Hooks/UseSignOut";

const NavbarComponent = ({ children }) => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // signOut(auth);
        setUser(false);
      }
    });
  }, [navigate]);

  return (
    <>
      <nav className="border-b-2 border-gray-100 sticky top-0 z-40">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand>
            <span
              style={{ fontFamily: "Dancing Script" }}
              className="text-xl text-blue-600 font-black text__outline"
            >
              Your Sherd
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {user ? (
              <>
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      alt="User settings"
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                      className="mr-2 md:mr-0"
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">
                      name@flowbite.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
                <div className="ml-8">
                  <button
                    onClick={UseSingOut}
                    className="px-4 py-2 border-none outline-none font-semibold rounded-lg text-white ease-in-out duration-100 bg-[#ec1010] hover:bg-[#c70000]"
                  >
                    LOGOUT
                  </button>
                </div>
              </>
            ) : (
              <div className="flex gap-5">
                <Link to="/login">
                  <button className="px-4 py-2 border-none outline-none font-medium rounded-lg text-white ease-in-out duration-100 bg-[#1c64f2] hover:bg-[#3475f6]">
                    LOGIN
                  </button>
                </Link>
                <Link to="/sing-up">
                  <button className="px-4 py-2 border-none outline-none font-medium rounded-lg text-white ease-in-out duration-100 bg-[#00B241] hover:bg-[#029738]">
                    SING UP
                  </button>
                </Link>
              </div>
            )}
          </div>

          <Navbar.Collapse>
            <div className="w-[30rem] mx-auto border-2 border-gray-200 rounded-md">
              <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-none focus:outline-none"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </nav>
      {children}
    </>
  );
};

export default NavbarComponent;
