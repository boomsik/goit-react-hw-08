import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id))
            .unwrap()
            .then(() => toast.success("Contact deleted!"))
            .catch(() => toast.error("Failed to delete contact"));
    };

    return (
        <List className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id} className={styles.contactItem}>
                    <ListItemText primary={`${name}: ${number}`} />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(id)}
                        className={styles.deleteButton}
                    >
                        Delete
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default ContactList;
