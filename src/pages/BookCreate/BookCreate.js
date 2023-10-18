import React from "react";
import { BookAPI } from "../../api/book-api";
import { BookForm } from "../../components/BookForm/BookForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../store/books/books-slice";

export const BookCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (formValues) => {
    const createdNote = await BookAPI.create({
      ...formValues,
    });
    dispatch(addBook(formValues));
    alert("The Book has been added");
    navigate("/");
  };
  return (
    <>
      <BookForm title="New Book" onSubmit={submit} />
    </>
  );
};
