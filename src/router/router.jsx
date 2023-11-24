import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import AllContest from "../pages/AllContestPage/AllContest";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allcontest",
                element:<AllContest></AllContest>
            }
        ]
    },

    // Login page, Log Out page
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>
    }

    
])
export default router