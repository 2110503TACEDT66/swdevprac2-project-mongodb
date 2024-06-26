import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./features/reserveSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "rootPersist",
    storage
}

const rootReducer = combineReducers({reservationSlice})
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore(
    {
        reducer: reduxPersistedReducer
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector