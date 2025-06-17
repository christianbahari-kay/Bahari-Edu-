import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCoursePage.css';

const MathematicsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="course-feature-page">
      <h1>🧮 Basic Mathematics</h1>
      <p>
        Matematika dasar merupakan pondasi dari semua cabang ilmu matematika. Di dalamnya termasuk operasi dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian. Selain itu, materi matematika dasar mencakup konsep aljabar, geometri, dan bilangan.
      </p>
      <p>
        Melalui pelajaran ini, kamu akan belajar menyelesaikan soal aritmatika, mengenal bentuk dan ukuran dalam geometri dasar,
        serta memahami logika dan pola dalam angka. Pengetahuan ini sangat penting dalam kehidupan sehari-hari maupun studi lanjutan.
      </p>

      <div className="video-section">
        <h3>🎥 Video Pembelajaran</h3>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/zFZHjJ5x8i4"
            title="Matematika Dasar"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <button
        className="exercise-button"
        onClick={() => navigate('/exercise/mathematics')}
      >
        Mulai Latihan
      </button>
    </div>
  );
};

export default MathematicsPage;
