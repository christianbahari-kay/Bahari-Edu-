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

        {/* Halaman Review */}
        <Route path="/review" element={
          <>
            <ReviewSection />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;
