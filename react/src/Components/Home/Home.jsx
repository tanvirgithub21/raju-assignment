import React, { useEffect, useState } from "react";
import AllUser from "../../ShredComponents/AllUser/AllUser";
import Sidebar from "../../ShredComponents/Sidebar/Sidebar";
import SinglePost from "../../ShredComponents/SinglePost/SinglePost";
import CreatePost from "../../ShredComponents/CreatePost/CreatePost";
import axios from "axios";

const Home = () => {
  const [allPost, setAllPost] = useState([]);
  const [allPostLoading, setAllPostLoading] = useState(false);
  const [allPostError, setAllPostError] = useState(false);

  useEffect(() => {
    setAllPostLoading(true);
    axios(`${process.env.REACT_APP_SERVER_URL}post`, {
      method: "GET",
    })
      .then((data) => {
        setAllPost(data.data.result);
        setAllPostLoading(false);
      })
      .catch((err) => {
        setAllPostError(err);
        allPostLoading(false);
        allPostError(err);
      });
  }, []);

  console.log("allPost", allPost);

  return (
    <div className="flex relative">
      {/* main app left sidebar */}
      <div className=" h-full p-3 sticky top-[73px]">
        <Sidebar />
      </div>
      {/* Home component  */}
      <div className="w-full max-w-[40rem]">
        <CreatePost />
        {allPost &&
          allPost.map((post) => {
            return <SinglePost kay={post._id} post={post} />;
          })}
      </div>

      {/* main app right sidebar */}
      <div className=" min-h-screen p-3 sticky top-[73px]">
        <AllUser />
      </div>
    </div>
  );
};

export default Home;
