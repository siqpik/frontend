import feedReducer from "../domain/home/modules/feedSlice"
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        feed: feedReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
