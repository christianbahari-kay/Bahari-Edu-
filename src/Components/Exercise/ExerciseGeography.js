import React, { useState } from 'react';
import '../../Styles/ExercisePage.css';

const questions = [
  {
    question: 'Apa yang dimaksud dengan garis khatulistiwa?',
    options: [
      'Garis yang membagi bumi menjadi barat dan timur',
      'Garis imajiner yang membagi bumi menjadi utara dan selatan',
      'Garis batas antara dua benua',
      'Garis bujur utama'
    ],
    answer: 'Garis imajiner yang membagi bumi menjadi utara dan selatan',
    explanation: 'Garis khatulistiwa adalah garis imajiner yang membagi bumi secara horizontal menjadi belahan bumi utara dan selatan.'
  },
  {
    question: 'Apa yang menyebabkan terjadinya musim di bumi?',
    options: [
      'Perputaran bumi pada porosnya',
      'Revolusi bumi dan kemiringan sumbu bumi',
      'Letak garis khatulistiwa',
      'Perbedaan tekanan udara'
    ],
    answer: 'Revolusi bumi dan kemiringan sumbu bumi',
    explanation: 'Musim terjadi karena revolusi bumi mengelilingi matahari dan sumbu bumi yang miring 23,5 derajat.'
  },
  {
    question: 'Apa yang dimaksud dengan peta topografi?',
    options: [
      'Peta yang menunjukkan letak negara',
      'Peta yang menunjukkan ketinggian dan bentuk permukaan bumi',
      'Peta yang menunjukkan iklim',
      'Peta transportasi umum'
    ],
    answer: 'Peta yang menunjukkan ketinggian dan bentuk permukaan bumi',
    explanation: 'Peta topografi digunakan untuk menunjukkan bentuk fisik seperti gunung, lembah, dan sungai menggunakan garis kontur.'
  },
  {
    question: 'Apa yang dimaksud dengan delta?',
    options: [
      'Sungai yang berada di pegunungan',
      'Muara sungai yang terbentuk karena endapan',
      'Danau yang berada di hulu sungai',
      'Aliran sungai kecil'
    ],
    answer: 'Muara sungai yang terbentuk karena endapan',
    explanation: 'Delta adalah daerah di muara sungai yang terbentuk dari endapan sedimen yang terbawa oleh aliran sungai.'
  }
];

const ExerciseGeography = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const handleAnswer = (qIdx, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: option });
    setShowExplanation({ ...showExplanation, [qIdx]: true });
  };

  return (
    <div className="exercise-page">
      <h1>Latihan - Geografi Dasar</h1>
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

export default ExerciseGeography;
