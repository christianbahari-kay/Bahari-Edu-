import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile');
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div>
          <h2>Deviana</h2>
          <p>Student</p>
        </div>
        <button className="edit-profile" onClick={handleEditClick}>
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
