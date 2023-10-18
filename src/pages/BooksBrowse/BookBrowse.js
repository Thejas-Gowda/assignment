import React, { useState, useEffect } from "react";
import BookList from "../../container/BookList/BookList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setBookList } from "../../store/books/books-slice";
import { BookAPI } from "../../api/book-api";
import { PageBtnContainer } from "../../components/PageBtnContainer/PageBtnContainer";
import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";
export const BookBrowse = () => {
  const dispatch = useDispatch();
  const [pagesClicked, setPageClicked] = useState(1);
  const [sort, setSort] = useState("DESC");

  async function fetchAllBooks(page, srt) {
    const bookList = await BookAPI.fetchAll(page, srt);
    dispatch(setBookList(bookList));
  }
  useEffect(() => {
    fetchAllBooks(pagesClicked, sort);
    console.log("pages clicke", pagesClicked);
  }, [pagesClicked, sort]);

  const bookList = useSelector((store) => store.booksSlice.bookList);
  console.log("book", bookList);
  const totalPages = bookList?.pagination?.totalPages;
  const currentPage = bookList?.pagination?.currentPage;
  const pages = Array.from({ length: totalPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = currentPage + 1;
    if (newPage > totalPages) {
      newPage = 1;
    }
    setPageClicked(newPage);
  };
  const prevPage = () => {
    let newPage = currentPage - 1;
    if (newPage < 1) {
      newPage = totalPages;
    }
    setPageClicked(newPage);
  };
  const clickPage = (page) => {
    let newPage = page;
    if (newPage < 1) {
      newPage = totalPages;
    }
    setPageClicked(newPage);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBookList = bookList?.data?.filter((book) => {
    if (book?.title) {
      const containsTitle = book?.title
        .trim()
        .toUpperCase()
        .includes(searchTerm.trim().toUpperCase());
      // const containsContent = book?.author
      //   .trim()
      //   .toUpperCase()
      //   .includes(searchTerm.trim().toUpperCase());
      return containsTitle;
    }
  });

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4 ">
          <SearchBar
            onTextChange={setSearchTerm}
            placeholder="Search your books..."
          />
        </div>
        <div className="col-sm-12 col-md-4 ">
          <h5>Sort</h5>
          {sort === "ASC" ? (
            <ArrowUpCircleFill size={30} onClick={() => setSort("DESC")} />
          ) : (
            <ArrowDownCircleFill size={30} onClick={() => setSort("ASC")} />
          )}
        </div>
      </div>
      {bookList.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any book, do you want to{" "}
            <Link to="note/new">Create one</Link>
          </span>
        </div>
      )}
      <BookList bookList={filteredBookList} />
      <PageBtnContainer
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        clickPage={clickPage}
        pagesClicked={pagesClicked}
        pages={pages}
      />
    </>
  );
};
