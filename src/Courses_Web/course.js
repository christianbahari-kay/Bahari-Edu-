import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Courses_Web_CSS/course.css";

import Biologi from "../asset/biologi.jpeg";
import Mtk from "../asset/mtk.png";
import OrangBelajar from "../asset/orangbelaajr.jpg";
import Duasiswa from "../asset/duasiswa.jpg";

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Biologi Dasar",
      img: Biologi,
      desc: "Pelajari dasar-dasar biologi dengan mudah!",
      badge: "Terpopuler",
      details: ["Sel dan Jaringan", "Sistem Organ", "Genetika Dasar"]
    },
    {
      id: 2,
      title: "Aljabar",
      img: Mtk,
      desc: "Penggunaan aljabar dengan mudah!",
      badge: "Baru",
      details: ["Persamaan Linear", "Fungsi dan Grafik", "Faktorisasi"]
    },
    {
      id: 3,
      title: "Perhitungan",
      img: OrangBelajar,
      desc: "Perhitungan adalah materi yang menyenangkan!",
      details: ["Penjumlahan & Pengurangan", "Perkalian & Pembagian"]
    },
    {
      id: 4,
      title: "Interaksi Antar Sesama",
      img: Duasiswa,
      desc: "Ayo belajar berinteraksi dengan teman kita!",
      details: ["Empati & Simpati", "Komunikasi Sehat", "Etika Sosial"]
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const toggleCourseDetails = (id) => {
    setSelectedCourse(selectedCourse === id ? null : id);
  };

  return (
    <div className="course-container">
      <h2 className="course-title">Rekomendasi Materi</h2>
      <div className="course-highlight">
        <span className="typewriter">📚 “Belajar adalah investasi terbaik untuk masa depan!” 🚀</span>
      </div>

      <Slider {...settings}>
        {courses.map(course => (
          <div key={course.id} className="course-card">
            {course.badge && <span className="course-badge">{course.badge}</span>}
            <img src={course.img} alt={course.title} className="course-image" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>

              <button
                className="course-button"
                onClick={() => toggleCourseDetails(course.id)}
              >
                {selectedCourse === course.id ? "Tutup Materi" : "Lihat Materi"}
              </button>

              {selectedCourse === course.id && (
                <ul className="course-detail-list">
                  {course.details.map((item, index) => (
                    <li key={index}>📘 {item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Course;
