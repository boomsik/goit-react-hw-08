import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { TextField, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(login(values))
            .unwrap()
            .then(() => toast.success("Login successful!"))
            .catch((error) => {
                toast.error(`Login failed: ${error}`);
                setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={styles.loginForm}>
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
                        Login
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
