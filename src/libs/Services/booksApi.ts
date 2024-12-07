import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BestsellerResponse, Book } from "./types/Book";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/books/v3/lists/",
  }),
  endpoints: (builder) => ({
    fetchBooks: builder.query<Book[], string | void>({
      query: () => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if (!apiKey) {
          throw new Error("API key is missing in environment variables.");
        }

        return `overview.json?api-key=${apiKey}`;
      },
      transformResponse: (response: BestsellerResponse, meta, arg: string) => {
        const allBooks = response.results.lists.flatMap((list) => list.books);
        const uniqueBooks = new Map<string, Book>();

        allBooks.forEach((book) => {
          if (!uniqueBooks.has(book.title)) {
            uniqueBooks.set(book.title, book);
          }
        });

        const filteredBooks = arg
          ? Array.from(uniqueBooks.values()).filter((book) =>
              book.author.toLowerCase().includes(arg.toLowerCase())
            )
          : Array.from(uniqueBooks.values());

        return filteredBooks;
      },
    }),
  }),
});

export const { useFetchBooksQuery } = booksApi;
