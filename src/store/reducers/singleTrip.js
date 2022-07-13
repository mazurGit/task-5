import { createReducer } from '@reduxjs/toolkit';
import { fetchSingleTrip } from '../actions/singleTrip';

const initialState = {
    tripData:{},
    tripDataLoadingStatus:'idle'
}

export const singleTrip = createReducer(initialState, builder => {
    builder
        .addCase(fetchSingleTrip.pending, state => {
            state.tripDataLoadingStatus = 'loading'
        })
        .addCase(fetchSingleTrip.rejected, state => {
            state.tripDataLoadingStatus = 'rejected'
        })
        .addCase(fetchSingleTrip.fulfilled, (state, action) => {
            state.tripDataLoadingStatus = 'idle'
            state.tripData = action.payload
        })
})