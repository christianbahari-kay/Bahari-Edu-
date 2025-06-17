import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCoursePage.css';

const HistoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="course-feature-page">
      <h1>🕰️ History of Civilization</h1>
      <p>
        Sejarah peradaban adalah studi tentang perkembangan masyarakat, budaya, dan sistem sosial manusia dari masa lalu.
        Ilmu ini meliputi zaman kuno seperti Mesopotamia, Mesir, Yunani, Romawi, hingga era modern seperti Revolusi Industri dan Perang Dunia.
      </p>
      <p>
        Dalam pembelajaran ini, kamu akan diajak menyusuri peradaban besar dunia, menelusuri dampak dari penemuan penting,
        perubahan politik dan sosial, serta pelajaran penting dari masa lalu untuk membentuk masa depan yang lebih baik.
      </p>

      <div className="video-section">
        <h3>🎥 Video Pembelajaran</h3>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/DKSkz1kt3-c"
            title="History of Civilization"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <button
        className="exercise-button"
        onClick={() => navigate('/exercise/history')}
      >
        Mulai Latihan
      </button>
    </div>
  );
};

export default HistoryPage;
