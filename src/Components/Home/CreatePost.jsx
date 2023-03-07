import { Avatar, Button, Modal, Textarea } from "flowbite-react";
import { FcAddImage } from "react-icons/fc";
import React, { useState } from "react";

const CreatePost = () => {
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
        onClose={modalToggleHandle}
      >
        <Modal.Header>
          <h1 className="text-lg md:text-xl font-semibold ml-5 ">
            Create your Post
          </h1>
        </Modal.Header>
        <Modal.Body>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required={true}
            rows={5}
          />
          <div className="w-full bg-gray-100 rounded-xl p-3 font-medium text-gray-400 my-3">
            <FcAddImage size="1.8rem" />
          </div>
          {/* dfddfsssssssss */}

          {/* dfddfsssssssss */}

          <Button className="w-full bg-[#1A6ED8]">Post</Button>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default CreatePost;
