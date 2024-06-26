import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    user: {},
    error: '', // for error message
    verified: false,
    loading: false,
    registerLoading: false,
};

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        loginStarted(state, action) {
            state.loading = true;
        },
        apiError(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.registerLoading = false;
        },
        loginSuccess(state, action) {
            state.user = action.payload;
            state.loading = false;
        },

        registerStarted(state, action) {
            state.registerLoading = true;
        },
        registerSuccess(state, action) {
            state.registerLoading = false;
        },

        logoutSuccess(state) {
            state.user = {};
        },
        verificationSuccess(state) {
            state.verified = true;
        },
    },
});

export const {
    apiError,
    loginStarted,
    registerStarted,
    loginSuccess,
    registerSuccess,
    logoutSuccess,
    verificationSuccess
} =
    authSlice.actions;

export default authSlice.reducer;
