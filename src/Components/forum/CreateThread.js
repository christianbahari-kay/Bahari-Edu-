import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateThread.css";

const CreateThread = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi tambahan
    if (title.trim().length < 5 || content.trim().length < 10) {
      setErrorMsg("Judul minimal 5 karakter dan isi minimal 10 karakter.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5000/forum/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          user_id: 1, // ← Ganti sesuai user login nanti
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim thread ke server");
      }

      // Redirect ke halaman forum
      navigate("/forum");
    } catch (error) {
      console.error("Gagal kirim thread:", error);
      setErrorMsg("Terjadi kesalahan saat mengirim. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="forum-container">
      <h1 className="forum-title">📝 Buat Diskusi Baru</h1>
      <form onSubmit={handleSubmit} className="forum-form">
        <input
          type="text"
          className="forum-input"
          placeholder="Judul diskusi..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="forum-textarea"
          placeholder="Isi diskusi..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          required
        />
        {errorMsg && <p style={{ color: "red", margin: 0 }}>{errorMsg}</p>}
        <button type="submit" className="forum-button" disabled={loading}>
          {loading ? "Mengirim..." : "🚀 Posting Diskusi"}
        </button>
      </form>
    </section>
  );
};

export default CreateThread;
