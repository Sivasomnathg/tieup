// client/src/pages/Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get("/api/profile")
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-card">
        <img src={profile.avatar} alt="Profile" className="avatar" />
        <h3>{profile.name}</h3>
        <p>{profile.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
