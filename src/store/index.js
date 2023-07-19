import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
// import { api } from "./api";
import categorySlice from "./reducers/category-slice";
import userSlice from "./reducers/user-reducer";
import cartSlice from "./reducers/cart-slice";
import orderSlice from "./reducers/order-slice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const reducers = combineReducers({
  category: categorySlice,
  user: userSlice,
  cart: cartSlice,
  order: orderSlice,
});
const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    //by default whole store is persisted unitill mention in whitelist or blacklist
    whitelist: ["cart"], //mention slice names that are to be persisted,
    blacklist: [], //mention slice names that are not to be persisted.
  },
  reducers
);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
});
export const persistor = persistStore(store);
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
