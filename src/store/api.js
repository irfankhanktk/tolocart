// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URLS } from "./api-urls";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URLS.base_url }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (id = 3) => `${API_URLS.main_categories.get_categories}${id}`,
    }),
    getOffersWithShopDetails: builder.query({
      query: () => `${API_URLS.product.get_remmmended}`,
    }),
    getRecommendedProducts: builder.query({
      query: (params) => `${API_URLS.product.get_remmmended}ShopType=store`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCategoriesQuery,
  useGetOffersWithShopDetailsQuery,
  useGetRecommendedProductsQuery,
} = api;
