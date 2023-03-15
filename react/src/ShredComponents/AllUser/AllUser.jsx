import React, { useContext, useEffect } from "react";
import { FirebaseAuth } from "../../Context/FirebaseAuthProvider/FirebaseAuthProvider";
import SingleUser from "./SingleUser";

const AllUser = () => {
  const { getAllUsers } = useContext(FirebaseAuth);
  const [allUsers, loading, err, GetAllUsersFN] = getAllUsers;
  // const [allUsers, setAllUsers] = useState(Array);

  useEffect(() => {
    GetAllUsersFN();
  }, []);

  return (
    <div className="w-[23rem] h-[calc(100vh-95px)] pl-10  pr-4 sticky top-[95px] overflow-y-scroll bg-white z-10">
      {/* total user  */}
      <div className="bg-gray-100 px-4 py-2 rounded-md w-full flex justify-between sticky top-0 custom_scroll_bar">
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
