import React, { useState } from "react";
import "../Courses_Web_CSS/QuizPage.css";
import { useParams } from "react-router-dom";

const sampleQuestions = [
  {
    question: "Hasil dari log₁₀(100) adalah ...",
    options: ["1", "2", "10", "100"],
    answer: "2"
  },
  {
    question: "Jika log₁₀(x) = 3, maka nilai x adalah ...",
    options: ["1000", "100", "10", "3"],
    answer: "1000"
  },
  {
    question: "log₂(8) = ...",
    options: ["2", "3", "4", "8"],
    answer: "3"
  },
  {
    question: "Berapakah nilai log₅(1)?",
    options: ["0", "1", "5", "Tidak bisa ditentukan"],
    answer: "0"
  },
  {
    question: "Jika log₁₀(2) = a dan log₁₀(5) = b, maka log₁₀(10) = ...",
    options: ["a + b", "a × b", "a / b", "a - b"],
    answer: "a + b"
  },
  {
    question: "log₁₀(10⁵) = ...",
    options: ["1", "5", "10", "50"],
    answer: "5"
  },
  {
    question: "log₃(27) = ...",
    options: ["3", "6", "9", "2"],
    answer: "3"
  },
  {
    question: "Berapakah hasil dari log₂(1)?",
    options: ["0", "1", "2", "∞"],
    answer: "0"
  },
  {
    question: "Jika logₐ(b) = c, maka b = ...",
    options: ["a + c", "a - c", "a × c", "aᶜ"],
    answer: "aᶜ"
  },
  {
    question: "Hasil dari log₄(16) adalah ...",
    options: ["2", "4", "8", "1"],
    answer: "2"
  }
];
const QuizPage = () => {
  const { subjectId, quizId } = useParams();
  const [answers, setAnswers] = useState(Array(sampleQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = answers.filter((ans, idx) => ans === sampleQuestions[idx].answer).length;

  return (
    <div className="quiz-page">
      <h1>🧠 {quizId.replace(/-/g, " ")} - {subjectId.toUpperCase()}</h1>
      {sampleQuestions.map((q, idx) => (
        <div key={idx} className="quiz-question">
          <h3>{idx + 1}. {q.question}</h3>
          <div className="options">
            {q.options.map((opt, i) => (
              <button
                key={i}
                className={`option-button ${answers[idx] === opt ? "selected" : ""} ${submitted && opt === q.answer ? "correct" : ""} ${submitted && answers[idx] === opt && opt !== q.answer ? "wrong" : ""}`}
                onClick={() => handleAnswer(idx, opt)}
                disabled={submitted}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button className="submit-button" onClick={handleSubmit}>Selesai</button>
      ) : (
        <div className="score">✅ Skor kamu: {score} / {sampleQuestions.length}</div>
      )}
    </div>
  );
};

export default QuizPage;
