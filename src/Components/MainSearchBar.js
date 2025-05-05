import React from 'react';
import '../Styles/MainSearchBar.css';

const MainSearchBar = () => {
  return (
    <div className="main-search-container">
    
      <h1 className="subtitle">Pembelajaran Yang Gampang dan Mudah</h1>
      <div className="main-search-box">
        <input type="text" placeholder="Search our Courses, e.g. English" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <p className="not-sure-link"><a href="#">Not Sure Where To Begin?</a></p>
    </div>
  );
};

export default MainSearchBar;
