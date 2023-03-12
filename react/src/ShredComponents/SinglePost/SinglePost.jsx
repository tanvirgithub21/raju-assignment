import React from "react";
import moment from "react-moment";
import { AiTwotoneLike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { useLocation } from "react-router-dom";
import Moment from "react-moment";
import deletePost from "../../Hooks/PostFetchs/deletePost";

const SinglePost = ({ post }) => {
  const { _id, title, imageUrl, time, author, likes } = post;
  const { pathname } = useLocation();
  console.log("SINGLE POST", _id, title, imageUrl, time, author, likes);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-9">
      <div className="p-5">
        {/* card header  */}
        <div className="flex justify-between mb-3">
          <div className="flex gap-3">
            <img
              className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://qph.cf2.quoracdn.net/main-qimg-eb86c6a549e2e52fc89752a002660e97-pjlq"
              alt="Bordered avatar"
            />

            <div>
              <h4 className="text-lg w-full font-semibold text-gray-dark">
                Tanvir Ahmed
              </h4>
              <h6 className="text-sm font-md font-medium text-gray-600">
                <Moment fromNow>{time}</Moment>
              </h6>
            </div>
          </div>
          {/* delete post button  */}
          {pathname === "/" && (
            <div
              onClick={() => deletePost(_id)}
              className="cursor-pointer w-8 h-8 p-1 text-2xl rotate-45 bg-gray-200 rounded-full"
            >
              <GoPlus />
            </div>
          )}
        </div>

        {/* cart text  */}
        <div>
          <p>{title}</p>
        </div>
      </div>

      {/* cart image  */}
      <div className="">
        <img
          className="object-cover object-top w-full h-auto max-h-[32rem] "
          src={imageUrl}
          alt={title}
        />
      </div>

      {/* cart action */}
      <div className="flex justify-between my-2">
        <div className="flex items-center items-top text-md text-gray-800 font-medium px-3 py-2 ml-6">
          <AiTwotoneLike className="mr-1 mb-1 text-xl" />
          Like{" "}
          <span className="ml-2 font-semibold text-sm text-gray500">
            {likes.length} likes
          </span>
        </div>
        <div className="flex items-top text-md text-gray-800 font-medium px-3 py-2 mr-6">
          <TbShare3 className="mr-1 text-xl" />
          Share
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
