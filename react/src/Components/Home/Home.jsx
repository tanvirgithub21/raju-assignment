import React, { useContext, useEffect } from "react";
import AllUser from "../../ShredComponents/AllUser/AllUser";
import Sidebar from "../../ShredComponents/Sidebar/Sidebar";
import SinglePost from "../../ShredComponents/SinglePost/SinglePost";
import CreatePost from "../../ShredComponents/CreatePost/CreatePost";
import { PostStore } from "../../Context/PostStoreProvider/PostStoreProvider";

const Home = () => {
  const { getPost } = useContext(PostStore);
  const [allPost, loading, err, getAllPostFN] = getPost;

  useEffect(() => {
    getAllPostFN();
  }, []);

  // sort data by uploaded time
  const sortData = allPost?.result?.sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  return (
    <div className="flex relative">
      {/* main app left sidebar */}
      <div className=" h-full p-3 sticky top-[73px]">
        <Sidebar />
      </div>
      {/* Home component  */}
      <div className="w-full max-w-[40rem]">
        <CreatePost />
        {loading && <p>Loading ...</p>}
        {sortData &&
          sortData.map((post) => {
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
