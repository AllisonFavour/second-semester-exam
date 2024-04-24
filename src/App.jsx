import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepoDetails from "./pages/RepoDetails";
import Repos from "./components/Repos";
import "./App.css";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";

function App() {


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