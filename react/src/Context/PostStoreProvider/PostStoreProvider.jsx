import axios from "axios";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { FirebaseAuth } from "../FirebaseAuthProvider/FirebaseAuthProvider";
export const PostStore = createContext();
const PostStoreProvider = ({ children }) => {
  // get current user info
  const { currentUser, FindUserByEmail } = useContext(FirebaseAuth);
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
      const loginUser = await FindUserByEmail(user?.email);
      const { name, email, username } = loginUser.result;
      //upload image successfully
      const postData = {
        title: data.title,
        imageUrl: uploadImageData.display_url,
        imageDeleteUrl: uploadImageData.delete_url,
        author: {
          name,
          email,
          username,
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

  //show is like start
  const IsLike = (post) => {
    if (post?.likes && post?.likes.length > 0) {
      const result = post?.likes.find((like) => like.user === user?.email);
      if (result) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };
  //show is like end ^_^

  // post like function start
  const LikePost = async (id) => {
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}post/like/${id}`, {
        user: user.email,
      })
      .then(({ data }) => {
        // like or disliked success
        const removedCurrentPost = allPosts.result.filter(
          (post) => post._id !== id
        );
        setAllPosts({
          ...allPosts,
          result: [...removedCurrentPost, data.result],
        });
      })
      .catch((err) => {
        //axios error
        console.log(err);
      });
  };
  // post like function end ^_^

  // Final value
  const postStore = {
    getPost,
    deletePost,
    addNewPost,
    IsLike,
    LikePost,
  };

  return <PostStore.Provider value={postStore}>{children}</PostStore.Provider>;
};

export default PostStoreProvider;
