import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './slice'
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { api } from "../api";


const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        addCartReducer : ProductReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware , thunk,logger)
})

export default store