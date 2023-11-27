import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import AllContest from "../pages/AllContestPage/AllContest";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";
import AdminLayout from "../Layouts/AdminLayout";
import AddContest from "../pages/AdminPages/AddContest";
import Error404 from "../pages/ErrorPage/Error404";
import PrivateRoute from "./PrivateRoutes";
import DetailsContest from "../pages/AllContestPage/DetailsContest";
import ManageUser from "../pages/AdminPages/ManageUserPage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error404></Error404>,
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
            },
            {
                path: "/allcontest/:id",
                element: <DetailsContest></DetailsContest>
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
    },

    // admin route
    {
        path:'/admin',
        element:<PrivateRoute> <AdminLayout></AdminLayout></PrivateRoute>,
        children:[
            {
                index: true,
                path: '/admin',
                element:<PrivateRoute> <AddContest> </AddContest></PrivateRoute>
            },
            {
                path: 'manageuser',
                element:<PrivateRoute> <ManageUser></ManageUser>  </PrivateRoute>
            },
            {
                path: 'managecontest',
                element:<PrivateRoute> <ManageUser></ManageUser>  </PrivateRoute>
            }
        ]
    }


    
])
export default router