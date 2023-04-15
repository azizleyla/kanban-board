import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const cardPersistConfig = {
    key: "boards",
    storage
}
const persistedReducer = persistReducer(cardPersistConfig, cardReducer);

export const store = configureStore({
    reducer: {
        boards: persistedReducer
    }

})
export const persistor = persistStore(store)