import { createBrowserRouter } from "react-router-dom"
import AdminDashboard from "../AdminDashboard/AdminDashboard"
import AllPostAndMyPost from "../AdminDashboard/AllPost/AllPostAndMyPost"
import MakeAdminAndUser from "../AdminDashboard/MakeAdminAndUser/MakeAdminAndUser"
import Home from "../Components/Home/Home"
import Login from "../Components/Login/Login"
import MyPost from "../Components/MyPost/MyPost"
import SingUp from "../Components/SingUp/SingUp"
import NavbarComponent from "../ShredComponents/Navbar/NavbarComponent"
import NotFound from "../ShredComponents/NotFound/NotFound"

const routers = createBrowserRouter([
    {
        path: "/",
        element: (
            <NavbarComponent>
                <Home />
            </NavbarComponent>
        )
    },
    {
        path: "/my-post",
        element: (
            <NavbarComponent>
                <MyPost />
            </NavbarComponent>
        )
    },
    {
        path: "/login",
        element: (
            <NavbarComponent>
                <Login />
            </NavbarComponent>
        )
    },
    {
        path: "/sing-up",
        element: (
            <NavbarComponent>
                <SingUp />
            </NavbarComponent>
        )
    },
    {
        path: "/admin",
        element: (
            <NavbarComponent>
                <AdminDashboard />
            </NavbarComponent>
        ),
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
        element: (
            <NavbarComponent>
                <NotFound />
            </NavbarComponent>
        )
    },
])

export default routers