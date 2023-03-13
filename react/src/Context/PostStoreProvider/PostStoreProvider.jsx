import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
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

  //delete single post start
  const [deletePostResult, setDeletePostResult] = useState(Object);
  const [deletePostLoading, setDeletePostLoading] = useState(false);
  const [deletePostError, setDeletePostError] = useState(null);

  const DeletePost = (id) => {
    setDeletePostLoading(true);
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}post/delete/${id}`)
      .then(({ data }) => {
        setDeletePostResult(data.result);
        const deletePostRemove = allPosts.result.filter(
          (post) => post.author.email !== data.result.author.email
        );
        setAllPosts({
          ...allPosts,
          result: deletePostRemove,
        });
        setDeletePostLoading(false);
        toast.success(data.message);
      })
      .catch((err) => {
        setDeletePostError(err);
        setDeletePostLoading(false);
        toast.error("Delete field");
      });
  };
  const deletePost = [
    deletePostResult,
    deletePostLoading,
    deletePostError,
    DeletePost,
  ];
  //delete single post end ^_^

  // Final value
  const postStore = {
    getPost,
    deletePost,
  };

  return <PostStore.Provider value={postStore}>{children}</PostStore.Provider>;
};

export default PostStoreProvider;
