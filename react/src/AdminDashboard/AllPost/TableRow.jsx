import { Table } from "flowbite-react";
import React from "react";

const TableRow = () => {
  return (
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
  );
};

export default TableRow;
