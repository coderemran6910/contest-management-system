import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import AllContest from "../pages/AllContestPage/AllContest";

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

    
])
export default router