import { createSlice } from "@reduxjs/toolkit";
import {
  useGetShopsQuery,
  useCreateShopMutation,
  useUpdateShopMutation,
  useDeleteShopMutation,
} from "./../api";

const shopSlice = createSlice({
  name: "shops",
  initialState: {
    shops: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(useGetShopsQuery.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(useGetShopsQuery.fulfilled, (state, action) => {
      state.loading = false;
      state.shops = action.payload;
    });
    builder.addCase(useGetShopsQuery.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(useCreateShopMutation.fulfilled, (state, action) => {
      state.shops.push(action.payload);
    });
    builder.addCase(useUpdateShopMutation.fulfilled, (state, action) => {
      const updatedShop = action.payload;
      const index = state.shops.findIndex((shop) => shop.id === updatedShop.id);
      if (index !== -1) {
        state.shops[index] = updatedShop;
      }
    });
    builder.addCase(useDeleteShopMutation.fulfilled, (state, action) => {
      const deletedShopId = action.payload;
      state.shops = state.shops.filter((shop) => shop.id !== deletedShopId);
    });
  },
});

export default shopSlice.reducer;
