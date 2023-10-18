import React, { useState } from "react";
import { BookAPI } from "../../api/book-api";
import { BookForm } from "../../components/BookForm/BookForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBook } from "../../store/books/books-slice";

export const Book = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();

  const bookList = useSelector((store) =>
    store.booksSlice.bookList?.data?.find(
      (book) => book.id === parseInt(bookId)
    )
  );

  const [isEditable, setIsEditable] = useState(false);
  const submit = async (formValues) => {
    const updatedBook = await BookAPI.updateById(bookList.id, formValues);
    console.log("update");
    dispatch(updateBook({ ...formValues, id: parseInt(bookId) }));
    setIsEditable(false);
  };
  return (
    <>
      {bookList && (
        <BookForm
          isEditable={isEditable}
          title={isEditable ? "Edit Book" : bookList.title}
          book={bookList}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
};
