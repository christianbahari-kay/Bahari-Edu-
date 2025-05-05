import React from 'react';
import '../Styles/MemberReviews.css';

const MemberReview = () => {
  return (
    <section className="member-reviews">
      <h2>Member Reviews</h2>
      <button className="write-review">Write a Review</button>
      <div className="reviews">
        <div className="review-card">John Smith - Great platform</div>
        <div className="review-card">Sarah Johnson - Highly recommend</div>
        <div className="review-card">David Brown - Helped me stay fit</div>
      </div>
    </section>
  );
};

export default MemberReview;
