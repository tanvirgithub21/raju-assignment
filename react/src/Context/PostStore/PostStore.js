// import { useState } from 'react';
// import axios from "axios"

// const PostStore = () => {

//     const [allPost, setAllPost] = useState([])
//     const [allPostLoading, setAllPostLoading] = useState(false)
//     const [allPostError, setAllPostError] = useState(false)

//     const post = {}

//     post.GetAllPosts = async () => {
//         try {
//             setAllPostLoading(true)
//             const { data } = await axios(`${process.env.REACT_APP_SERVER_URL}post`, {
//                 method: 'GET',
//             })
//             setAllPost(data)
//             setAllPostLoading(false)

//             return [allPost, allPostLoading]
//         } catch (err) {
//             setAllPostError(err)
//             return [allPost, allPostLoading, allPostError]
//         }


//     }









//     return post
// };

// export default PostStore();