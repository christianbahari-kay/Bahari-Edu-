import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCoursePage.css';

const PhysicsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="course-feature-page">
      <h1>🔬 Basic Physics</h1>
      <p>
        Fisika dasar adalah ilmu yang mempelajari fenomena alam dan prinsip-prinsip dasar yang mengatur gerak, gaya, energi, dan materi di alam semesta. Fisika membantu kita memahami bagaimana benda bergerak dan berinteraksi.
      </p>
      <p>
        Dalam pelajaran ini kamu akan belajar tentang gerak lurus, hukum Newton, energi dan usaha, serta konsep dasar gaya dan massa. Pengetahuan fisika sangat penting untuk memahami teknologi dan fenomena sehari-hari.
      </p>

      <div className="video-section">
        <h3>🎥 Video Pembelajaran</h3>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/gwLQ0QAA9gI"
            title="Physics Intro"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <button
        className="exercise-button"
        onClick={() => navigate('/exercise/physics')}
      >
        Mulai Latihan
      </button>
    </div>
  );
};

export default PhysicsPage;
