import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransactions(state, action) {
      state.transactions = action.payload;
    },
  },
});

export const transactionsActions = transactionSlice.actions;
