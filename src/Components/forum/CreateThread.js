import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateThread.css'

const CreateThread = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch("http://localhost:5000/forum/threads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        user_id: 1 // Ganti sesuai user yang login
      }),
    });
    navigate("/forum");
  };

  return (
    <div>
      <h2>Buat Thread Baru</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul diskusi"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Isi diskusi"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">Posting</button>
      </form>
    </div>
  );
};

export default CreateThread;
