// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { contactApi, contactReducer } from "../slices/contactForm";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    [contactApi.reducerPath]: contactApi.reducer, // Add RTK Query reducer for API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware), // Add RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
