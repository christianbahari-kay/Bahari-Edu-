import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserProfile from "./Components/UserProfile";
import FeaturedCourse from "./Components/FeaturedCourse";
import LatestExercise from "./Components/LatestExercise";
import MemberReview from "./Components/MemberReview";
import RecommendedWorkout from "./Components/RecommendedWorkouts";
import Footer from "./Components/Footer";
import Course from "./Components/course";
import Banner from "./Components/Banner";
import Belajar from "./Components/Belajar";
import SubjectSelection from "./Components/SubjectSelection";
import ReviewSection from "./Components/ReviewSection"; // Tambahkan ini
import ProfilePage from "./Components/ProfilePage";
import SubjectPage from "./Components/SubjectPage";
import QuizPage from "./Components/QuizPage";
import QuizPersamaanPage from "./Components/QuizPersamaanPage";
import LearningPage from "./Components/LearningPage";
import QuizFisikaPage from "./Components/QuizFisikaPage";



import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={
          <>
            <UserProfile />
            <FeaturedCourse />
            <div className="section-divider"></div>
            
            {/* Promo Banner di halaman utama */}
            <Banner />

            <div className="section-divider"></div>
            <LatestExercise />
            <div className="section-divider"></div>
            <MemberReview />
            <div className="section-divider"></div>
            <RecommendedWorkout />
            <div className="section-divider"></div>
            <Footer />
          </>
        } />

        {/* Halaman Course dengan PromoBanner */}
        <Route path="/course" element={
          <>
            <UserProfile />
            <SubjectSelection />
            <Course />
            <FeaturedCourse />
            <Banner /> 
            <Belajar />
            <LatestExercise />
            <Footer />
          </>
        } />


        {/*halaman detail materi*/}
        <Route path="/course/:id" element={<Course />} />
        {/* Halaman Review */}
        <Route path="/review" element={
          <>
            <ReviewSection />
            <Footer />
          </>
        } />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />

        {/*quiz page*/}
        <Route path="/quiz/:subjectId/:quizId" element={<QuizPage />} />
        <Route path="/quiz/persamaan" element={<QuizPersamaanPage />} />
        <Route path="/quiz/fisika/gerak" element={<QuizFisikaPage />} />
        


        {/*Materi page*/}
        <Route path="/learning/:subjectId/:materiId" element={<LearningPage />} />
        <Route path="/subject/:subjectId/materi/:materialId" element={<LearningPage />} />


        

      </Routes>
    </div>
  );
};

export default App;
