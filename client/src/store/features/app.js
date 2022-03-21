/**
 * Application State
 */

// Dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        loading: false,
    }
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showLoading: (state, action) => {
            // Action Payload: boolean
            state.value.loading = action.payload;
        }
    }
});

// Exporting App Actions
export const { showLoading } = appSlice.actions;

// Exporting App Reducer
export default appSlice.reducer;