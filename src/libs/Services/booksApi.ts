import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BestsellerResults } from "./types/Book";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/books/v3/",
  }),
  endpoints: (builder) => ({
    fetchBooks: builder.query<BestsellerResults[], void>({
      query: () => {
        const apiKey = "RAuGNZ86tE2ZBcEW9bPd0kXnHvnGMAIZ";
        if (!apiKey) {
          throw new Error("API key is missing in environment variables.");
        }

        return `lists.json?list=hardcover-fiction&api-key=${apiKey}`;
      },
      transformResponse: (response: any) => {
        return response.results;
      },
    }),
  }),
});

export const { useFetchBooksQuery } = booksApi;
