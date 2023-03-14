import axios from "axios";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { FirebaseAuth } from "../FirebaseAuthProvider/FirebaseAuthProvider";
export const PostStore = createContext();
const PostStoreProvider = ({ children }) => {
  // get current user info
  const { currentUser } = useContext(FirebaseAuth);
  const [user, loading] = currentUser;

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
      .then(async ({ data }) => {
        setDeletePostResult(data.result);
        const deletePostRemove = allPosts.result.filter(
          (post) => post._id !== data.result._id
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

  //add new post start
  const [addPostResult, setAddPostResult] = useState(Object);
  const [addPostLoading, setAddPostLoading] = useState(false);
  const [addPostError, setAddPostError] = useState(null);

  //upload image in imageBB server start
  const uploadImage = async (imageFile) => {
    let finalResult = false;
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("key", `${process.env.REACT_APP_IMAGE_UPLOAD_APIKEY}`);

    await axios
      .post(`${process.env.REACT_APP_IMAGE_UPLOAD_URL}`, formData)
      .then(({ data }) => {
        finalResult = data.data;
      })
      .catch((err) => {});
    return finalResult;
  };
  //upload image in imageBB server end ^___^

  //upload post data database start
  const uploadPostDatabase = async (data) => {
    let result = false;
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}post`, data)
      .then(({ data }) => {
        //post data success
        result = data;
      })
      .catch((err) => {
        //post data error
      });
    return result;
  };
  //upload post data database end ^___^

  const AddNewPost = async (data) => {
    setAddPostLoading(true);
    const uploadImageData = await uploadImage(data.image);
    if (uploadImageData) {
      //upload image successfully
      const postData = {
        title: data.title,
        imageUrl: uploadImageData.display_url,
        imageDeleteUrl: uploadImageData.delete_url,
        author: {
          name: user?.displayName,
          email: user?.email,
        },
      };
      const result = await uploadPostDatabase(postData);
      if (result) {
        //upload success
        setAllPosts({
          ...allPosts,
          result: [...allPosts.result, result.result],
        });
        setAddPostResult(result);
        setAddPostLoading(false);
        toast.success("Post successfully");
      } else {
        // upload field
        setAddPostError("Upload Post failed");
        setAddPostLoading(false);
        toast.error("Upload Post failed");
      }
    } else {
      //upload image error
      setAddPostLoading(false);
      toast.error("Upload Post failed");
    }
  };

  const addNewPost = [addPostResult, addPostLoading, addPostError, AddNewPost];
  //add new post end ^_^

  // Final value
  const postStore = {
    getPost,
    deletePost,
    addNewPost,
  };

  return <PostStore.Provider value={postStore}>{children}</PostStore.Provider>;
};

export default PostStoreProvider;
