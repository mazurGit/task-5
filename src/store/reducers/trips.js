import { createReducer } from "@reduxjs/toolkit"
import  {   
            fetchAllTrips,
            setSearchValue, 
            setDurationValue,
            setLevelValue
        } from "../actions/trips"

const initialState = {
    trips:[],
    tripsLoadingStatus:'idle',
    filters:{
        searchValue:'',
        duration:'',
        level:''
    }
}

export const trips = createReducer(initialState, builder => {
    builder
        .addCase(fetchAllTrips.pending, state => {
            state.tripsLoadingStatus = 'loading'
        })
        .addCase(fetchAllTrips.rejected, state => {
            state.tripsLoadingStatus = 'rejected'
        })
        .addCase(fetchAllTrips.fulfilled, (state, action) => {
            state.tripsLoadingStatus = 'idle'
            state.trips = action.payload
        })
        .addCase(setSearchValue, (state, action) => {
            state.filters.searchValue = action.payload
        })
        .addCase(setDurationValue, (state, action) => {
            state.filters.duration = action.payload
        })
        .addCase(setLevelValue, (state, action) => {
            state.filters.level  =action.payload
        })
})
