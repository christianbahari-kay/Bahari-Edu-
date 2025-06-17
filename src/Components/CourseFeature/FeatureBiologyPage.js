
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCoursePage.css';


const BiologyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="course-feature-page">
      <h1>Biology Course</h1>
      <p>
        Biologi adalah ilmu yang mempelajari makhluk hidup dan kehidupannya, mulai dari struktur, fungsi, pertumbuhan, hingga evolusi.
        Ilmu ini membantu kita memahami diri sendiri, lingkungan, serta berbagai organisme lain.
      </p>
      <p>
        Dalam pelajaran ini kamu akan mempelajari tentang struktur sel, genetika, sistem organ, dan interaksi antar makhluk hidup.
        Video pembelajaran berikut akan membantumu memahami konsep dasar biologi secara visual.
      </p>

      <div className="video-frame">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/zsQuxnq_Pv8"
          title="Biology Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <button className="exercise-button" onClick={() => navigate('/exercise/biology')}>
        Mulai Latihan Biologi
      </button>
    </div>
  );
};

export default BiologyPage;
