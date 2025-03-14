// client/src/pages/Home.js
import React from "react";
import './Home.css';  // Custom styles

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Tie Up: Find Your Match</h1>
        <p>Connect with people who share your interests and values!</p>
        <button className="cta-button">Start Dating</button>
      </header>
    </div>
  );
};

export default Home;
