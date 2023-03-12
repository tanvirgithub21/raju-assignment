import React from "react";

const SingleUser = ({ user }) => {
  const { name, username, imageUrl = "" } = user;
  console.log(name, username, imageUrl);
  return (
    <div className="flex gap-3 px-2 py-1 bg-gray-100 rounded-md my-3">
      {imageUrl ? (
        <img
          className="w-11 h-11 p-[2px] my-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://qph.cf2.quoracdn.net/main-qimg-eb86c6a549e2e52fc89752a002660e97-pjlq"
          alt="Bordered avatar"
        />
      ) : (
        <div className="w-11 h-11 p-[2px]  my-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 text-2xl font-semibold text-blue-500 flex justify-center items-center">
          {name.slice(0, 1)}
        </div>
      )}

      <div>
        <h4 className="text-base w-full font-semibold text-gray-dark">
          {name}
        </h4>
        <h6 className="text-sm font-md font-medium text-gray-600">
          {username}
        </h6>
      </div>
    </div>
  );
};

export default SingleUser;
