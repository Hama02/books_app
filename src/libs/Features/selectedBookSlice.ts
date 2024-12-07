// store/slices/selectedBookSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "@/libs/Services/types/Book";

interface SelectedBookState {
  selectedBook: Book | null;
}

const initialState: SelectedBookState = {
  selectedBook: null,
};

const selectedBookSlice = createSlice({
  name: "selectedBook",
  initialState,
  reducers: {
    setSelectedBook(state, action: PayloadAction<Book>) {
      state.selectedBook = action.payload;
    },
    clearSelectedBook(state) {
      state.selectedBook = null;
    },
  },
});

export const { setSelectedBook, clearSelectedBook } = selectedBookSlice.actions;
export default selectedBookSlice.reducer;
