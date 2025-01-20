import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  branches: [],
  services: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addTransactions(state, action) {
      state.transactions = action.payload;
    },
    addBranches(state, action) {
      state.branches = action.payload;
    },
    addServices(state, action) {
      state.services = action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
