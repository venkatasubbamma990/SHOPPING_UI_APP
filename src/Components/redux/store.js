import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './slice'
import { thunk } from "redux-thunk";
import logger from "redux-logger";


const store = configureStore({
    reducer: {
        addCartReducer : ProductReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(thunk,logger)
})

export default store