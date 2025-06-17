// src/Components/CourseFeature/GeographyPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCoursePage.css';

const GeographyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="course-feature-page">
      <h1>🌍 Basic Geography</h1>
      <p>
        Geografi adalah ilmu yang mempelajari permukaan bumi, fenomena alam, dan interaksi manusia dengan lingkungan. Pelajaran ini membantu kita memahami bagaimana bumi terbentuk, berubah, dan bagaimana manusia beradaptasi dengan berbagai kondisi geografis.
      </p>
      <p>
        Kamu akan belajar tentang peta, iklim, wilayah benua dan samudra, hingga bentuk permukaan bumi seperti gunung, lembah, dan dataran. Ini penting untuk memahami dinamika ruang dan lokasi dalam kehidupan sehari-hari.
      </p>

      <div className="video-section">
        <h3>🎥 Video Pembelajaran</h3>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/GGHp1ZPJZbE"
            title="Geography Intro"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <button
        className="exercise-button"
        onClick={() => navigate('/exercise/geography')}
      >
        Mulai Latihan
      </button>
    </div>
  );
};

export default GeographyPage;
