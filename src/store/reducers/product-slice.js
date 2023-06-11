import { createSlice } from "@reduxjs/toolkit";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "./../api";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(useGetProductsQuery.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(useGetProductsQuery.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(useGetProductsQuery.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(useCreateProductMutation.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(useUpdateProductMutation.fulfilled, (state, action) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    });
    builder.addCase(useDeleteProductMutation.fulfilled, (state, action) => {
      const deletedProductId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== deletedProductId
      );
    });
  },
});

export default productSlice.reducer;
