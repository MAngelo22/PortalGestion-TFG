import ReactPaginate from "react-paginate";

const Paginacion = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"← "}
      nextLabel={" →"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
};

export default Paginacion;
