import React from "react";
import { Link } from "react-router-dom"; // Perbaiki Link (huruf besar)
import "../Styles/PromoBanner.css"; // Tambahkan ekstensi .css

const Banner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <span className="badge">LATIHAN SOAL GRATIS!</span>
        <p>
          <strong>
            Mau ujian <span className="highlight">bebas remedial?</span>
          </strong> 
          Yuk, latihan di Drill Soal!
        </p>
      </div>
      
      {/* Gunakan Link agar tombol bisa berpindah halaman */}
      <Link to="/drill-soal" className="promo-button">
        ➜
      </Link>
    </div>
  );
};

export default Banner; // Pastikan baris ini ada!
