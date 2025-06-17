import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ForumPage.css";

const ForumPage = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/forum/threads")
      .then(res => res.json())
      .then(data => setThreads(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="forum-wrapper">
      <div className="forum-header">
        <h1 className="forum-title">💬 Forum Diskusi</h1>
        <Link to="/forum/new" className="btn-create-thread">
          + Buat Diskusi Baru
        </Link>
      </div>

      <ul className="thread-list">
        {threads.map((thread) => (
          <li key={thread.id} className="thread-card">
            <Link to={`/forum/thread/${thread.id}`} className="thread-link">
              <div className="thread-title">{thread.title}</div>
              <div className="thread-meta">oleh <span>{thread.author_name}</span></div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ForumPage;
