import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { getContacts } from "../../redux/contacts/selectors";
import { getFilter } from "../../redux/filters/selectors";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

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
            <ContactList contacts={filteredContacts} />
        </div>
    );
};

export default ContactsPage;
