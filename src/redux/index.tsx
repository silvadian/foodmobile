import {combineReducers} from 'redux';
import {userApi} from './api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

import userReducer from './reducer/user';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootreducer = combineReducers({
  user: userReducer,
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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from './api/userApi';
