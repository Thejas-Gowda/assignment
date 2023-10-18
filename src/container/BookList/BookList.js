import React from "react";
import s from "./style.module.css";
import { useNavigate } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard";

const BookList = ({ bookList }) => {
  const navigate = useNavigate();

  return (
    <div className={`row justify-content-center`}>
      {bookList?.map((book) => {
        return (
          <div key={book.id} className={s.card_container}>
            <BookCard
              title={book.title}
              author={book.author}
              link={book.link}
              language={book.language}
              pages={book.pages}
              country={book.country}
              year={book.year}
              onClick={() => navigate("/book/" + book.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
