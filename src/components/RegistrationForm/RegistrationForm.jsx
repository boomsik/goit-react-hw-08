import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { TextField, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import styles from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(7, "Password must be at least 7 characters long")
        .max(50, "Too Long!")
        .required("Required"),
});

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Form values:", values);
        dispatch(register(values))
            .unwrap()
            .then(() => {
                toast.success("Registration successful!");
            })
            .catch((error) => {
                toast.error(`Registration failed: ${error}`);
                setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={styles.registrationForm}>
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
                        <Field name="email">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        </Field>
                        <ErrorMessage
                            name="email"
                            component="div"
                            className={styles.error}
                        />
                    </div>
                    <div className={styles.formField}>
                        <Field name="password">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        </Field>
                        <ErrorMessage
                            name="password"
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
                        Register
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
