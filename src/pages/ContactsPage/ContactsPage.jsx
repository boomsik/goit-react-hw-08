import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
    selectFilteredContacts,
    getIsLoading,
    getError,
} from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.contactsPage}>
            <h1>Contacts</h1>
            <ContactForm />
            <Filter />
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ContactList contacts={contacts} />
        </div>
    );
};

export default ContactsPage;
