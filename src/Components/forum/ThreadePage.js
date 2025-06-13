import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";

const ThreadPage = () => {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/forum/thread/${id}`)
      .then(res => res.json())
      .then(data => {
        setThread(data.thread);
        setComments(data.comments);
      });
  }, [id]);

  const handleNewComment = comment => {
    setComments([...comments, comment]);
  };

  if (!thread) return <p>Loading...</p>;

  return (
    <div>
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
      <hr />
      <h3>Komentar:</h3>
      {comments.map(c => (
        <div key={c.id}>
          <strong>{c.author_name}</strong>: {c.content}
        </div>
      ))}
      <AddComment threadId={id} onNewComment={handleNewComment} />
    </div>
  );
};

export default ThreadPage;
