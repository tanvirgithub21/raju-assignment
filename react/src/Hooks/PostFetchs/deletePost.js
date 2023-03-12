import axios from "axios";
import { toast } from "react-toastify"
const deletePost = async (id) => {

    try {
        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER_URL}post/delete/${id}`)
        console.log(data);
        toast.success("Delete successful")


    } catch (err) {
        toast.error("Delete field")
        console.log(err);
    }

}
export default deletePost;