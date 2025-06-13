import React from "react";
import { useParams } from "react-router-dom";
import "../Courses_Web_CSS/LearningPage.css";

const materiContent = {
  matematika: {
    logaritma: {
      title: "Logaritma",
      paragraphs: [
        "Logaritma adalah operasi matematika kebalikan dari eksponen. Jika a^b = c, maka logaritma dari c dengan basis a adalah b. Dengan kata lain, logaritma menjawab pertanyaan 'Pangkat berapa yang harus dipangkatkan pada bilangan pokok agar menghasilkan suatu bilangan tertentu?'",
        "Contohnya: jika 2^3 = 8, maka logaritma 8 dengan basis 2 adalah 3 (log₂ 8 = 3). Logaritma sangat berguna dalam berbagai bidang seperti ilmu komputer, fisika, dan keuangan untuk menyederhanakan perhitungan eksponensial. ",
        
      ],
      video: "https://www.youtube.com/embed/kfkJRI1N-MQ?si=mLktOsU3nCAOoAda"
    },
    persamaan: {
      title: "Persamaan Kuadrat",
      paragraphs: [
        "Persamaan kuadrat adalah persamaan berbentuk ax² + bx + c = 0, dengan a ≠ 0. Nilai-nilai x yang memenuhi persamaan ini disebut akar-akar persamaan kuadrat.",
        "Cara menyelesaikan persamaan kuadrat antara lain dengan pemfaktoran, melengkapkan kuadrat sempurna, dan menggunakan rumus kuadrat. Rumus kuadrat: x = (-b ± √(b² - 4ac)) / 2a."
      ],
      video: "https://www.youtube.com/embed/BVRwGz5-F0U"
    },
    statistika: {
      title: "Statistika",
      paragraphs: [
        "Statistika adalah cabang matematika yang berhubungan dengan pengumpulan, analisis, interpretasi, dan penyajian data.",
        "Statistika sering digunakan untuk membuat keputusan berdasarkan data. Beberapa konsep penting di dalamnya termasuk mean, median, modus, dan standar deviasi."
      ],
      video: "https://www.youtube.com/embed/y3nGP68PJMU?si=nCbpRYb55cBLUxwC"
    },
    integral: {
      title: "Integral",
      paragraphs: [
        "Integral adalah konsep dalam kalkulus yang digunakan untuk menghitung luas di bawah kurva. Integral merupakan operasi invers dari turunan.",
        "Terdapat dua jenis integral: integral tentu (definite) dan tak tentu (indefinite). Integral tentu digunakan untuk menghitung nilai numerik, sedangkan tak tentu digunakan untuk menemukan fungsi asal."
      ],
      video: "https://www.youtube.com/embed/E86ckq8yLUU?si=M7r7KttM5zeuQZHj"
    }
  }
};

const LearningPage = () => {
  const { subjectId, materiId } = useParams();
  const materi = materiContent[subjectId]?.[materiId];

  if (!materi) return <div className="quiz-page"><h2>🚫 Materi tidak ditemukan.</h2></div>;

  return (
    <div className="quiz-page">
      <h1 className="quiz-title">📘 {materi.title}</h1>
      <div className="material-content">
        {materi.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="video-container" style={{ marginTop: "30px" }}>
        <iframe
          width="100%"
          height="400"
          src={materi.video}
          title={materi.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LearningPage;
