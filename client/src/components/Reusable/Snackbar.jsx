/**
 * Snack bar component
 */

// Dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material UI
import Main from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
import Slide from '@mui/material/Slide';

// Actions
import { hideSnackbar } from '../../store/features/app';

function Snackbar() {
    const dispatch = useDispatch();
    const { snackbar } = useSelector((state) => state.app.value);

    const handleSnackbarClose = () => {
        dispatch(hideSnackbar());
    }
    return (
        <Main
            open={snackbar.open}
            autoHideDuration={6000} // 6 Seconds before Hiding the Snackbar
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            TransitionComponent={Slide}
        >
            <Alert
                onClose={handleSnackbarClose}
                severity={snackbar.type}
                variant="standard"
                className="z-50 w-full"
            >
                {snackbar.message}
            </Alert>
        </Main>
    )
}

export default Snackbar;