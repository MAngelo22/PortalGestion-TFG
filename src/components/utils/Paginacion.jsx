import React from 'react';
import ReactPaginate from 'react-paginate';
import './Paginacion.css';

const Paginacion = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"←"}
      nextLabel={"→"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      activeClassName={"active"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
    />
  );
};

export default Paginacion;