import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./Navigation.module.css";

const Navigation = () => (
    <nav className={styles.nav}>
        <Button
            component={NavLink}
            to="/"
            color="inherit"
            className={styles.navLink}
        >
            Home
        </Button>
        <Button
            component={NavLink}
            to="/contacts"
            color="inherit"
            className={styles.navLink}
        >
            Contacts
        </Button>
    </nav>
);

export default Navigation;
