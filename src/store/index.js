import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./books/books-slice";

export const store = configureStore({
  reducer: {
    booksSlice: bookReducer,
  },
});
