import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../../constants";

const initialState = {
  userInfo: null,
  language: "en",
  location: undefined,
  vehicle: {},
  notifications: [],
  slides: [],
  unreadNotification: 0,
  isRequiredLogin: false,
  fav_product_ids: [],
  fav_store_ids: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      if (action?.payload?.data?.jwToken)
        localStorage.setItem(
          STORAGE_KEYS.token,
          action?.payload?.data?.jwToken || null
        );
      localStorage.setItem(
        STORAGE_KEYS.user,
        JSON.stringify(action?.payload?.data)
      );
      state.userInfo = action.payload?.data;
    },
    setVehicle: (state, action) => {
      state.vehicle = action.payload;
    },
    setFavProductIds: (state, action) => {
      state.fav_product_ids = action.payload;
    },
    setFavStoreIds: (state, action) => {
      state.fav_store_ids = action.payload;
    },
    setAddFavStore: (state, action) => {
      state.fav_store_ids = [...state.fav_store_ids, action.payload];
    },
    setRemoveFavStore: (state, action) => {
      state.fav_store_ids = state.fav_store_ids.filter(
        (x) => x !== action.payload
      );
    },
    setAddFavProduct: (state, action) => {
      state.fav_product_ids = [...state.fav_product_ids, action.payload];
    },
    setRemoveFavProduct: (state, action) => {
      state.fav_product_ids = state.fav_product_ids.filter(
        (x) => x !== action.payload
      );
    },
    setSlides: (state, action) => {
      state.slides = action.payload;
    },
    setIsReqLogin: (state, action) => {
      if (action.payload) {
        state.userInfo = null;
        localStorage.removeItem(STORAGE_KEYS.token);
        localStorage.removeItem(STORAGE_KEYS.user);
      }
      state.isRequiredLogin = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    resetUser: (state, action) => {
      localStorage.removeItem(STORAGE_KEYS.token);
      localStorage.removeItem(STORAGE_KEYS.user);
      return initialState;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
      state.unreadNotification = action.payload?.filter(
        (x) => !x?.is_read
      )?.length;
    },
    // demoAsync: (state, action) => {
    //   state.userInfo = action.payload
    // },
  },
});
// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  resetUser,
  setLanguage,
  setLocation,
  setNotifications,
  setVehicle,
  setIsReqLogin,
  setSlides,
  setFavProductIds,
  setAddFavProduct,
  setRemoveFavProduct,
  setFavStoreIds,
  setAddFavStore,
  setRemoveFavStore,
  // demoAsync
} = userSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userSlice.reducer;
