import { useState } from "react";
import { Link } from "react-router-dom";
import RepoDetails from "../pages/RepoDetails";

function Pagination({reposPerPage, totalRepos, paginate}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (number) => {
    setActivePage(number);
    paginate(number);
  };

  return (

      <nav className="pagination">
        <ul className="pagination-ul">
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${
              activePage === number ? "active" : ""
            }`}>
                <a 
                  className={`page-link ${
                    activePage === number ? "active" : ""
                  }`}
                  onClick={() => handlePageClick(number)}
                >
                  {number}
                </a>
            </li>
          ))}
        </ul>
      </nav>

  );
}

export default Pagination;