// src/Components/CourseFeature/ChemistryPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCoursePage.css';

const ChemistryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="course-feature-page">
      <h1>🧪 Basic Chemistry</h1>
      <p>
        Kimia adalah cabang ilmu yang mempelajari zat, struktur, sifat, dan perubahan yang dialaminya selama reaksi kimia.
        Kimia memainkan peran penting dalam berbagai aspek kehidupan sehari-hari, mulai dari industri hingga tubuh manusia.
      </p>
      <p>
        Dalam pelajaran ini, kamu akan mengenal dasar-dasar atom, molekul, tabel periodik, ikatan kimia, serta reaksi kimia sederhana.
        Video di bawah ini akan membantu kamu memahami konsep dasar kimia secara visual dan mudah dimengerti.
      </p>

      <div className="video-section">
        <h3>🎥 Video Pembelajaran</h3>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/0RRVV4Diomg"
            title="Chemistry Intro"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <button className="exercise-button" onClick={() => navigate('/exercise/chemistry')}>
        Mulai Latihan Kimia
      </button>
    </div>
  );
};

export default ChemistryPage;
