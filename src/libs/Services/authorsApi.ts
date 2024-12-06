import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Author } from "./types/Author";

export const authorsApi = createApi({
  reducerPath: "authorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    fetchAuthors: builder.query<Author[], void>({
      query: () => "authors",
    }),
  }),
});

export const { useFetchAuthorsQuery } = authorsApi;
