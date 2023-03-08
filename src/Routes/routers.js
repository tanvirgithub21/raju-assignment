import { createBrowserRouter } from "react-router-dom"
import Home from "../Components/Home/Home"
import Login from "../Components/Login/Login"
import MyPost from "../Components/MyPost/MyPost"
import SingUp from "../Components/SingUp/SingUp"
import NotFound from "../ShredComponents/NotFound/NotFound"

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
    {
        path: "/sing-up",
        element: <SingUp />
    },
    {
        path: "/*",
        element: <NotFound />
    },
])

export default routers