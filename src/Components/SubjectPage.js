import React from "react";
import { useParams, Link } from "react-router-dom";
import "../Styles/SubjectPage.css";

const subjectContents = {
  matematika: {
    title: "Matematika",
    videos: [
      { title: "Logaritma Dasar", url: "https://www.youtube.com/embed/kfkJRI1N-MQ" },
      { title: "Persamaan Kuadrat", url: "https://www.youtube.com/embed/ggQwV3WBCjM?si=eOByzd9d5J_Kmh0z" }
    ],
    quizzes: [
      { title: "Kuis Logaritma", link: "/quiz/matematika/logaritma" },
      { title: "Kuis Persamaan", link: "/quiz/persamaan" }  
    ],
    materials: ["Logaritma", "Persamaan Kuadrat", "Statistika", "Integral"]
  },
  biologi: {
    title: "Biologi",
    videos: [
      { title: "Sel dan Organ", url: "https://www.youtube.com/embed/-1iU8EKV6iY?si=1nHuKCOy27rNfUG7" }
    ],
    quizzes: [
      { title: "Kuis Sel", link: "/quiz/biologi/sel" }
    ],
    materials: ["Sel", "Jaringan", "Sistem Organ", "Genetika"]
  },
  fisika: {
    title: "Fisika",
    videos: [
      { title: "Gerak Lurus", url: "https://www.youtube.com/embed/3YCRAse9irs?si=6drkHvroJT3tVPFe" }
    ],
    quizzes: [
      { title: "Kuis Gerak", link: "/quiz/fisika/gerak" }
    ],
    materials: ["Gerak Lurus", "Energi", "Usaha dan Daya", "Hukum Newton"]
  }
};

const SubjectPage = () => {
  const { subjectId } = useParams();
  const subject = subjectContents[subjectId];

  if (!subject) {
    return (
      <div className="subject-page">
        <h2>🚫 Mata pelajaran tidak ditemukan.</h2>
      </div>
    );
  }

  return (
    <div className="subject-page">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ← Kembali
        </button>
        <h1 className="subject-title-main">📘 {subject.title}</h1>
      </div>

      <section className="materials-section">
        <h2 className="section-heading">📖 Materi Pembelajaran</h2>
        <div className="card-list">
          {subject.materials.map((mat, idx) => (
            <Link
              to={`/learning/${subjectId}/${mat.toLowerCase().replace(/\s+/g, "-")}`}
              className="card-item material-card"
              key={idx}
            >
              📘 {mat}
            </Link>
          ))}
        </div>
      </section>

      <section className="video-section">
        <h2 className="section-heading">🎥 Video Pembelajaran</h2>
        <div className="video-grid">
          {subject.videos.map((vid, idx) => (
            <div key={idx} className="video-card">
              <div className="video-frame">
                <iframe
                  width="100%"
                  height="220"
                  src={vid.url}
                  title={vid.title}
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="video-title">🎬 {vid.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="quiz-section">
        <h2 className="section-heading">📝 Quiz Interaktif</h2>
        <div className="card-list">
          {subject.quizzes.map((quiz, idx) => (
            <Link to={quiz.link} className="quiz-link card-item quiz-card" key={idx}>
              🧠 {quiz.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SubjectPage;
