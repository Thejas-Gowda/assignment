import { createSlice } from "@reduxjs/toolkit";
export const bookSlice = createSlice({
  name: "bookSlice",
  initialState: {
    bookList: [],
  },
  reducers: {
    setBookList: (currentList, action) => {
      currentList.bookList = action.payload;
    },
    addBook: (currentList, action) => {
      currentList.bookList?.data.push(action.payload);
    },
    updateBook: (currentList, action) => {
      console.log(currentList.bookList?.data, action.payload);
      const indexToUpdate = currentList.bookList?.data.findIndex(
        (book) => book.id === action.payload.id
      );
      console.log(indexToUpdate, action.payload);
      currentList.bookList.data[indexToUpdate] = action.payload;
    },
  },
});

export const bookReducer = bookSlice.reducer;
export const { setBookList, addBook, updateBook } = bookSlice.actions;
