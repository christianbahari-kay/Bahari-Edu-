import React, { useState } from 'react';
import '../../Styles/ExercisePage.css';

const questions = [
  {
    question: 'Apa fungsi inti sel?',
    options: [
      'Tempat fotosintesis',
      'Mengatur aktivitas sel',
      'Tempat penyimpanan makanan',
      'Menyalurkan oksigen'
    ],
    answer: 'Mengatur aktivitas sel',
    explanation:
      'Inti sel adalah pusat pengendali yang mengatur semua aktivitas dalam sel, termasuk pertumbuhan dan pembelahan sel.'
  },
  {
    question: 'Dimana proses respirasi sel terjadi?',
    options: ['Kloroplas', 'Mitokondria', 'Inti sel', 'Ribosom'],
    answer: 'Mitokondria',
    explanation:
      'Mitokondria adalah tempat di mana respirasi seluler berlangsung dan energi dalam bentuk ATP dihasilkan.'
  },
  {
    question: 'Apa peran ribosom dalam sel?',
    options: [
      'Menghasilkan energi',
      'Sintesis protein',
      'Mengatur pembelahan sel',
      'Transportasi nutrisi'
    ],
    answer: 'Sintesis protein',
    explanation:
      'Ribosom bertanggung jawab untuk membuat protein dengan merangkai asam amino sesuai instruksi dari RNA.'
  },
  {
    question: 'Bagian sel apa yang berfungsi sebagai pembungkus dan pelindung sel?',
    options: ['Nukleus', 'Membran sel', 'Sitoplasma', 'Dinding sel'],
    answer: 'Membran sel',
    explanation:
      'Membran sel mengatur keluar masuknya zat dan melindungi isi sel dari lingkungan luar.'
  },
  {
    question: 'Organisme uniseluler adalah organisme yang?',
    options: [
      'Terdiri dari banyak sel',
      'Terdiri dari satu sel',
      'Tidak memiliki inti sel',
      'Tidak melakukan respirasi'
    ],
    answer: 'Terdiri dari satu sel',
    explanation:
      'Uniseluler berarti hanya terdiri dari satu sel yang melakukan semua fungsi kehidupan, seperti bakteri.'
  }
];

const ExerciseBiology = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const handleAnswer = (questionIndex, option) => {
    if (!selectedAnswers[questionIndex]) {
      setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: option }));
      setShowExplanation((prev) => ({ ...prev, [questionIndex]: true }));
    }
  };

  return (
    <div className="exercise-page">
      <h1>🧬 Latihan - Biologi Dasar</h1>
      <p className="instruction">Pilih jawaban yang paling tepat, lalu baca penjelasannya di bawah.</p>

      {questions.map((q, index) => (
        <div className="exercise-section" key={index}>
          <h3>{index + 1}. {q.question}</h3>
          <ul className="option-list">
            {q.options.map((option, optIndex) => {
              const isSelected = selectedAnswers[index];
              const isCorrect = option === q.answer;
              const isWrong = isSelected === option && !isCorrect;

              return (
                <li
                  key={optIndex}
                  className={`option-item ${
                    isSelected
                      ? isCorrect
                        ? 'correct'
                        : isWrong
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

export default ExerciseBiology;
