import { combineReducers, Store } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { blogsReducer } from "./blogs"

export const rootReducer=combineReducers({
    blogs:blogsReducer,
})

export const store: Store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch