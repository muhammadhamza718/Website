"use client";
// src/components/QuizApp.tsx
import "@/styles/components/page.modules.css";
import React, { useState } from 'react';
import { easyQuestions, mediumQuestions, hardQuestions, veryHardQuestions } from '@/components/quizQuestions';
import QuizCard from '@/components/QuizCard';

const QuizApp: React.FC = () => {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'veryHard' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false); // Track if the result should be shown
  const [score, setScore] = useState(0); // Track the user's score

  const questions = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions,
    veryHard: veryHardQuestions,
  };

  // Handle the selection of an answer
  const handleAnswerSelected = (answer: string) => {
    setSelectedAnswers([...selectedAnswers, answer]);
    if (currentQuestionIndex < questions[difficulty!].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore(); // Calculate score when quiz is finished
    }
  };

  // Calculate the score by comparing answers
  const calculateScore = () => {
    let calculatedScore = 0;
    questions[difficulty!].forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore); // Set the final score
    setShowResult(true); // Show result after quiz completion
  };

  // Handle difficulty selection
  const handleDifficultySelection = (level: 'easy' | 'medium' | 'hard' | 'veryHard') => {
    setDifficulty(level);
    setCurrentQuestionIndex(0); // Reset to the first question
    setSelectedAnswers([]); // Reset answers
    setShowResult(false); // Hide result if quiz is reset
    setScore(0); // Reset score
  };

  // Generate the result message based on the score
  const resultMessage = () => {
    const totalQuestions = questions[difficulty!].length;
    // User passes if they answer 5 or more questions correctly
    if (score >= 5) {
      return (
        <div className="result-message">
          <h2>Congratulations!</h2>
          <p>You passed the quiz with a score of {score} out of {totalQuestions}!</p>
        </div>
      );
    } else {
      return (
        <div className="result-message">
          <h2>Try Again!</h2>
          <p>Your score is {score} out of {totalQuestions}. Maybe next time, you can do better!</p>
        </div>
      );
    }
  };

  return (
    <div className="quiz-app pt-24 px-4 md:px-0 animate-fadeInUp text-white">
      {difficulty === null ? (
        // Difficulty selection screen
        <div className="flex flex-col justify-center items-center difficulty-selection">
          <h1 className="text-3xl md:text-5xl font-bold py-8">Select Difficulty</h1>
          <div className="flex space-x-1 md:space-x-6 text-xl difficulty-buttons">
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 md:px-4 rounded"
              onClick={() => handleDifficultySelection('easy')}
            >
              Easy
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 md:px-4 rounded"
              onClick={() => handleDifficultySelection('medium')}
            >
              Medium
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 md:px-4 rounded"
              onClick={() => handleDifficultySelection('hard')}
            >
              Hard
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 md:px-4 rounded"
              onClick={() => handleDifficultySelection('veryHard')}
            >
              Very Hard
            </button>
          </div>
        </div>
      ) : showResult ? (
        // Result section after quiz completion
        <div className="result-section flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl font-bold py-4">Quiz - {difficulty} Difficulty</h1>
          {resultMessage()} {/* Display the result message */}
          <div className="result-buttons flex space-x-4 mt-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDifficultySelection(difficulty!)} // Restart quiz with same difficulty
            >
              Restart Quiz
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setDifficulty(null)} // Go back to the difficulty selection screen
            >
              Change Difficulty
            </button>
          </div>
        </div>
      ) : (
        // Quiz section during quiz
        <div className="flex flex-col justify-center items-center gap-4 quiz-section">
          <h1 className="text-5xl font-bold py-4">Quiz - {difficulty} Difficulty</h1>
          <QuizCard
            question={questions[difficulty][currentQuestionIndex].question}
            options={questions[difficulty][currentQuestionIndex].options}
            correctAnswer={questions[difficulty][currentQuestionIndex].correctAnswer}
            onAnswerSelected={handleAnswerSelected}
          />
        </div>
      )}
    </div>
  );
};

export default QuizApp;
