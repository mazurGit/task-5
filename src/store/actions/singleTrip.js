import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleTrip = createAsyncThunk(
    'singleTrip/fetch',
    async(id, {extra}) => {
        return await extra.requestTripById(id)
    }
)