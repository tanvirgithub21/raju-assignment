import { Table } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import { PostStore } from "../../Context/PostStoreProvider/PostStoreProvider";
import UseLoginUserEmail from "../../Hooks/UseLoginUserEmail";
import Chart from "../../ShredComponents/Chart/Chart";

const AllPostAndMyPost = ({ pageName }) => {
  const { deletePost, getPost } = useContext(PostStore);
  const [result, DeleteLoading, error, deletePostFN] = deletePost;

  const [allPosts, loading, err, GetAllPostsFN] = getPost;

  useEffect(() => {
    GetAllPostsFN();
  }, []);

  // sort data by uploaded time
  const sortDataAllPosts = allPosts?.result?.sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );
  // sort data by uploaded time and filter my post
  const loginUserEmail = UseLoginUserEmail();
  const sortDataMyPosts = allPosts?.result
    ?.sort((a, b) => new Date(b.time) - new Date(a.time))
    .filter((post) => post?.author?.email === loginUserEmail);

  const FinalResult =
    pageName === "all-posts" ? sortDataAllPosts : sortDataMyPosts;

  return (
    <div>
      {/* chart  */}
      <Chart />

      {/* all Post  */}
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Post Title</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Like</Table.HeadCell>
          <Table.HeadCell>Remove</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {FinalResult?.map((post) => {
            const { title, author, likes, _id } = post;
            let sliceTitle = "";
            if (title.length > 27) {
              sliceTitle = title.slice(0, 27) + "...";
            } else {
              sliceTitle = title;
            }

            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {sliceTitle}
                </Table.Cell>
                <Table.Cell>{author?.name}</Table.Cell>
                <Table.Cell>{author?.username}</Table.Cell>
                <Table.Cell>{likes?.length}</Table.Cell>
                <Table.Cell>
                  <p
                    onClick={() => deletePostFN(_id)}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
                  >
                    Delete
                  </p>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllPostAndMyPost;
