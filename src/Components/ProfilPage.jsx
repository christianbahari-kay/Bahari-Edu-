
import React from 'react';
import Profil from './UserProfil';
import Course from '../Courses/Course';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Profil />
      <div className="section-divider"></div>
      <Course />
    </div>
  );
};

export default ProfilePage;
