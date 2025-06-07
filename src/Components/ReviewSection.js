import React from "react";
import { motion } from "framer-motion";
import "../Styles/ReviewSection.css";

const reviews = [
  {
    name: "Ahmad Syahrul",
    comment: "Aplikasi ini sangat membantu saya dalam belajar.",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    comment: "Sangat bermanfaat! Semoga ada fitur tambahan di masa depan.",
    rating: 4,
  },
  {
    name: "Budi Santoso",
    comment: "Desainnya menarik dan mudah digunakan.",
    rating: 5,
  },
];

const ReviewSection = () => {
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
              {"⭐".repeat(review.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
