import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const newUser = { name, email, password, role };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Gagal mendaftar');
        return;
      }

      alert(data.message || 'Registrasi berhasil');

      if (role === 'guru') {
        navigate('/dashboard-guru');
      } else if (role === 'murid') {
        navigate('/dashboard-murid');
      } else {
        navigate('/');
      }
    } catch (error) {
      alert('Terjadi kesalahan saat menghubungi server.');
      console.error(error);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h2>Daftar Akun Bahari Edu</h2>
        <form onSubmit={handleSignUp} className="signup-form">
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
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Pilih peran</option>
            <option value="guru">Guru</option>
            <option value="murid">Murid</option>
          </select>
          <button type="submit" className="signup-button">Daftar</button>
        </form>
        <p className="login-redirect">
          Sudah punya akun? <a href="/login">Masuk di sini</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
