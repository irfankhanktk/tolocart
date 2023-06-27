import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active_orders: [],
  past_orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setActiveOrders: (state, action) => {
      state.active_orders = action.payload;
    },
    setPastOrders: (state, action) => {
      state.past_orders = action.payload;
    },
    reset: (state, action) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveOrders, setPastOrders, reset } = orderSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default orderSlice.reducer;
