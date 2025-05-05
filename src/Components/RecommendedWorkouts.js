import React from 'react';
import '../Styles/RecommendedWorkouts.css';

const RecommendedWorkouts = () => {
  return (
    <section className="recommended-workouts">
      <h2>Recommended Workouts</h2>
      <button className="start-now">Start Now</button>
      <div className="workout-list">
        <div className="workout-card">Strength Training - Intermediate</div>
        <div className="workout-card">Weightlifting - Advanced</div>
      </div>
    </section>
  );
};

export default RecommendedWorkouts;
