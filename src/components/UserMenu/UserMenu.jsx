import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { Button, Typography } from "@mui/material";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUsername);

    return (
        <div>
            <Typography variant="subtitle1" component="span" sx={{ mr: 2 }}>
                Welcome, {name}
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(logout())}
            >
                Logout
            </Button>
        </div>
    );
};

export default UserMenu;
