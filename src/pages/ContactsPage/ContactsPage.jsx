import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
    getContacts,
    getIsLoading,
    getError,
} from "../../redux/contacts/selectors"; // или selectContacts, если такое название
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts); // или selectContacts, если такое название
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const filter = useSelector((state) => state.filters);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={styles.contactsPage}>
            <h1>Contacts</h1>
            <ContactForm />
            <Filter />
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ContactList contacts={filteredContacts} />
        </div>
    );
};

export default ContactsPage;
