"use client";
// src/components/QuizCard.tsx
import React, { useState } from 'react';
import '@/styles/components/ButtonStyles.modules.css';

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswerSelected: (answer: string) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, options, onAnswerSelected }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onAnswerSelected(option);
  };

  return (
    <div className="quiz-card flex flex-col gap-4 text-xl">
        <p className="question">{question}</p>
        <div className="options-container flex flex-wrap gap-4">
            {options.map((option, index) => (
            <div key={index} className="container">
                <button
                className={`button ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
                >
                {option}
                </button>
            </div>
            ))}
        </div>
    </div>

  );
};

export default QuizCard;
