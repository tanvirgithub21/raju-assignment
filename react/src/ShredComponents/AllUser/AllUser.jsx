import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const AllUser = () => {
  const [allUsers, setAllUsers] = useState(Array);

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER_URL}user`, {
      method: "GET",
    })
      .then((data) => {
        setAllUsers(data.data.result);
      })
      .catch((err) => {
        console.lgo(err);
      });
  }, []);

  console.log(allUsers);

  return (
    <div className="w-[23rem] h-[calc(100vh-95px)] pl-10 pt-6 pr-4 sticky top-[85px] overflow-y-scroll">
      {/* total user  */}
      <div className="bg-gray-100 px-4 py-2 rounded-md w-full flex justify-between sticky top-0 custom_scroll_bar">
        <h3 className="text-xl font-semibold ">All Users </h3>
        <p className="bg-blue-600 w-7 h-7 text-white text-sm font-bold p-1 rounded-full flex justify-center items-center">
          {allUsers.length}
        </p>
      </div>

      {/* all user show  */}
      {allUsers.map((user) => (
        <SingleUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default AllUser;
