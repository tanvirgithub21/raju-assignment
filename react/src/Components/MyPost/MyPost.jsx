import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { PostStore } from "../../Context/PostStoreProvider/PostStoreProvider";
import auth from "../../fierbaseConfig";
import UseLoginUserEmail from "../../Hooks/UseLoginUserEmail";
import AllUser from "../../ShredComponents/AllUser/AllUser";
import CreatePost from "../../ShredComponents/CreatePost/CreatePost";
import Sidebar from "../../ShredComponents/Sidebar/Sidebar";
import SinglePost from "../../ShredComponents/SinglePost/SinglePost";

const MyPost = () => {
  const { getPost } = useContext(PostStore);
  const [allPost, loading, err, allPostFN] = getPost;

  useEffect(() => {
    allPostFN();
  }, []);

  const loginUserEmail = UseLoginUserEmail();
  const myPost = allPost?.result?.filter(
    (post) => post.author.email === loginUserEmail
  );

  return (
    <div className="flex relative">
      {/* main app left sidebar */}
      <div className=" min-h-screen p-3 sticky top-[73px]">
        <Sidebar />
      </div>
      {/* Home component  */}
      <div className="w-full max-w-[40rem]">
        <CreatePost />
        {loading && <p>Loading ...</p>}
        {myPost &&
          myPost.map((post) => <SinglePost key={post._id} post={post} />)}
      </div>

      {/* main app right sidebar */}
      <div className=" min-h-screen p-3 sticky top-[73px]">
        <AllUser />
      </div>
    </div>
  );
};

export default MyPost;
