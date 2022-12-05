import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./services/usersApis";


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})