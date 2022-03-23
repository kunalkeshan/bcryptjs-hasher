/**
 * Application State
 */

// Dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        loading: false,
        snackbar: {
            open: false,
            message: '',
            type: 'error', // error, success, info, warning
        }
    }
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showLoading: (state, action) => {
            // Action Payload: boolean
            state.value.loading = action.payload;
        },
        showSnackbar: (state, action) => {
            // Action Payload: {message, type}
            state.value.snackbar = { ...initialState.value.snackbar, ...action.payload, open: true };
        },
        hideSnackbar: (state) => {
            state.value.snackbar.open = false;
        }
    }
});

// Exporting App Actions
export const { showLoading, showSnackbar, hideSnackbar } = appSlice.actions;

// Exporting App Reducer
export default appSlice.reducer;