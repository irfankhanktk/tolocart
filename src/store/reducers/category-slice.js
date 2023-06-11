import { createAction, createSlice } from "@reduxjs/toolkit";
import { useGetCategoriesQuery } from "../api";

// export const fetchCategories = createAsyncThunk(
//   "categories/fetch",
//   async ({ id }, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `${API_URLS.base_url}${API_URLS.main_categories.get_categories}${id}`
//       ); // Replace with your actual API endpoint
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const setCategories = createAction("categories/setCategories");
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCategories, (state, action) => {
      return action.payload;
    });
    // builder.addCase(fetchCategories.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(useGetCategoriesQuery.fulfilled, (state, action) => {
    //   return action.payload;
    // });
    // builder.addCase(fetchCategories.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export default categorySlice.reducer;
