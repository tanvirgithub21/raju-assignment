import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseAuth } from "../../Context/FirebaseAuthProvider/FirebaseAuthProvider";
import UseSingOut from "../../Hooks/UseSignOut";

const NavbarComponent = () => {
  const { currentUser } = useContext(FirebaseAuth);
  const [user] = currentUser;

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
                ></Dropdown>
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
              <Link to="/login">
                <button className="px-4 py-2 border-none outline-none font-medium rounded-lg text-white ease-in-out duration-100 bg-[#1c64f2] hover:bg-[#3475f6]">
                  LOGIN
                </button>
              </Link>
            )}
          </div>
        </Navbar>
      </nav>
    </>
  );
};

export default NavbarComponent;
