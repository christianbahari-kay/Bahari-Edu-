import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import UserProfile from "./Components/UserProfile";
import Courses from "./Components/Courses";
// import LatestExercise from "./Components/LatestExercise";
// import MemberReview from "./Components/MemberReview";
// import RecommendedWorkout from "./Components/RecommendedWorkouts";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>

      <UserProfile />

      {<Courses /> 

      // <div className="section-divider"></div>
      // <Courses />
      /*
      <div className="section-divider"></div>
      <Courses />

      /*
      <div className="section-divider"></div>
      <MemberReview />

      <div className="section-divider"></div>
      <RecommendedWorkout />*/
      }

      <div className="section-divider"></div>
      <Footer />
    </div>
  );
};

export default App;
