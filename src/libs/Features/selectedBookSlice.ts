import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "@/libs/Services/types/Book";

interface SelectedBookState {
  selectedBook: Book | null;
  readingList: Book[];
}

const initialState: SelectedBookState = {
  selectedBook: null,
  readingList: [],
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
    addBookToReadingList(state, action: PayloadAction<Book>) {
      const existingBook = state.readingList.find(
        (book) => book.title === action.payload.title
      );
      if (!existingBook) {
        state.readingList.push(action.payload);
      }
    },
    removeBookFromReadingList(state, action: PayloadAction<string>) {
      state.readingList = state.readingList.filter(
        (book) => book.title !== action.payload
      );
    },
  },
});

export const {
  setSelectedBook,
  clearSelectedBook,
  addBookToReadingList,
  removeBookFromReadingList,
} = selectedBookSlice.actions;
export default selectedBookSlice.reducer;
