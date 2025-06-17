import React, { useState } from 'react';
import '../../Styles/ExercisePage.css';

const questions = [
  {
    question: 'Apa nama revolusi yang menandai perubahan besar di Prancis pada akhir abad ke-18?',
    options: ['Revolusi Industri', 'Revolusi Amerika', 'Revolusi Prancis', 'Reformasi Gereja'],
    answer: 'Revolusi Prancis',
    explanation: 'Revolusi Prancis dimulai tahun 1789 dan menandai perubahan besar dari monarki absolut menuju sistem demokrasi.'
  },
  {
    question: 'Siapa penemu mesin cetak yang mempengaruhi penyebaran ilmu di Eropa?',
    options: ['Leonardo da Vinci', 'Galileo Galilei', 'Johannes Gutenberg', 'Isaac Newton'],
    answer: 'Johannes Gutenberg',
    explanation: 'Johannes Gutenberg menciptakan mesin cetak modern pertama pada abad ke-15, memungkinkan penyebaran informasi secara massal.'
  },
  {
    question: 'Apa nama perjanjian yang mengakhiri Perang Dunia I?',
    options: ['Perjanjian Versailles', 'Perjanjian Tordesillas', 'Perjanjian Paris', 'Perjanjian Yalta'],
    answer: 'Perjanjian Versailles',
    explanation: 'Perjanjian Versailles ditandatangani pada tahun 1919 dan menjadi simbol berakhirnya Perang Dunia I.'
  },
  {
    question: 'Kerajaan mana yang dikenal karena membangun Candi Borobudur?',
    options: ['Majapahit', 'Sriwijaya', 'Mataram Kuno', 'Singasari'],
    answer: 'Mataram Kuno',
    explanation: 'Candi Borobudur dibangun oleh Dinasti Syailendra dari Kerajaan Mataram Kuno pada abad ke-8.'
  },
  {
    question: 'Siapa presiden pertama Republik Indonesia?',
    options: ['Soekarno', 'Suharto', 'Habibie', 'Megawati Soekarnoputri'],
    answer: 'Soekarno',
    explanation: 'Soekarno merupakan presiden pertama Republik Indonesia dan memproklamasikan kemerdekaan pada 17 Agustus 1945.'
  }
];

const ExerciseHistory = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const handleAnswer = (qIdx, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: option });
    setShowExplanation({ ...showExplanation, [qIdx]: true });
  };

  return (
    <div className="exercise-page">
      <h1>Latihan - History of Civilization</h1>
      <p>Jawablah pertanyaan di bawah ini untuk menguji pengetahuanmu tentang sejarah peradaban.</p>

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

export default ExerciseHistory;
