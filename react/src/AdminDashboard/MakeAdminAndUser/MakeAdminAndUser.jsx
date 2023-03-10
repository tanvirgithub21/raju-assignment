import { Avatar, Table } from "flowbite-react";
import React from "react";
import Chart from "../../ShredComponents/Chart/Chart";

const MakeAdminAndUser = ({ pageName }) => {
  const tdata = [
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
    "kldfjl",
  ];
  return (
    <div>
      <Chart />

      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Photo</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {tdata.map((t) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white py-1">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              </Table.Cell>
              <Table.Cell>
                <span className="font-semibold">Tanvir Ahmed</span>
              </Table.Cell>
              <Table.Cell>@tanvir_66</Table.Cell>
              <Table.Cell>
                {/* <span className="text-xs font-semibold bg-black px-1 rounded-xl text-[#09fb2a] dark:text-gray-400">
                  Admin
                </span> */}
                <span className="text-xs font-semibold bg-black px-2 rounded-xl text-[#ff3838] dark:text-gray-400">
                  User
                </span>
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Remove
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MakeAdminAndUser;
