// redux/slices/contactSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

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
    baseUrl: "http://locahost:3000/contactUs", // Replace with your actual API URL
  }),
  endpoints: (builder) => ({
    getContactUs: builder.query<ContactUs, void>({
      query: () => "", // This will get the contact information
    }),
  }),
});

export const { useGetContactUsQuery } = contactApi;

// import { createSlice } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store/store";

// // Define the initial state for the Contact Us slice
// interface ContactUs {
//   id: number;
//   phone: string[];
//   email: string[];
//   address: string;
//   facebookLink?: string;
//   twitterLink?: string;
//   linkedinLink?: string;
//   instagramLink?: string;
// }

// const initialState: ContactUs = {
//   id: 0,
//   phone: [],
//   email: [],
//   address: "",
//   facebookLink: "",
//   twitterLink: "",
//   linkedinLink: "",
//   instagramLink: "",
// };

// const BaseURL = "http://localhost:3000";

// const contactSlice = createSlice({
//   name: "contact",
//   initialState,
//   reducers: {
//     setContactDetails: (state, action) => {
//       state = action.payload;
//     },
//   },
// });

// export const { setContactDetails } = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;

// // Create RTK Query API service
// export const contactApi = createApi({
//   reducerPath: "contactApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${BaseURL}/api/send-email/`,
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ["Contact"],
//   endpoints: (builder) => ({
//     // Fetch contact details
//     getContactDetails: builder.query<ContactUs, void>({
//       query: () => "",
//       providesTags: ["Contact"],
//     }),

//     // Create or update contact details
//     createOrUpdateContact: builder.mutation<ContactUs, Partial<ContactUs>>({
//       query: (contactData) => ({
//         url: "create-or-update",
//         method: "POST",
//         body: contactData,
//       }),
//       invalidatesTags: ["Contact"],
//     }),

//     // Delete contact details
//     deleteContact: builder.mutation<void, { id: number }>({
//       query: ({ id }) => ({
//         url: `delete/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Contact"],
//     }),
//   }),
// });

// // Export hooks for using in components
// export const {
//   useGetContactDetailsQuery,
//   useCreateOrUpdateContactMutation,
//   useDeleteContactMutation,
// } = contactApi;
