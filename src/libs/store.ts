import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authorsApi } from "./Services/authorsApi";
import { booksApi } from "./Services/booksApi";
import selectedBookReducer from "./Features/selectedBookSlice";

export const store = configureStore({
  reducer: {
    selectedBook: selectedBookReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [authorsApi.reducerPath]: authorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authorsApi.middleware, booksApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
