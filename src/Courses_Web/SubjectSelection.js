import React, { useState } from "react";
import "../Courses_Web_CSS/subject.css";
import { useNavigate } from "react-router-dom";

const subjects = {
  IPA: ["Matematika", "Fisika", "Kimia", "Biologi"],
  IPS: ["Ekonomi", "Geografi", "Sejarah", "Sosiologi"],
  Bahasa: ["Bahasa Indonesia", "Bahasa Inggris", "Sastra & Budaya", "Antropologi"]
};

const subjectSlugMap = {
  "Matematika": "matematika",
  "Fisika": "fisika",
  "Kimia": "kimia",
  "Biologi": "biologi",
  "Ekonomi": "ekonomi",
  "Geografi": "geografi",
  "Sejarah": "sejarah",
  "Sosiologi": "sosiologi",
  "Bahasa Indonesia": "bahasa-indonesia",
  "Bahasa Inggris": "bahasa-inggris",
  "Sastra & Budaya": "sastra-budaya",
  "Antropologi": "antropologi"
};

const SubjectSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState("IPA");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="subject-container">
      <h1 className="subject-title">📘 Pilih Pelajaran Favoritmu</h1>

      <div className="category-tabs">
        {Object.keys(subjects).map((category) => (
          <button
            key={category}
            className={`tab-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="subject-grid">
        {subjects[selectedCategory].map((subject, index) => (
          <div
            key={index}
            className="subject-card"
            onClick={() => setSelectedSubject(subject)}
          >
            <p>{subject}</p>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="modal-overlay" onClick={() => setSelectedSubject(null)}>
          <div className="modal-content styled-modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedSubject}</h2>
            <p>
              Pelajari lebih dalam materi <strong>{selectedSubject}</strong> lengkap dengan video dan kuis interaktif.
            </p>
            <div className="modal-buttons">
              <button
                className="btn primary"
                onClick={() => {
                  const slug = subjectSlugMap[selectedSubject];
                  if (slug) {
                    navigate(`/subject/${slug}`);
                  } else {
                    alert("Halaman materi belum tersedia.");
                  }
                }}
              >
                🚀 Mulai Belajar
              </button>
              <button
                className="btn danger"
                onClick={() => setSelectedSubject(null)}
              >
                ✖ Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectSelection;
