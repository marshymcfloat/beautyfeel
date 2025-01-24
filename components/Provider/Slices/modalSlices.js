import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cashierVisibility: false,
  workVisibility: false,
  servicesVibility: false,
  logoutVisibility: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCashierVisibilityOn(state) {
      console.log("meow");
      state.cashierVisibility = true;
    },
    setCashierVisibilityOff(state) {
      state.cashierVisibility = false;
    },
  },
});

export const modalActions = modalSlice.actions;
