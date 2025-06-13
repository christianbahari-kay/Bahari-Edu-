import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Styles/FeaturedCourses.css';

const courses = [
  { title: "Basic Biology", image: require('../Picture2/Biology.jpg') },
  { title: "Basic Chemistry", image: require('../Picture2/Chem.jpg') },
  { title: "Basic Geography", image: require('../Picture2/Geo.jpg') },
  { title: "History of Civilization", image: require('../Picture2/History.jpg') },
  { title: "Basic Mathematics", image: require('../Picture2/Math.jpg') },
  { title: "Basic Physics", image: require('../Picture2/Physics.jpg') },
];

const FeaturedCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(courses.length / 3);
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="featured-courses">
      <h2>Featured Courses</h2>
      <p>Explore our foundational learning materials</p>

      <div className="slider-box"> {}
        <div className="slider-wrapper">
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const start = slideIndex * 3;
            const visibleCourses = courses.slice(start, start + 3);
            return (
              <div
                className={`fade-slide ${currentIndex === slideIndex ? 'active' : ''}`}
                key={slideIndex}
              >
                {visibleCourses.map((course, index) => (
                  <div className="course-card" key={index}>
                    <img src={course.image} alt={course.title} />
                    <p>{course.title}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>

      <button className="explore-btn" onClick={() => navigate('/courses')}>
        Explore
      </button>
    </section>
  );
};

export default FeaturedCourses;
