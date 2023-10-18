import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { BookAPI } from "./api/book-api";
import { setBookList } from "./store/books/books-slice";
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";
export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // async function fetchAllBooks() {
  //   const bookList = await BookAPI.fetchAll();
  //   dispatch(setBookList(bookList));
  // }
  // useEffect(() => {
  //   fetchAllBooks();
  // }, []);

  return (
    <div>
      <Header />

      <div className={s.workspace}>
        <Outlet />
      </div>
    </div>
  );
}
