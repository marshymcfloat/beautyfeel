"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { transactionSlice } from "./Slices/dashboardSlices";

const store = configureStore({
  reducer: { transaction: transactionSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

type ReduxProviderProps = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export { store };
