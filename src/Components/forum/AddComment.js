import React, { useState } from "react";

const AddComment = ({ threadId, onNewComment }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/forum/thread/${threadId}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, user_id: 1 }),
    });
    const newComment = await res.json();
    onNewComment(newComment);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Tulis komentar..."
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit">Komentar</button>
    </form>
  );
};

export default AddComment;
