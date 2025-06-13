import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Api/auth';
import { auth, provider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import '../Login/LoginPage.css';
import logo from '../../Gambar/bahari-edu-high-resolution-logo.png';

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const user = await loginUser(email, password);
    console.log("Data user:", user); 
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('email', user.email);
    localStorage.setItem('role', user.role);

    if (user.role === 'guru') navigate('/');
    else navigate('/');
  } catch (error) {
    console.error("Login error:", error); 
    alert(error.message || 'Login gagal');
  }
};


  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

    
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', user.email);
      localStorage.setItem('role', 'murid'); 
      navigate('/dashboard-murid');
    } catch (error) {
      console.error(error);
      alert('Login Google gagal');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-left">
          <h2>Masuk Akun Bahari Edu</h2>
          <p>Sudah terdaftar? Silakan masuk ke akunmu</p>
          <form onSubmit={handleLogin} className="form-container">
            <button type="button" className="google-login" onClick={handleGoogleLogin}>
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
              <input
                type="password"
                placeholder="Masukkan password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login-button">Masuk</button>
            </div>
          </form>
          <p className="register-text">
            Belum punya akun? <a href="/daftar">Ayo daftar baru</a>
          </p>
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
