import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
// import { api } from "./api";
import categorySlice from "./reducers/category-slice";
import userSlice from "./reducers/user-reducer";
import cartSlice from "./reducers/cart-slice";
import orderSlice from "./reducers/order-slice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    category: categorySlice,
    user: userSlice,
    cart: cartSlice,
    order: orderSlice,
    // [api.reducerPath]: api.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
