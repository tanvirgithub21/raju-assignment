import { Avatar, Button, Modal, Spinner, Textarea } from "flowbite-react";
import { BiImageAdd } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PostStore } from "../../Context/PostStoreProvider/PostStoreProvider";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const CreatePost = () => {
  const { addNewPost } = useContext(PostStore);
  const [postResult, loading, message, addNewPostFN] = addNewPost;
  const { register, handleSubmit, reset } = useForm();
  // image local state
  const [image, setImage] = useState(false);

  // modal toggle handler function
  const [modalToggle, setModalToggle] = useState(false);
  const modalToggleHandle = () => setModalToggle(!modalToggle);

  //submit post close modal
  useEffect(() => {
    setModalToggle(false);
  }, [postResult]);

  const onSubmit = async (data) => {
    const postData = {
      title: data.title,
      image,
    };
    await addNewPostFN(postData);
    reset();
    setImage(false);
  };

  useEffect(() => {
    message?.message && toast.success(message?.message);
    message?.error && toast.error(message?.error);
  }, [message]);

  return (
    <React.Fragment>
      {/* create post  */}
      <div className="flex px-4 py-6 my-5 border-2 bg-white border-gray-200 rounded-xl">
        <Avatar
          className="mr-3"
          img="https://qph.cf2.quoracdn.net/main-qimg-eb86c6a549e2e52fc89752a002660e97-pjlq"
          rounded={true}
        />
        <div
          onClick={modalToggleHandle}
          className="cursor-pointer w-full bg-gray-100 rounded-xl p-3 font-medium text-gray-400"
        >
          Create your post...
        </div>
      </div>

      {/* modal  */}
      <Modal
        show={modalToggle}
        size="2xl"
        popup={true}
        onClose={() => {
          modalToggleHandle();
        }}
      >
        <Modal.Header>
          <h1 className="text-lg md:text-xl font-semibold ml-5 ">
            Create your Post
          </h1>
        </Modal.Header>
        <Modal.Body className="h-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <Textarea
              {...register("title", { required: true })}
              id="comment"
              placeholder="Leave a comment..."
              required={true}
              rows={5}
            />

            {/* image add and preview box  */}
            <div className="w-full border-4 rounded-md my-4 h-[20rem] relative overflow-hidden">
              {/* input field label  */}
              <label
                className="w-full h-[20rem] cursor-pointer flex justify-center items-center"
                htmlFor="add_image"
              >
                <BiImageAdd className="text-[9rem] text-gray-400" />
              </label>

              {/* this input field is hidden  */}
              <input
                id="add_image"
                type="file"
                className="hidden"
                {...register("image", { required: true })}
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/x-png,image/gif,image/jpeg"
              ></input>

              {/* add image preview  */}
              {image && (
                <div>
                  <img
                    className="absolute top-0 left-0 w-full h-auto object-cover "
                    src={URL.createObjectURL(image)}
                    alt="sdfkj"
                  />
                  <span
                    onClick={() => setImage(false)}
                    className="absolute top-2 right-2 bg-white rounded-full cursor-pointer"
                  >
                    <MdCancel size="2rem" />
                  </span>
                </div>
              )}
            </div>

            <Button
              disabled={loading}
              type="submit"
              className="w-full bg-[#1A6ED8] flex justify-center items-center"
            >
              {loading ? (
                <>
                  <Spinner aria-label="Spinner button example" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Post"
              )}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default CreatePost;
