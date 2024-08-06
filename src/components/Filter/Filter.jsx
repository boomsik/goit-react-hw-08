import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { getFilter } from "../../redux/filters/selectors";
import { TextField } from "@mui/material";
import styles from "./Filter.module.css";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div className={styles.filter}>
            <TextField
                label="Find contacts by name"
                variant="outlined"
                margin="normal"
                fullWidth
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};

export default Filter;
