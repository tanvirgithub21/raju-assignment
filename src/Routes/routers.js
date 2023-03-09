import { createBrowserRouter } from "react-router-dom"
import AdminDashboard from "../AdminDashboard/AdminDashboard"
import AllPostAndMyPost from "../AdminDashboard/AllPost/AllPostAndMyPost"
import MakeAdminAndUser from "../AdminDashboard/MakeAdminAndUser/MakeAdminAndUser"
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
        path: "/admin",
        element: <AdminDashboard />,
        children: [
            {
                path: "",
                element: <AllPostAndMyPost pageName="all-post" />,
            },
            {
                path: "my-post",
                element: <AllPostAndMyPost pageName="my-post" />,
            },
            {
                path: "make-admin",
                element: <MakeAdminAndUser pageName="make-admin" />,
            },
            {
                path: "user-management",
                element: <MakeAdminAndUser pageName="user-management" />,
            },

        ],
    },

    {
        path: "/*",
        element: <NotFound />
    },
])

export default routers