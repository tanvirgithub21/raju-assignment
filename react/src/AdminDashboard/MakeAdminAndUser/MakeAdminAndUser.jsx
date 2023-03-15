import { Avatar, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { FirebaseAuth } from "../../Context/FirebaseAuthProvider/FirebaseAuthProvider";
import Chart from "../../ShredComponents/Chart/Chart";
import LoginRecodeModal from "./LoginRecodeModal/LoginRecodeModal";

const MakeAdminAndUser = ({ pageName }) => {
  const { getAllUsers, makeAdmin } = useContext(FirebaseAuth);
  const [allUsers, , , GetAllUsersFN] = getAllUsers;
  const [, , , MakeAdminFN] = makeAdmin;

  //handle login record modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(Object);
  const handleModal = (data) => {
    setModalData(data);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    GetAllUsersFN();
  }, []);

  const result = allUsers.result.sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  const FinalResult =
    pageName === "make-admin"
      ? result
      : result.filter((user) => user.admin !== true);
  console.log(FinalResult);

  return (
    <div>
      <Chart />

      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Photo</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell className="text-right">Login Records</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {FinalResult.map((user) => {
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white py-1">
                  {result?.image ? (
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 text-2xl font-semibold text-blue-500 flex justify-center items-center">
                      {user.name.slice(0, 1)}
                    </div>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <span className="font-semibold">{user.name}</span>
                </Table.Cell>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>
                  {user.admin ? (
                    <span className="text-xs font-semibold bg-black px-1 rounded-xl text-[#09fb2a] dark:text-gray-400">
                      Admin
                    </span>
                  ) : (
                    <span className="text-xs font-semibold bg-black px-2 rounded-xl text-[#ff3838] dark:text-gray-400">
                      User
                    </span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  {pageName === "make-admin" ? (
                    <div>
                      {user.admin ? (
                        //remove admin button
                        <div
                          onClick={() => MakeAdminFN(user._id, user.admin)}
                          className="font-medium text-blue-600 hover:underline text-right cursor-pointer"
                        >
                          Remove
                        </div>
                      ) : (
                        //make admin button
                        <div
                          onClick={() => MakeAdminFN(user._id, user.admin)}
                          className="font-medium text-blue-600 hover:underline text-right cursor-pointer"
                        >
                          Make Admin
                        </div>
                      )}
                    </div>
                  ) : (
                    // delete user button
                    <div
                      onClick={() => handleModal(user)}
                      className="font-medium text-blue-600 hover:underline text-right cursor-pointer"
                    >
                      Show
                    </div>
                  )}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <LoginRecodeModal
        data={modalData}
        modalOpen={modalOpen}
        handleModal={handleModal}
      />
    </div>
  );
};

export default MakeAdminAndUser;
