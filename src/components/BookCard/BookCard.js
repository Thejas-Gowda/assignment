import React, { useState } from "react";
import s from "./style.module.css";

const BookCard = ({
  title,
  link,
  onClick,
  author,
  country,
  year,
  pages,
  language,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`card ${s.container}`}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}>
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}>{author}</h6>
        <p className={`card-text ${s.text_content}`}>{link}</p>
        <p className={`card-text ${s.text_content}`}>{country}</p>
        <p className={`card-text ${s.text_content}`}>{year}</p>
        <p className={`card-text ${s.text_content}`}>{language}</p>
        <p className={`card-text ${s.text_content}`}>{pages}</p>
      </div>
    </div>
  );
};

export default BookCard;
