import { Avatar, Button, Modal, Textarea } from "flowbite-react";
import { FcAddImage } from "react-icons/fc";
import { BiImageAdd } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import React, { useState } from "react";

const CreatePost = () => {
  // image local state
  const [showImageAdd, setShowImageAdd] = useState(false);
  const [image, setImage] = useState(false);

  console.log(image);
  // modal toggle handler function
  const [modalToggle, setModalToggle] = useState(false);
  const modalToggleHandle = () => setModalToggle(!modalToggle);

  return (
    <React.Fragment>
      {/* create post  */}
      <div className="flex px-4 py-6 my-5 border-2 border-gray-200 rounded-xl">
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
          setShowImageAdd(false);
          modalToggleHandle();
        }}
      >
        <Modal.Header>
          <h1 className="text-lg md:text-xl font-semibold ml-5 ">
            Create your Post
          </h1>
        </Modal.Header>
        <Modal.Body className="h-auto">
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required={true}
            rows={5}
          />

          {/* image add button  */}
          <div
            onClick={() => setShowImageAdd(true)}
            className={`w-full bg-gray-100 rounded-xl p-3 font-medium text-gray-400 my-3 ${
              showImageAdd && "hidden"
            }`}
          >
            <FcAddImage size="1.8rem" />
          </div>

          {/* image add and preview box  */}
          {showImageAdd && (
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
          )}

          <Button className="w-full bg-[#1A6ED8]">Post</Button>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default CreatePost;
