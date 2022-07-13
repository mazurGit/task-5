import { createReducer } from "@reduxjs/toolkit"
import { 
    fetchBooking,
    fetchDeleteBookingTrip,
    deleteBookingTrip,
    fetchBookTrip,
    resetFormStatus
} from "../actions/booking"

const initialState ={
    bookingTrips:[],
    bookingLoadingStatus:'idle',
    deleteBookingStatus:'idle',
    bookTripLoadingStatus:'idle'
}

export const booking = createReducer(initialState, builder => {
    builder
        .addCase(fetchBooking.pending, state => {
            state.bookingLoadingStatus = 'loading'
        })
        .addCase(fetchBooking.rejected, state => {
            state.bookingLoadingStatus = 'rejected'
        })
        .addCase(fetchBooking.fulfilled, (state, action) => {
            state.bookingLoadingStatus = 'idle'
            state.bookingTrips = action.payload
        })
        .addCase(fetchDeleteBookingTrip.pending, state  => {
            state.deleteBookingStatus = 'loading'
        })
        .addCase(fetchDeleteBookingTrip.rejected, state  => {
            state.deleteBookingStatus = 'rejected'
        })
        .addCase(fetchDeleteBookingTrip.fulfilled, state  => {
            state.deleteBookingStatus = 'idle'
        })
        .addCase(deleteBookingTrip, (state, action) => {
            state.bookingTrips = state.bookingTrips.filter(item => item.id !== action.payload)
        })
        .addCase(fetchBookTrip.pending, state => {
            state.bookTripLoadingStatus = 'loading'
        })
        .addCase(fetchBookTrip.rejected, state => {
            state.bookTripLoadingStatus = 'rejected'
        })
        .addCase(fetchBookTrip.fulfilled, state => {
            state.bookTripLoadingStatus = 'loaded'
        })
        .addCase(resetFormStatus, state => { 
            state.bookTripLoadingStatus = 'idle'
        })
})