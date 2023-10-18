import React, { useState } from "react";
import { PencilFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
export const BookForm = ({
  book,
  isEditable = true,
  title,

  onClickEdit,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState({
    title: book?.title || "",
    author: book?.author || "",
    country: book?.country || "",
    language: book?.language || "",
    link: book?.link || "",
    pages: book?.pages || "",
    year: book?.year || "",
  });
  console.log(book, "bookForm");
  const updateAction = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const actionButtons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
    </>
  );
  const titleInput = (
    <div className="mb-3">
      <label className="form- label">title</label>
      <input
        onChange={updateAction}
        type="text"
        name="title"
        className="form-control"
        value={formValues.title}
      />
    </div>
  );
  const authorInput = (
    <div className="mb-3">
      <label className="form-label">Author</label>
      <input
        onChange={updateAction}
        type="text"
        name="author"
        className="form-control"
        value={formValues.author}
      />
    </div>
  );
  const countryInput = (
    <div className="mb-3">
      <label className="form-label">country</label>
      <input
        onChange={updateAction}
        type="text"
        name="country"
        className="form-control"
        value={formValues.country}
      />
    </div>
  );
  const languageInput = (
    <div className="mb-3">
      <label className="form-label">language</label>
      <input
        onChange={updateAction}
        type="text"
        name="language"
        className="form-control"
        value={formValues.language}
      />
    </div>
  );
  const linkInput = (
    <div className="mb-3">
      <label className="form-label">link</label>
      <input
        onChange={updateAction}
        type="text"
        name="link"
        className="form-control"
        value={formValues.link}
      />
    </div>
  );
  const pagesInput = (
    <div className="mb-3">
      <label className="form-label">pages</label>
      <input
        onChange={updateAction}
        type="number"
        name="pages"
        className="form-control"
        value={formValues.pages}
      />
    </div>
  );
  const yearInput = (
    <div className="mb-3">
      <label className="form-label">year</label>
      <input
        onChange={updateAction}
        type="text"
        name="year"
        className="form-control"
        value={formValues.year}
      />
    </div>
  );
  const hasError = () => {
    for (const fieldName in formValues) {
      if (!formValues[fieldName]) {
        return true;
      }
    }
    return false;
  };
  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary
        isDisabled={hasError()}
        onClick={() => onSubmit(formValues)}>
        Submit
      </ButtonPrimary>
    </div>
  );
  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionButtons}
      </div>
      <div className="mb-3">{isEditable && titleInput}</div>
      <div className="mb-3">
        {isEditable ? authorInput : <pre>{book.author}</pre>}
      </div>
      <div className="mb-3">
        {isEditable ? countryInput : <pre>{book.country}</pre>}
      </div>
      <div className="mb-3">
        {isEditable ? languageInput : <pre>{book.language}</pre>}
      </div>
      <div className="mb-3">
        {isEditable ? linkInput : <pre>{book.link}</pre>}
      </div>
      <div className="mb-3">
        {isEditable ? pagesInput : <pre>{book.pages}</pre>}
      </div>
      <div className="mb-3">
        {isEditable ? yearInput : <pre>{book.year}</pre>}
      </div>
      {onSubmit && submitBtn}
    </div>
  );
};
