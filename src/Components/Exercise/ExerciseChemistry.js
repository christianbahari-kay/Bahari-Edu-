// ExerciseChemistry.js
import React, { useState } from 'react';
import '../../Styles/ExercisePage.css';

const questions = [
  {
    question: 'Apa simbol kimia untuk air?',
    options: ['H2O', 'CO2', 'O2', 'NaCl'],
    answer: 'H2O',
    explanation: 'Air tersusun atas dua atom hidrogen dan satu atom oksigen, maka simbol kimianya adalah H2O.'
  },
  {
    question: 'Apa itu senyawa?',
    options: [
      'Gabungan dari dua atau lebih unsur',
      'Unsur yang tidak bisa dipecah',
      'Atom tunggal',
      'Cairan murni'
    ],
    answer: 'Gabungan dari dua atau lebih unsur',
    explanation: 'Senyawa terbentuk dari dua atau lebih unsur yang bergabung secara kimia.'
  },
  {
    question: 'Tabel periodik menunjukkan apa?',
    options: [
      'Reaksi kimia',
      'Jenis senyawa',
      'Unsur-unsur kimia',
      'Proses pembakaran'
    ],
    answer: 'Unsur-unsur kimia',
    explanation: 'Tabel periodik adalah susunan unsur-unsur kimia berdasarkan nomor atom dan sifat-sifatnya.'
  },
  {
    question: 'Reaksi pembakaran membutuhkan apa?',
    options: ['Oksigen', 'Nitrogen', 'Hidrogen', 'Karbon'],
    answer: 'Oksigen',
    explanation: 'Pembakaran hanya dapat terjadi jika ada oksigen sebagai zat pengoksidasi.'
  },
  {
    question: 'Asam memiliki pH lebih ... dari 7.',
    options: ['besar', 'kecil', 'sama', 'tidak diketahui'],
    answer: 'kecil',
    explanation: 'Asam memiliki nilai pH kurang dari 7, sedangkan basa lebih dari 7.'
  }
];

const ExerciseChemistry = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const handleAnswer = (index, option) => {
    if (!selectedAnswers[index]) {
      setSelectedAnswers((prev) => ({ ...prev, [index]: option }));
      setShowExplanation((prev) => ({ ...prev, [index]: true }));
    }
  };

  return (
    <div className="exercise-page">
      <h1>🔬 Latihan - Kimia Dasar</h1>
      <p className="instruction">Pilih jawaban yang benar, lalu baca penjelasan di bawahnya.</p>

      {questions.map((q, index) => (
        <div className="exercise-section" key={index}>
          <h3>{index + 1}. {q.question}</h3>
          <ul className="option-list">
            {q.options.map((option, i) => {
              const selected = selectedAnswers[index];
              const correct = option === q.answer;
              const wrong = selected === option && !correct;

              return (
                <li
                  key={i}
                  className={`option-item ${
                    selected
                      ? correct
                        ? 'correct'
                        : wrong
                        ? 'wrong'
                        : ''
                      : ''
                  }`}
                  onClick={() => handleAnswer(index, option)}
                >
                  {option}
                </li>
              );
            })}
          </ul>

          {showExplanation[index] && (
            <div className="explanation-box">
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

export default ExerciseChemistry;
