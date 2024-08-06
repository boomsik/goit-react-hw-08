import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const AuthNav = () => (
    <div>
        <Button component={NavLink} to="/register" color="inherit">
            Register
        </Button>
        <Button component={NavLink} to="/login" color="inherit">
            Login
        </Button>
    </div>
);

export default AuthNav;
