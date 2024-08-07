import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import { Button } from "@mui/material";
import styles from "./Navigation.module.css";

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <nav className={styles.nav}>
            <Button
                component={NavLink}
                to="/"
                color="inherit"
                className={styles.navLink}
            >
                Home
            </Button>
            {isLoggedIn && (
                <Button
                    component={NavLink}
                    to="/contacts"
                    color="inherit"
                    className={styles.navLink}
                >
                    Contacts
                </Button>
            )}
        </nav>
    );
};

export default Navigation;
