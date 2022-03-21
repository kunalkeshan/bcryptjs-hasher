/**
 * Backdrop Component
 */

// Dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// MUI 
import Main from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Actions
import { showLoading } from '../../store/features/app';

function Backdrop() {
    const dispatch = useDispatch();


    const handleClose = () => {
        dispatch(showLoading(false));
    }

    const { loading } = useSelector((state) => state.app.value);
    return (
        <Main
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Main>
    )
}

export default Backdrop