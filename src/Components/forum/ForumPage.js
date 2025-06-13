import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ForumPage = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/forum/threads")
      .then(res => res.json())
      .then(data => setThreads(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Forum Diskusi</h2>
      <Link to="/forum/new">+ Buat Diskusi Baru</Link>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            <Link to={`/forum/thread/${thread.id}`}>
              <strong>{thread.title}</strong> oleh {thread.author_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumPage;
