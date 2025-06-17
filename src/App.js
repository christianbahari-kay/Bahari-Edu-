import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";


import Navbar from "./Components/Navbar";
import MainSearchBar from "./Components/MainSearchBar";
import FeaturedCourse from "./Components/FeaturedCourse";
import LatestExercise from "./Components/LatestExercise";
import MemberReview from "./Components/MemberReview";


import ProfilePage from "./Components/ProfilPage"; 
import Teacher from "./Components/TeacherPage"
import Exercise from "./Components/Exercise"
import LoginPage from "./Components/Login/LoginPage";
import SignUpPage from "./Auth/SignUpPage";
import ReviewPage from "./Components/ReviewPage"; 
import Footer from "./Components/Footer";


import Course from "./Courses_Web/course";
import Banner from "./Courses_Web/Banner";
import Belajar from "./Courses_Web/Belajar";
import SubjectSelection from "./Courses_Web/SubjectSelection";
import SubjectPage from "./Courses_Web/SubjectPage";
import QuizPage from "./Courses_Web/QuizPage";
import QuizPersamaanPage from "./Courses_Web/QuizPersamaanPage";
import LearningPage from "./Courses_Web/LearningPage";
import QuizFisikaPage from "./Courses_Web/QuizFisikaPage";


import ReviewSection from "./Courses_Web/ReviewSection";
import ForumPage from "./Components/forum/ForumPage";
import CreateThread from "./Components/forum/CreateThread";
import ThreadDetail from "./Components/forum/ThreadDetail";


import ExerciseBiology from "./Components/Exercise/ExerciseBiology";
import ExerciseChemistry from './Components/Exercise/ExerciseChemistry';
import ExerciseGeography from "./Components/Exercise/ExerciseGeography";
import ExerciseHistory from "./Components/Exercise/ExerciseHistory";
import ExercisePhysics from "./Components/Exercise/ExercisePhysics";
import ExerciseMath from "./Components/Exercise/ExerciseMath";

import BiologyPage from "./Components/CourseFeature/FeatureBiologyPage"
import ChemistryPage from "./Components/CourseFeature/ChemistryPage";
import GeographyPage from "./Components/CourseFeature/GeographyPage";
import HistoryPage from './Components/CourseFeature/HistoryPage';
import MathematicsPage from './Components/CourseFeature/MathematicsPage';
import PhysicsPage from './Components/CourseFeature/PhysicsPage';


import "./App.css";


const HomePage = () => (
  <>
    <MainSearchBar />
    <FeaturedCourse />
    <div className="section-divider"></div>
    <LatestExercise />
    <div className="section-divider"></div>
    <MemberReview />
  </>
);

const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/daftar";

  
  if (!isLoggedIn && !isLoginPage && !isSignUpPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {!isLoginPage && !isSignUpPage && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/daftar" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/course" element={
          <>
            <SubjectSelection />
            <Course />
            <FeaturedCourse />
            <Banner /> 
            <Belajar />
            <SubjectPage/>
            
          </>
        } />
        <Route path="/exercise" element={<Exercise />} />

         {/*halaman detail materi*/}
        <Route path="/course/:id" element={<Course />} />
        {/* Halaman Review */}
        <Route path="/review" element={
          <>
            <ReviewSection />
            <MemberReview />
            <Footer />
          </>
        } />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />

        {/*quiz page*/}
        <Route path="/quiz/:subjectId/:quizId" element={<QuizPage />} />
        <Route path="/quiz/persamaan" element={<QuizPersamaanPage />} />
        <Route path="/quiz/fisika/gerak" element={<QuizFisikaPage />} />
        <Route path="/exercise/biology" element={<ExerciseBiology />} />
        <Route path="/exercise/chemistry" element={<ExerciseChemistry />} />
        <Route path="/exercise/geography" element={<ExerciseGeography />} />
        <Route path="/exercise/history" element={<ExerciseHistory />} />
        <Route path="/exercise/physics" element={<ExercisePhysics />} />  
       <Route path="/exercise/mathematics" element={<ExerciseMath />} />

        {/*Feature Page*/}
        <Route path="/CourseFeature/biology" element={<BiologyPage />} />
        <Route path="/CourseFeature/chemistry" element={<ChemistryPage />} />
        <Route path="/CourseFeature/history" element={<HistoryPage />} />
        <Route path="CourseFeature/geography" element={<GeographyPage />} />
        <Route path="/CourseFeature/mathematics" element={<MathematicsPage />} />
        <Route path="/CourseFeature/physics" element={<PhysicsPage />} />
        



        {/*Materi page*/}
        <Route path="/learning/:subjectId/:materiId" element={<LearningPage />} />
        <Route path="/subject/:subjectId/materi/:materialId" element={<LearningPage />} />
        


        {/*Forum Page*/}
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/forum/new" element={<CreateThread />} />
        <Route path="/forum/thread/:id" element={<ThreadDetail />} />
        
        <Route path="/review" element={<ReviewPage />} />
      </Routes>

      {!isLoginPage && !isSignUpPage && <Footer />}
    </>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(status);
  }, []);

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};

export default App;
