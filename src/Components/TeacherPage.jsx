
import React from 'react';
import TeacherProfil from './TeacherProfil';
import Course from '../Courses/Course';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <TeacherProfil />
      <div className="section-divider"></div>
      <Course />
    </div>
  );
};

export default ProfilePage;
