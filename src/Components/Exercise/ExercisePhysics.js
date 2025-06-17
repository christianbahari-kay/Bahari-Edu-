// ExercisePhysics.js
import React, { useState } from 'react';
import '../../Styles/ExercisePage.css';

const questions = [
  {
    question: 'Apa satuan dari gaya dalam Sistem Internasional (SI)?',
    options: ['Joule', 'Watt', 'Newton', 'Pascal'],
    answer: 'Newton',
    explanation: 'Gaya dalam SI diukur dalam satuan Newton (N), yang setara dengan kg*m/s^2.'
  },
  {
    question: 'Berapakah percepatan gravitasi di permukaan bumi?',
    options: ['8.9 m/s²', '9.8 m/s²', '10.2 m/s²', '7.5 m/s²'],
    answer: '9.8 m/s²',
    explanation: 'Gravitasi bumi pada umumnya dianggap sebesar 9.8 m/s².'
  },
  {
    question: 'Hukum Newton ke-1 menyatakan bahwa...',
    options: [
      'Gaya sama dengan massa kali percepatan',
      'Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah',
      'Benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya luar yang bekerja',
      'Energi tidak dapat diciptakan atau dimusnahkan'
    ],
    answer: 'Benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya luar yang bekerja',
    explanation: 'Itu adalah prinsip inersia dari Hukum Newton pertama.'
  },
  {
    question: 'Energi kinetik sebuah benda bergantung pada...',
    options: ['Massa dan volume', 'Massa dan kecepatan', 'Tekanan dan suhu', 'Gravitasi dan ketinggian'],
    answer: 'Massa dan kecepatan',
    explanation: 'Energi kinetik dirumuskan sebagai 1/2 x massa x kecepatan^2.'
  }
];

const ExercisePhysics = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const handleAnswer = (qIdx, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: option });
    setShowExplanation({ ...showExplanation, [qIdx]: true });
  };

  return (
    <div className="exercise-page">
      <h1>Latihan - Basic Physics</h1>
      <p>Pilih jawaban yang paling benar, lalu baca penjelasannya!</p>

      {questions.map((q, index) => (
        <div className="exercise-section" key={index}>
          <h3>{index + 1}. {q.question}</h3>
          <ul className="option-list">
            {q.options.map((option, i) => (
              <li
                key={i}
                className={`option-item ${
                  selectedAnswers[index]
                    ? option === q.answer
                      ? 'correct'
                      : option === selectedAnswers[index]
                      ? 'wrong'
                      : ''
                    : ''
                }`}
                onClick={() => !selectedAnswers[index] && handleAnswer(index, option)}
              >
                {option}
              </li>
            ))}
          </ul>

          {showExplanation[index] && (
            <div className="explanation">
              {selectedAnswers[index] === q.answer ? (
                <p className="correct-text">✅ Jawaban benar!</p>
              ) : (
                <p className="wrong-text">❌ Jawaban kurang tepat. Jawaban yang benar: <strong>{q.answer}</strong></p>
              )}
              <p className="explanation-text">{q.explanation}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExercisePhysics;
