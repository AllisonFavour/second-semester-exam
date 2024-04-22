import React from "react";
import { ReactDOM } from "react";
import NavBar from "../components/NavBar";
import "../App.css";
import Repos from "../components/Repos";
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <section className="main-section">
        <h1 className="main-h1">Allison Favour's GitHub Repositories</h1>
        <Link to="/repo-page">
        <button className="ms-btn">Click to see my repo details</button>
        </Link>
      </section>
    
    </>
  )
}

export default Home;