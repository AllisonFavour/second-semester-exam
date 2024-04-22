import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepoDetails from "./pages/RepoDetails";
import Repos from "./components/Repos";
import "./App.css";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(3);

  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const result = await fetch(
        "https://api.github.com/users/AllisonFavour/repos"
      );
      const data = await result.json();
      setRepos(data);
      setFilteredRepos(data);
      setLoading(false);
    };

    fetchRepos();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * reposPerPage;
  const indexOfFirstPost = indexOfLastPost - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo-page" element={<RepoDetails />} />
      </Routes>
    </>
  );
}

export default App;