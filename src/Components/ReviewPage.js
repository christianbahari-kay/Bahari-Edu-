import React, { useState, useEffect } from 'react';
import '../Styles/ReviewPage.css';

const ReviewPage = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  // Ambil review dari server
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Gagal ambil review:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return alert('Mohon isi semua field');

    const res = await fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), comment: comment.trim() }),
    });

    if (res.ok) {
      const result = await res.json();
      setReviews([{ name: result.name, comment: result.comment }, ...reviews]);
      setName('');
      setComment('');
    } else {
      alert('Gagal mengirim review');
    }
  };

  return (
    <div className="review-page">
      <h2>Bagikan Pendapatmu</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Komentar"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Kirim Review</button>
      </form>

      <div className="submitted-reviews">
        <h3>Review Pengguna</h3>
        {reviews.length === 0 ? (
          <p>Belum ada review.</p>
        ) : (
          reviews.map((review, idx) => (
            <div key={idx} className="submitted-review-card">
              <strong>{review.name}</strong>
              <p>{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
