import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ThreadDetail.css";

const ThreadDetail = () => {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const userId = 1; // Ganti dengan ID user login sebenarnya

  useEffect(() => {
    // Ambil data thread
    fetch(`http://localhost:5000/forum/threads/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Thread tidak ditemukan");
        }
        return res.json();
      })
      .then((data) => {
        setThread(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil detail thread:", err);
        setErrorMsg("Thread tidak ditemukan atau terjadi kesalahan.");
        setLoading(false);
      });

    // Ambil komentar
    fetch(`http://localhost:5000/forum/thread/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Gagal ambil komentar:", err));
  }, [id]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/forum/thread/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newComment, user_id: userId }),
    });

    if (res.ok) {
      const result = await res.json();
      setComments([...comments, { id: result.id, content: newComment, author_name: "Kamu" }]);
      setNewComment("");
    }
  };

  if (loading) return <p className="thread-loading">Loading...</p>;
  if (errorMsg) return <p className="thread-error">{errorMsg}</p>;

  return (
    <section className="thread-detail">
      <h2>{thread.title}</h2>
      <p className="thread-meta">
        <strong>Oleh:</strong> {thread.author_name}
      </p>
      <div className="thread-content">{thread.content}</div>

      <div className="comment-section">
        <h3>Komentar</h3>
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.author_name}:</strong> {comment.content}
            </li>
          ))}
        </ul>

        <form className="comment-form" onSubmit={handleSubmitComment}>
          <textarea
            placeholder="Tulis komentar..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
            required
          />
          <button type="submit">Kirim Komentar</button>
        </form>
      </div>

      <Link to="/forum" className="back-to-forum">
        ← Kembali ke Forum
      </Link>
    </section>
  );
};

export default ThreadDetail;
