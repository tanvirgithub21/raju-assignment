import { createBrowserRouter } from "react-router-dom"
import Home from "../Components/Home/Home"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
])

export default routers