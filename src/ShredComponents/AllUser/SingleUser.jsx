import React from "react";

const SingleUser = () => {
  return (
    <div className="flex gap-3 px-2 py-1 bg-gray-100 rounded-md my-3">
      <img
        class="w-11 h-11 p-[2px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src="https://qph.cf2.quoracdn.net/main-qimg-eb86c6a549e2e52fc89752a002660e97-pjlq"
        alt="Bordered avatar"
      />

      <div>
        <h4 className="text-base w-full font-semibold text-gray-dark">
          Tanvir Ahmed
        </h4>
        <h6 className="text-sm font-md font-medium text-gray-600">
          @tanvir_66
        </h6>
      </div>
    </div>
  );
};

export default SingleUser;
