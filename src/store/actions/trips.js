import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const fetchAllTrips = createAsyncThunk(
    'trips/fetchAlltrips',
    async(data,{extra}) => {
        return await extra.requestAlltrips()
    });

export const setSearchValue = createAction('FILTERS_SEARCH');
export const setDurationValue = createAction('FILTER_DURATION',function prepare(range){
    return{
        payload: range
        .split('x')
        .map(item => {
            return item
            ? item.replace(/\D/g,'')
            : 365
          })
    }
});
export const setLevelValue = createAction('FILTER_LEVEL');