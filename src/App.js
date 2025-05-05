import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import MainSearchBar from "./Components/MainSearchBar";
import UserProfile from "./Components/UserProfile";
import FeaturedCourse from "./Components/FeaturedCourse";
import LatestExercise from "./Components/LatestExercise";
import MemberReview from "./Components/MemberReview";
import RecommendedWorkout from "./Components/RecommendedWorkouts";
import Footer from "./Components/Footer";
import LoginPage from "./Components/Login/LoginPage";
import SignUpPage from "./Auth/SignUpPage"; // pastikan ini ada
import "./App.css";

// Konten Aplikasi
const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/daftar";

  // Redirect jika belum login
  if (!isLoggedIn && !isLoginPage && !isSignUpPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      {/* Navbar hanya muncul kalau bukan di login atau sign-up */}
      {!isLoginPage && !isSignUpPage && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainSearchBar />
              <UserProfile />
              <FeaturedCourse />
              <div className="section-divider"></div>
              <LatestExercise />
              <div className="section-divider"></div>
              <MemberReview />
              <div className="section-divider"></div>
              <RecommendedWorkout />
            </>
          }
        />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/daftar" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

// Wrapper Router
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cek status login saat pertama kali render
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
