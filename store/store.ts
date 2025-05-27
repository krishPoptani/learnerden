// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { contactApi, contactReducer } from "../slices/contactForm";
import { QuizUserApi } from "../slices/user/quizSliceUser";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    [contactApi.reducerPath]: contactApi.reducer, // Add RTK Query reducer for API
    [QuizUserApi.reducerPath]: QuizUserApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      contactApi.middleware,
      QuizUserApi.middleware,
    ), // Add RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
