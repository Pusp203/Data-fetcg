import React from "react";
import "./pagination.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          console.log("number", number);
          return (
            <li key={number}>
              <button onClick={() => paginate(number)}> {number} </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
