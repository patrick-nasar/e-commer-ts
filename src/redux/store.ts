import DataSlice from './DataSlice'
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, DataSlice);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
