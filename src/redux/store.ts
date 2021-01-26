import { configureStore } from "@reduxjs/toolkit";
import { mainReducer as reducer } from "./reducer";
import { saveProductToLocalStorage } from "./mddlewares/saveProductToLocalStorage";

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveProductToLocalStorage),
});
