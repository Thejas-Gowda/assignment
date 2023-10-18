import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { BookAPI } from "../../api/book-api";
import { setBookList } from "../../store/books/books-slice";
import s from "./style.module.css";

export const PageBtnContainer = ({
  currentPage,
  totalPages,
  pages,
  nextPage,
  prevPage,
  clickPage,
  pagesClicked,
}) => {
  //   const [pagesClicked, setPageClicked] = useState(1);
  //   const dispatch = useDispatch();
  //   const bookPagination = useSelector(
  //     (store) => store.booksSlice.bookList?.pagination
  //   );
  //   const totalPages = bookPagination?.totalPages;
  //   const currentPage = bookPagination?.currentPage;
  //   const pages = Array.from({ length: totalPages }, (_, index) => {
  //     return index + 1;
  //   });
  //   const nextPage = () => {
  //     let newPage = currentPage + 1;
  //     if (newPage > totalPages) {
  //       newPage = 1;
  //     }
  //     setPageClicked(newPage);
  //   };
  //   const prevPage = () => {
  //     let newPage = currentPage - 1;
  //     if (newPage < 1) {
  //       newPage = totalPages;
  //     }
  //     setPageClicked(newPage);
  //   };
  //   const clickPage = (page) => {
  //     let newPage = page;
  //     if (newPage < 1) {
  //       newPage = totalPages;
  //     }
  //     setPageClicked(newPage);
  //   };
  //   async function fetchAllBooks() {
  //     const bookList = await BookAPI.fetchAll(currentPage);
  //     dispatch(setBookList(bookList));
  //   }
  //   useEffect(() => {
  //     fetchAllBooks(pagesClicked);
  //   }, [pagesClicked]);
  return (
    <div className={s.pageContainer}>
      <button className={s.prevBtn} onClick={prevPage}>
        <ChevronLeft />
        Prev
      </button>
      <div className={s.btnContainer}>
        {pages?.map((pageNumber) => {
          return (
            <button
              type="button"
              className={
                pageNumber === pagesClicked
                  ? `${s.pageBtn} ${s.active}`
                  : `${s.pageBtn}`
              }
              key={pageNumber}
              onClick={() => clickPage(pageNumber)}>
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className={s.nextBtn} onClick={nextPage}>
        Next
        <ChevronRight />
      </button>
    </div>
  );
};
