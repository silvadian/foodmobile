import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// pangil semua api configuration
import {userApi} from './api/userApi';
import {foodApi} from './api/foodApi';
import {ordersApi} from './api/orderApi';

// panggil semua reducer
import userTokenReducer from './reducer/userToken';
import userDataReducer from './reducer/userData';
import loadingReducer from './reducer/loading';

//cmengkombinasikan reducer dan api
const rootreducer = combineReducers({
  userToken: userTokenReducer,
  userData: userDataReducer,
  loading: loadingReducer,
  [userApi.reducerPath]: userApi.reducer,
  [foodApi.reducerPath]: foodApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
});

/**
 * configureasi redux persist
 * redux persist digunakan untuk menyimpan data applikasi
 * redux persist akan mengingat data distore meskipun app di tutup
 * key => menandakan key untuk app
 * storage => type storage yang akn kita gunakan, kita pake local storage,
 * whitelist => data yang ingin kita simpan
 */
const persistConfig = {
  key: 'FoodApp',
  storage: AsyncStorage,
  whitelist: ['userToken', 'userData'],
};

// mengabingkan configureasi redux persist dan reducer
const persistedReducer = persistReducer(persistConfig, rootreducer);

// memasukan redux persist ke store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat([
      userApi.middleware,
      foodApi.middleware,
      ordersApi.middleware,
    ]),
});

const persistor = persistStore(store);

export {store, persistor};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from './api/userApi';
export * from './api/foodApi';
export * from './api/orderApi';

export * from './reducer/loading'
export * from './reducer/userData'
export * from './reducer/userToken'