import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({pageCount, handlePageClick}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      previousLabel="previous"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      pageClassName="page-item"
      containerClassName="pagination justify-content-center my-2 mb-5 user-select-none"
      pageLinkClassName="page-link"
      previousClassName="page-link"
      nextClassName="page-link"
      activeClassName="active"
      breakClassName="page-item"
      breakLinkClassName="page-link"
    />
  );
};
