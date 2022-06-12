import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((pageNo) => {
          return (
            <li key={pageNo} className="page-item">
              <a
                onClick={() => paginate(pageNo)}
                href="!#"
                className="page-link"
              >
                {pageNo}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
