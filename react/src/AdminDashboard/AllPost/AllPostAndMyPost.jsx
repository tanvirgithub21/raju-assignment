import { Table } from "flowbite-react";
import React from "react";
import Chart from "../../ShredComponents/Chart/Chart";

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

const AllPostAndMyPost = ({ pageName }) => {
  console.log(pageName);
  return (
    <div>
      {/* chart  */}
      <Chart />

      {/* all Post  */}
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Post Title</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Like</Table.HeadCell>
          <Table.HeadCell>Remove</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {tdata.map((t) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lorem, ipsum dolor sit amet...
              </Table.Cell>
              <Table.Cell>Tanvir Ahmed</Table.Cell>
              <Table.Cell>@tanvir_66</Table.Cell>
              <Table.Cell>566</Table.Cell>
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

export default AllPostAndMyPost;
