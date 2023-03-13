import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../../fierbaseConfig";
import AllUser from "../../ShredComponents/AllUser/AllUser";
import CreatePost from "../../ShredComponents/CreatePost/CreatePost";
import Sidebar from "../../ShredComponents/Sidebar/Sidebar";
import SinglePost from "../../ShredComponents/SinglePost/SinglePost";

const MyPost = () => {
  const [myPost, setMyPost] = useState(Array);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser.email);

      axios(`${process.env.REACT_APP_SERVER_URL}post`, {
        method: "GET",
      })
        .then((data) => {
          if (data) {
            const findMyPost = data.data.result.filter(
              (post) => post.author.email === currentUser.email
            );
            setMyPost(findMyPost);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return () => unsubscribe();
  }, []);

  console.log("LKJDSFKKKKKKKLLDKSSSSSSSSJ", myPost);

  return (
    <div className="flex relative">
      {/* main app left sidebar */}
      <div className=" min-h-screen p-3 sticky top-[73px]">
        <Sidebar />
      </div>
      {/* Home component  */}
      <div className="w-full max-w-[40rem]">
        <CreatePost />
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
