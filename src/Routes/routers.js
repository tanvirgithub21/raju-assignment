import { createBrowserRouter } from "react-router-dom"
import Home from "../Components/Home/Home"
import MyPost from "../Components/MyPost/MyPost"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/my-post",
        element: <MyPost />
    },
])

export default routers