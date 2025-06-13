import { Routes, Route } from "react-router-dom";

import SubjectPage from "../Courses_Web/SubjectPage";
import QuizPage from "../Courses_Web/QuizPage";
import QuizPersamaanPage from "../Courses_Web/QuizPersamaanPage";
import LearningPage from "../Courses_Web/LearningPage";
import QuizFisikaPage from "../Courses_Web/QuizFisikaPage";

import Course from "../Courses_Web/course";
import ReviewSection from "../Courses_Web/ReviewSection";

import Profile from"../Components/UserProfil";


const AppRoutes = () => {
  return (
    
     <div className="profile-page">
       <Course />
      <div className="section-divider"></div>
      <ReviewSection/>
      <div className="section-divider"></div>
      <Profile/>
      <SubjectPage/>
      
      <QuizPersamaanPage/>
      <QuizFisikaPage/>
      <LearningPage/>
    
    </div>
  );
};

export default AppRoutes;
