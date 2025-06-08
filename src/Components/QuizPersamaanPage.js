import React, { useState } from "react";
import "../Styles/QuizPage.css";

const quizPersamaan = [
  {
    question: "Berapakah akar-akar dari x² - 5x + 6 = 0?",
    options: ["x = 2 dan x = 3", "x = -2 dan x = -3", "x = 1 dan x = 6", "x = 0 dan x = 5"],
    answer: "x = 2 dan x = 3"
  },
  {
    question: "Penyelesaian dari persamaan x² = 49 adalah ...",
    options: ["x = 7", "x = -7", "x = ±7", "x = 0"],
    answer: "x = ±7"
  },
  {
    question: "Persamaan garis lurus yang melalui titik (0, 2) dan memiliki gradien 3 adalah ...",
    options: ["y = 3x + 2", "y = 2x + 3", "y = 3x - 2", "y = 2x - 3"],
    answer: "y = 3x + 2"
  },
  {
    question: "Jika x² - 4x + c = 0 memiliki akar kembar, maka nilai c adalah ...",
    options: ["2", "4", "1", "0"],
    answer: "4"
  },
  {
    question: "Berapakah jumlah akar-akar dari x² - 6x + 8 = 0?",
    options: ["8", "6", "4", "2"],
    answer: "6"
  },
  {
    question: "Salah satu akar dari persamaan x² - x - 6 = 0 adalah ...",
    options: ["-3", "2", "3", "-2"],
    answer: "3"
  },
  {
    question: "Bentuk umum persamaan kuadrat adalah ...",
    options: ["ax + b = 0", "ax² + bx + c = 0", "ax² + b = 0", "ax² = bx + c"],
    answer: "ax² + bx + c = 0"
  },
  {
    question: "Hasil diskriminan dari x² - 6x + 9 = 0 adalah ...",
    options: ["0", "9", "36", "18"],
    answer: "0"
  },
  {
    question: "Gradien dari garis y = -2x + 5 adalah ...",
    options: ["-2", "2", "5", "-5"],
    answer: "-2"
  },
  {
    question: "Berapakah hasil dari substitusi x = 1 ke dalam y = 2x + 3?",
    options: ["5", "3", "1", "2"],
    answer: "5"
  }
];

const QuizPersamaanPage = () => {
  const [answers, setAnswers] = useState(Array(quizPersamaan.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = answers.filter((ans, idx) => ans === quizPersamaan[idx].answer).length;

  return (
    <div className="quiz-page">
      <h1 className="quiz-title">🧮 Kuis Persamaan</h1>

      {quizPersamaan.map((q, idx) => (
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
        <div className="score">✅ Skor kamu: {score} / {quizPersamaan.length}</div>
      )}
    </div>
  );
};

export default QuizPersamaanPage;
