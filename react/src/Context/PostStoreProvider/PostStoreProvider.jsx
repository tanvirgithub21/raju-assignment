import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";
export const PostStore = createContext();
const PostStoreProvider = ({ children }) => {
  // Get all posts start
  const [allPosts, setAllPosts] = useState(Object);
  const [allPostLoading, setAllPostsLoading] = useState(false);
  const [allPostError, setAllPostsError] = useState(null);

  const GetAllPosts = () => {
    setAllPostsLoading(true);
    axios(`${process.env.REACT_APP_SERVER_URL}post`, {
      method: "GET",
    })
      .then((data) => {
        setAllPosts(data.data);
        setAllPostsLoading(false);
      })
      .catch((err) => {
        setAllPostsError(err);
        setAllPostsLoading(true);
      });
  };
  const getPost = [allPosts, allPostLoading, allPostError, GetAllPosts];
  // Get all posts end ^_^

  // Final value
  const postStore = {
    getPost,
  };

  return <PostStore.Provider value={postStore}>{children}</PostStore.Provider>;
};

export default PostStoreProvider;
