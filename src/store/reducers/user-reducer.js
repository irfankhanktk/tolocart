import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../../constants";

const initialState = {
  userInfo: null,
  language: "en",
  location: undefined,
  vehicle: {},
  notifications: [],
  unreadNotification: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
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
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    reset: (state, action) => {
      state = initialState;
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
  reset,
  setLanguage,
  setLocation,
  setNotifications,
  setVehicle,
  // demoAsync
} = userSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userSlice.reducer;
