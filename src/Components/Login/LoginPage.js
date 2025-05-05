import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/LoginPage.css';
import logo from '../../Gambar/bahari-edu-high-resolution-logo.png';

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-left">
          <h2>Masuk Akun Bahari Edu</h2>
          <p>Sudah terdaftar? Silakan masuk ke akunmu</p>
          <form onSubmit={handleSubmit}>
            <button type="button" className="google-login">
            
              Masuk dengan Akun Google
            </button>
            <p className="or-text">atau</p>
            <div className="email-login">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="login-button">Masuk</button>
            </div>
          </form>
          <p className="register-text">Belum punya akun? <a href="/daftar">Ayo daftar baru</a></p>
        </div>
        <div className="login-right">
        <img src={logo} alt="Logo Bahari Edu" />
          <h2>Masuk</h2>
        </div>
      </div>
    </div>
  );
  
}

export default LoginPage;
