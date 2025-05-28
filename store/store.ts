// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { contactApi, contactReducer } from "../slices/contactForm";
import { QuizUserApi } from "../slices/user/quizSliceUser";
import { masterApi } from "../slices/QuizSlice"; // your RTK Query API for master data

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [QuizUserApi.reducerPath]: QuizUserApi.reducer,
    [masterApi.reducerPath]: masterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(contactApi.middleware)
      .concat(QuizUserApi.middleware)
      .concat(masterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
