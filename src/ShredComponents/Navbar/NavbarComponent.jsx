import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";

const NavbarComponent = () => {
  return (
    <nav className="border-b-2 border-gray-100">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <span className="text-xl font-bold text-blue-600">Your App</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
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
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-base cursor-pointer">Home</Navbar.Link>
          <Navbar.Link className="text-base cursor-pointer">About</Navbar.Link>
          <Navbar.Link className="text-base cursor-pointer">
            Services
          </Navbar.Link>
          <Navbar.Link className="text-base cursor-pointer">
            Pricing
          </Navbar.Link>
          <Navbar.Link className="text-base cursor-pointer">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavbarComponent;
