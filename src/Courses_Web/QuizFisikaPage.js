import React, { useState } from "react";
import "../Courses_Web_CSS/QuizPage.css";
import { useParams } from "react-router-dom";

const fisikaQuestions = [
  {
    question: "Apa satuan SI untuk gaya?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: "Newton"
  },
  {
    question: "Apa hukum pertama Newton?",
    options: [
      "Gaya = massa x percepatan",
      "Setiap aksi memiliki reaksi yang sama dan berlawanan",
      "Benda tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja padanya",
      "Energi tidak dapat diciptakan atau dimusnahkan"
    ],
    answer: "Benda tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja padanya"
  },
  {
    question: "Apa yang dimaksud dengan percepatan?",
    options: [
      "Perubahan kecepatan per satuan waktu",
      "Jarak dibagi waktu",
      "Jumlah gaya yang bekerja",
      "Kecepatan dikali waktu"
    ],
    answer: "Perubahan kecepatan per satuan waktu"
  },
  {
    question: "Apa rumus dari kecepatan?",
    options: ["v = s / t", "v = a / t", "v = m / a", "v = E / t"],
    answer: "v = s / t"
  },
  {
    question: "Energi kinetik bergantung pada...",
    options: ["Gaya dan percepatan", "Massa dan kecepatan", "Jarak dan waktu", "Tegangan dan arus"],
    answer: "Massa dan kecepatan"
  }
];

const QuizFisikaPage = () => {
  const { subjectId, quizId } = useParams();
  const [answers, setAnswers] = useState(Array(fisikaQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = answers.filter((ans, idx) => ans === fisikaQuestions[idx].answer).length;

  return (
    <div className="quiz-page">
      <h1>🧠 {quizId?.replace(/-/g, " ")} - {subjectId?.toUpperCase()}</h1>
      {fisikaQuestions.map((q, idx) => (
        <div key={idx} className="quiz-question">
          <h3>{idx + 1}. {q.question}</h3>
          <div className="quiz-options">
            {q.options.map((opt, i) => (
              <button
                key={i}
                className={`quiz-option ${answers[idx] === opt ? "selected" : ""} ${submitted && opt === q.answer ? "correct" : ""} ${submitted && answers[idx] === opt && opt !== q.answer ? "wrong" : ""}`}
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
        <div className="score">✅ Skor kamu: {score} / {fisikaQuestions.length}</div>
      )}
    </div>
  );
};

export default QuizFisikaPage;
