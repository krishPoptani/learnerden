// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "../slices/contactForm";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer, // Add RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware), // Add RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
