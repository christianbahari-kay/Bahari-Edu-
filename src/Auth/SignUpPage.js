import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const newUser = { name, email, password, role };
    // Simpan data di localStorage (sementara)
    localStorage.setItem('userData', JSON.stringify(newUser));

    alert('Pendaftaran berhasil!');
    navigate('/login');
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h2>Daftar Akun Bahari Edu</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Nama lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Pilih peran</option>
            <option value="guru">Guru</option>
            <option value="murid">Murid</option>
          </select>
          <button type="submit" className="signup-button">Daftar</button>
        </form>
        <p className="login-redirect">Sudah punya akun? <a href="/login">Masuk di sini</a></p>
      </div>
    </div>
  );
}

export default SignUpPage;
