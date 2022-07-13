import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSignIn = createAsyncThunk(
    'signIn/fetch',
    async (data, {extra}) => {
        return await extra.requestSignIn(data)
    }
)

export const fetchSignUp = createAsyncThunk(
    'signUp/fetch',
    async(data, {extra}) => {
        return await extra.requestSignUp(data)
    }
)

export const verifyUser = createAsyncThunk(
    'verifyUser/fetch',
    async( _ ,{extra}) => {
        return await extra.verifyUser()
    }
)