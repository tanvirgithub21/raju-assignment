import { Modal, Table } from "flowbite-react";
import React from "react";
import Moment from "react-moment";

const LoginRecodeModal = ({ data, modalOpen, handleModal }) => {
  console.log(data);
  const result = data?.loginRecords;
  return (
    <div className="cursor-pointer">
      <Modal show={modalOpen} size="xl" onClose={() => handleModal({})}>
        <Modal.Header>tanvir.bd.global@gmail.com</Modal.Header>
        <Modal.Body>
          <Table hoverable={true}>
            <Table.Body className="divide-y">
              {result?.map((singleData) => {
                const date = singleData.time;
                return (
                  <Table.Row
                    key={singleData._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      <div className="flex justify-start gap-1 items-center">
                        <p>
                          Date: <Moment format="MMM DD, YYYY">{date}</Moment>
                        </p>
                        <p>
                          Time: <Moment format="hh:mm A">{date}</Moment>
                        </p>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex justify-end">
                        <p className="capitalize">{singleData.provider}</p>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginRecodeModal;
