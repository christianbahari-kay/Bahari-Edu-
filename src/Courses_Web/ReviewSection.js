import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Courses_Web_CSS/ReviewSection.css";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Gagal mengambil review:", err));
  }, []);

  return (
    <div className="review-section-container">
      <h1 className="review-section-title">Review Pengguna</h1>

      <div className="review-section-grid">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="review-section-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="review-section-name">{review.name}</h2>
            <p className="review-section-comment">{review.comment}</p>
            <div className="review-section-rating">
              {"⭐".repeat(review.rating || 5)} {/* default 5 jika kolom rating belum ada */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
