import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";

const AppBarComponent = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Contacts App
                    </Typography>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppBarComponent;
