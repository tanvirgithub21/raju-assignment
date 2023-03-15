import React, { useContext, useEffect } from "react";
import { FirebaseAuth } from "../../Context/FirebaseAuthProvider/FirebaseAuthProvider";
import SingleUser from "./SingleUser";

const AllUser = () => {
  const { getAllUsers } = useContext(FirebaseAuth);
  const [allUsers, loading, err, GetAllUsersFN] = getAllUsers;

  useEffect(() => {
    GetAllUsersFN();
  }, []);

  return (
    <div className="lg:w-[23rem] md:w-[16rem] edit-- h-[calc(100vh-95px)] md:pl-1 lg:pl-10  edit--  pr-4 hidden md:block md:sticky  top-[95px] overflow-y-scroll overflow-x-hidden bg-white z-10">
      {/* total user  */}
      <div className="bg-gray-100 pr-4 py-2 rounded-md w-full md:flex justify-between hidden md:sticky top-0 custom_scroll_bar">
        <h3 className="text-xl font-semibold ">All Users </h3>
        <p className="bg-blue-600 w-7 h-7 text-white text-sm font-bold p-1 rounded-full flex justify-center items-center">
          {allUsers?.result?.length}
        </p>
      </div>
      {loading && <p>Loading...</p>}
      {/* all user show  */}
      {allUsers?.result?.map((user) => (
        <SingleUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default AllUser;
