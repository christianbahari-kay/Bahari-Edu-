import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LatestExercises.css';

const courses = [
  {
    title: "Basic Biology",
    description: "Belajar tentang sel, organ, dan kehidupan.",
    image: require('../Picture2/Biology.jpg')
  },
  {
    title: "Basic Chemistry",
    description: "Kenali reaksi kimia dan tabel periodik.",
    image: require('../Picture2/Chem.jpg')
  },
  {
    title: "Basic Geography",
    description: "Pelajari peta, iklim, dan geografi dunia.",
    image: require('../Picture2/Geo.jpg')
  },
  {
    title: "History of Civilization",
    description: "Telusuri peradaban dari zaman kuno.",
    image: require('../Picture2/History.jpg')
  },
  {
    title: "Basic Mathematics",
    description: "Dasar-dasar hitung, aljabar, dan geometri.",
    image: require('../Picture2/Math.jpg')
  },
  {
    title: "Basic Physics",
    description: "Gaya, gerak, dan energi di kehidupan nyata.",
    image: require('../Picture2/Physics.jpg')
  },
];

const LatestExercise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, image } = courses[currentIndex];

  return (
    <section className="latest-exercises">
      <h2>Exercise</h2>
      <p>Try and learn materials with some exercises</p>

      <div className="exercise-wallpaper">
        <div className="exercise-card">
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="dots">
        {courses.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      <button className="explore-btn" onClick={() => navigate('/exercise')}>
        Explore
      </button>
    </section>
  );
};

export default LatestExercise;
