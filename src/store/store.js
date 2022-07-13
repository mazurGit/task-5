import { configureStore } from "@reduxjs/toolkit";
import { user } from "./reducers/user";
import { trips } from "./reducers/trips";
import service from "../helpers/requests";

const store = configureStore({
    reducer:{
        user,
        trips
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {extraArgument:service}
    }),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;