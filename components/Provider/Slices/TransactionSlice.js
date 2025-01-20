import { createSlice } from "@reduxjs/toolkit";

const streakEquivalents = [
  { value: 0, discount: 0 },
  { value: 1, discount: 10 },
  { value: 2, discount: 20 },
  { value: 3, discount: 30 },
];

const initialState = {
  name: "",
  streak: 0,
  streakDiscount: 0,
  branch: "",
  services: [],
  voucherDiscount: 0,
  method: "",
  totalDiscount: 0,
  grandTotal: 0,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setCustomerName(state, action) {
      state.name = action.payload;
    },
    setStreak(state, action) {
      state.streak = action.payload;
      const discount = streakEquivalents.find(
        (streak) => streak.value === action.payload
      );
      state.streakDiscount = discount ? discount.discount : 0; // Fallback to 0
      console.log(JSON.stringify(state));
    },
    setBranchOrMethod(state, action) {
      console.log(action.payload);
      if (action.payload.branch) {
        state.branch = action.payload.branch;
      }
      if (action.payload.method) {
        state.method = action.payload.method;
      }
      console.log(JSON.stringify(state));
    },
  },
});

export const transactionActions = transactionSlice.actions;
