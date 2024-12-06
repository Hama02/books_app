import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Test } from "./types/Test";

// Define a base query function using fetch
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_URL}/api`,
});

// Define an API slice with endpoints
export const exampleApi = createApi({
  reducerPath: "exampleApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTheUsers: builder.query<Test, unknown>({
      query: () => `users`,
    }),
  }),
});

// Export API hooks for usage in components
export const { useGetTheUsersQuery } = exampleApi;
