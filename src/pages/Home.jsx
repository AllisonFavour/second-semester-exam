import React from "react";
import { ReactDOM } from "react";
import NavBar from "../components/NavBar";
import "../App.css";
import Repos from "../components/Repos";
import { Link } from 'react-router-dom';
import confetti from "canvas-confetti";

function Home() {
  function addConfetti() {
    confetti({
      particleCount: 100,
    })
  }

  return (
    <>
      <section className="main-section">
        <h1 className="main-h1">Allison Favour's GitHub Repositories</h1>
        <Link to="/repo-page">
        <button onClick={addConfetti} className="ms-btn">Click to see my repo details</button>
        </Link>
      </section>
    
    </>
  )
}

export default Home;