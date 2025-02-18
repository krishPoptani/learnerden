// redux/slices/contactSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

interface EmailPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  syllabus?: string; // Optional
  class?: string; // Optional
}

interface ContactUs {
  id: number;
  phone: string[];
  email: string[];
  address: string;
  facebookLink?: string;
  twitterLink?: string;
  linkedinLink?: string;
  instagramLink?: string;
}

// Define the initial state for contactUs
const initialState: ContactUs | null = null;

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

// Create API for fetching contactUs data
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: (builder) => ({
    getContactUs: builder.query<ContactUs, void>({
      query: () => "create-contact",
    }),
    updateContactUs: builder.mutation<ContactUs, Partial<ContactUs>>({
      query: (data) => ({
        url: "create-contact", // Adjust endpoint based on your b ackend setup
        method: "POST",
        body: {
          ...data,
          id: 2, // Ensure the update always targets id: 2
        },
      }),
    }),
    sendEmail: builder.mutation<void, EmailPayload>({
      query: (payload) => ({
        url: "send-email", // API endpoint for sending email
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetContactUsQuery,
  useUpdateContactUsMutation,
  useSendEmailMutation,
} = contactApi;
