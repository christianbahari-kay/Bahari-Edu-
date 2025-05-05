import React from 'react';
import '../Styles/LatestExercises.css';

const LatestExercise = () => {
  return (
    <section className="latest-exercises">
      <h2>Latest Exercises</h2>
      <button className="explore">Explore</button>
      <div className="exercise-list">
        <div className="exercise-card">Morning Stretch</div>
        <div className="exercise-card">Core Strength🏋</div>
        <div className="exercise-card">Flexibility Flow</div>
      </div>
    </section>
  );
};

export default LatestExercise;
