// src/Components/Exercise/ExerciseMath.js
import React, { useState } from 'react';
import '../../Styles/ExercisePage.css';

const questions = [
  {
    question: 'Berapa hasil dari 7 + 6?',
    options: ['11', '12', '13', '14'],
    answer: '13',
    explanation: '7 + 6 = 13 karena penjumlahan sederhana dari dua bilangan tersebut.'
  },
  {
    question: 'Apa hasil dari 8 x 3?',
    options: ['24', '21', '26', '23'],
    answer: '24',
    explanation: '8 dikali 3 adalah 24 karena 8 ditambah 8 tiga kali hasilnya 24.'
  },
  {
    question: 'Manakah bilangan ganjil berikut ini?',
    options: ['6', '8', '10', '9'],
    answer: '9',
    explanation: '9 adalah bilangan ganjil karena tidak habis dibagi 2.'
  },
  {
    question: 'Apa hasil dari 100 - 45?',
    options: ['55', '65', '45', '60'],
    answer: '55',
    explanation: '100 dikurangi 45 adalah 55.'
  },
  {
    question: 'Berapakah akar kuadrat dari 49?',
    options: ['6', '7', '8', '9'],
    answer: '7',
    explanation: 'Akar kuadrat dari 49 adalah 7 karena 7 x 7 = 49.'
  }
];

const ExerciseMath = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const handleAnswer = (qIdx, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: option });
    setShowExplanation({ ...showExplanation, [qIdx]: true });
  };

  return (
    <div className="exercise-page">
      <h1>Latihan - Matematika Dasar</h1>
      <p>Pilih jawaban yang benar, lalu pelajari penjelasannya!</p>

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

export default ExerciseMath;
