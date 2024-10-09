"use client";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../lib/store";
import { add } from "@/lib/features/cart/cartSlice";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }) {
  // useEffect(() => {
  //   store.dispatch(add("product_id"));
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
