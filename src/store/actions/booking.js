import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const fetchBooking  = createAsyncThunk(
    'booking/fetchBooking',
    async(data,{extra}) => {
        return await extra.requestUserBooking()
    }
)

export const fetchBookTrip = createAsyncThunk(
    'booking/fetchBook',
    async (data,{extra}) => {
        return await extra.requestBookTrip(data)
    }
)

export const fetchDeleteBookingTrip = createAsyncThunk(
    'booking/deleteBookingTrip',
    async(id, {extra}) => {
        return await extra.requestDeleteTrip(id)
    }
)

export const resetFormStatus = createAction('FORM_RESET')

export const deleteBookingTrip = createAction('BOOKING_DELETE')
