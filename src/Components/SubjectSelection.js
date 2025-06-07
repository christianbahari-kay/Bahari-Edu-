import React, { useState } from "react";
import "../Styles/Subjects.css";

const subjects = {
  IPA: ["Matematika", "Fisika", "Kimia", "Biologi"],
  IPS: ["Ekonomi", "Geografi", "Sejarah", "Sosiologi"],
  Bahasa: ["Bahasa Indonesia", "Bahasa Inggris", "Sastra", "Antropologi"]
};

const SubjectSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState("IPA");
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="subject-container">
      <h1 className="subject-title">Pilih Pelajaran SMA Favoritmu!</h1>

      {/* Kategori Tab */}
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

      {/* List Pelajaran */}
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

      {/* Modal */}
      {selectedSubject && (
        <div className="modal-overlay" onClick={() => setSelectedSubject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedSubject}</h2>
            <p>Materi tentang {selectedSubject} akan ditampilkan di sini.</p>
            <button className="close-button" onClick={() => setSelectedSubject(null)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectSelection;
