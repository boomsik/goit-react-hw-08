import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { TextField, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
});

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(addContact(values))
            .unwrap()
            .then(() => toast.success("Contact added!"))
            .catch(() => toast.error("Failed to add contact"));
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={styles.contactForm}>
                    <div className={styles.formField}>
                        <Field name="name">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    label="Name"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        </Field>
                        <ErrorMessage
                            name="name"
                            component="div"
                            className={styles.error}
                        />
                    </div>
                    <div className={styles.formField}>
                        <Field name="number">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    label="Number"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        </Field>
                        <ErrorMessage
                            name="number"
                            component="div"
                            className={styles.error}
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                    >
                        Add Contact
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
