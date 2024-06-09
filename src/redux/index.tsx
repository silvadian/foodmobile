import {combineReducers} from 'redux';
import {userApi} from './api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

const rootreducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

const persistConfig = {
  key: 'FoodApp',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat([
      userApi.middleware,
    ]),
});

const persistor = persistStore(store);

export {store, persistor};


export * from "./api/userApi"