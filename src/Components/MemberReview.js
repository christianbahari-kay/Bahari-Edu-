import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../Styles/MemberReviews.css';
import { useNavigate } from 'react-router-dom';

const MemberReview = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Gagal ambil review:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    });

    if (res.ok) {
      setReviews([{ ...newReview }, ...reviews]); // tambah ke list lokal
      setNewReview({ name: '', comment: '' });
    }
  };

  return (
    <section className="member-reviews">
      <h2>Member Reviews</h2>

      <Slider {...settings} className="review-carousel">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p><strong>{review.name}</strong></p>
            <p>{review.comment}</p>
          </div>
        ))}
      </Slider>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Komentar"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          required
        />
        <button type="submit">Kirim Review</button>
      </form>

      <button className="explore" onClick={() => navigate('/review')}>
        Explore
      </button>
    </section>
  );
};

export default MemberReview;
