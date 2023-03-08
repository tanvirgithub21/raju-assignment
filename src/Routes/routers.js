import { createBrowserRouter } from "react-router-dom"
import Home from "../Components/Home/Home"
import Login from "../Components/Login/Login"
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
    {
        path: "/login",
        element: <Login />
    },
])

export default routers