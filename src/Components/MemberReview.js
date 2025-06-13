import React from 'react';
import Slider from 'react-slick';
import '../Styles/MemberReviews.css';
import { useNavigate } from 'react-router-dom';

const reviews = [
  { name: 'John Sabas', comment: 'Great platform' },
  { name: 'Sarah Johnson', comment: 'Highly recommend' },
  { name: 'David Brown', comment: 'Helped me stay fit' },
  
];

const MemberReview = () => {
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

  return (
    <section className="member-reviews">
      <h2>Member Reviews</h2>
     
      <br/>
      <Slider {...settings} className="review-carousel">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p><strong>{review.name}</strong></p>
            <p>{review.comment}</p>
          </div>
        ))}
      </Slider>
       <button className="explore" onClick={() => navigate('/review')}>
        Explore
      </button>
    </section>
  );
};

export default MemberReview;
