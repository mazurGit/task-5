import { createReducer } from "@reduxjs/toolkit/";
import { fetchSignIn, fetchSignUp, verifyUser } from "../actions/user";

const initialState = {
    userData: null,
    userLoadingStatus:'idle',
    userSignStatus:'idle'
}

export const user = createReducer(initialState, builder => {
    builder
        .addCase(fetchSignIn.pending, state => {
            state.userSignStatus = 'loading'
        })
        .addCase(fetchSignIn.rejected, state => {
            state.userSignStatus = 'rejected'
        })
        .addCase(fetchSignIn.fulfilled, (state, action) => {
            state.userSignStatus = 'fulfilled'
            state.userData = action.payload
        })
        .addCase(fetchSignUp.pending, state => {
            state.userSignStatus = 'loading'
        })
        .addCase(fetchSignUp.rejected, state => {
            state.userSignStatus = 'rejected'
        })
        .addCase(fetchSignUp.fulfilled, (state, action) => {
            state.userSignStatus = 'fulfilled'
            state.userData = action.payload
        })
        .addCase(verifyUser.pending, state => {
            state.userLoadingStatus = 'loading'
        })
        .addCase(verifyUser.rejected, state => {
            state.userLoadingStatus = 'rejected'
        })
        .addCase(verifyUser.fulfilled, (state, action) => {
            state.userLoadingStatus = 'idle'
            state.userData = action.payload
        })
})