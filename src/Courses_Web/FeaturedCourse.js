import React from 'react';
import '../Courses_Web_CSS/FeaturedCourses.css';

const FeaturedCourse = () => {
  return (
    <section className="featured-courses">
      <h2>Featured Courses</h2>
      <p>Explore our top-rated courses</p>
      <button className="view-all">View All</button>
      <div className="courses">
        <div className="course-card">
          <p>Yoga for Beginners</p>
          <p><strong>3 sessions per week</strong></p>
        </div>
        <div className="course-card">
          <p>Strength Training 101</p>
          <p><strong>4 sessions per week</strong></p>
        </div>
        <div className="course-card">
          <p>HIIT Blast</p>
          <p><strong>5 sessions per week</strong></p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
