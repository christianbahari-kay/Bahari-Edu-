import React from "react";
import "../Styles/Belajar.css"; // File CSS terbaru

import Champion from "../asset/Champion.jpg";
import Penalaran from "../asset/penalaranumum.jpg";
import Pengetahuan from "../asset/pengetahuanumum.png";
import Bacaan from "../asset/duasiswa.jpg";
import Mtk from "../asset/mtk.png";

const courses = [
    { title: "EDU Champions", img: Champion },
    { title: "Kemampuan Penalaran Umum", img: Penalaran },
    { title: "Pengetahuan dan Pemahaman", img: Pengetahuan },
    { title: "Pemahaman Bacaan dan Menulis", img: Bacaan },
    { title: "Pengetahuan Kuantitatif", img: Mtk }
];

const Belajar = () => {
  return (
    <div className="belajar-container">
      {/* === Judul yang lebih keren === */}
      <h1 className="belajar-title">BELAJAR UTBK DISINI YUKK!!</h1>

      {/* === Grid untuk Kursus === */}
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.img} alt={course.title} className="course-image" />
            <p className="course-title">{course.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Belajar;
