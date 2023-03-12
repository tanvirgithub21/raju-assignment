import axios from "axios";
import { useState } from "react";

const GetAllPosts = async () => {

    const [allPost, setAllPost] = useState([])
    const [allPostLoading, setAllPostLoading] = useState(false)
    const [allPostError, setAllPostError] = useState(false)

    try {
        setAllPostLoading(true)
        const { data } = await axios(`${process.env.REACT_APP_SERVER_URL}post`, {
            method: 'GET',
        })
        setAllPost(data)
        setAllPostLoading(false)
    } catch (err) {
        setAllPostError(err)
        allPostLoading(false)
        allPostError(err)
    }

    return [allPost, allPostLoading, allPostError]

};

export default GetAllPosts;