import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import loder from "../assets/loader.json"
import Lottie from "lottie-react";





const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Lottie className="mx-auto w-4/12" animationData={loder} loop />
    }

    if (user) {
    return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;