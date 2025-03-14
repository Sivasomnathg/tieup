// client/src/pages/Matchmaking.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Matchmaking.css';

const Matchmaking = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get("/api/matches")
      .then(res => setMatches(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="matchmaking-container">
      <h2>Find Your Match</h2>
      <div className="card-container">
        {matches.map((match, index) => (
          <div key={index} className="card">
            <img src={match.avatar} alt={match.name} className="avatar" />
            <h3>{match.name}</h3>
            <p>{match.bio}</p>
            <div className="actions">
              <button className="like">❤️ Like</button>
              <button className="dislike">👎 Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matchmaking;
