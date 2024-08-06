import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/selectors";
import { toast } from "react-hot-toast";

const PrivateRoute = ({ component: Component, redirectTo = "/login" }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    if (!isLoggedIn) {
        toast.error("You must log in or register first");
    }

    return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getIsLoggedIn } from "../redux/auth/selectors";

// const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//     const isLoggedIn = useSelector(getIsLoggedIn);
//     return isLoggedIn ? Component : <Navigate to={redirectTo} />;
// };

// export default PrivateRoute;
