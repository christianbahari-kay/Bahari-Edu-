import React from 'react';
import '../Styles/UserProfile.css';

const UserProfile = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div>
          <h2>Deviana</h2>
          <p>Student</p>
        </div>
        <button className="edit-profile">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
