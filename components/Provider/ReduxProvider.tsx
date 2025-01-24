"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { dashboardSlice } from "./Slices/dashboardSlices";
import { transactionSlice } from "./Slices/TransactionSlice";
import { modalSlice } from "./Slices/modalSlices"
const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
    transaction: transactionSlice.reducer,
    modal: modalSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

type ReduxProviderProps = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export { store };
