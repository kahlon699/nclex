// src/components/Practice.js
import React, { useState, useEffect } from "react";
import Question from "./Question";
import Results from "./Results";
import "./Practice.css";
import mockQuestions from "../data/mockQuestions";

const Practice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questionCount, setQuestionCount] = useState(0);
  const [showRationale, setShowRationale] = useState(false); // State to control rationale visibility

  useEffect(() => {
    fetchNewQuestion();
  }, []);

  const fetchNewQuestion = async () => {
    setLoading(true);
    setShowRationale(false); // Hide rationale when fetching a new question

    // Simulate fetching a question from an API or mock data
    const getRandomQuestion = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const randomQuestion = mockQuestions[Math.floor(Math.random() * mockQuestions.length)];
          resolve(randomQuestion);
        }, 10); // Simulate network delay
      });
    };

    const questionText = await getRandomQuestion();

    if (questionText) {
      const question = parseQuestion(questionText); // Parse the question object
      setCurrentQuestion(question);
    }
    setLoading(false);
  };

  const parseQuestion = (questionObj) => {
    // Assuming questionObj has the structure: { question: string, options: string[], answer: string, rationale: string }
    return {
      question: questionObj.question,
      options: questionObj.options,
      answer: questionObj.answer,
      rationale: questionObj.rationale, // Include rationale
    };
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowRationale(true); // Show rationale after submission
  };

  const handleNextQuestion = () => {
    if (questionCount < 9) {
      // Limit to 10 questions for this example
      setQuestionCount(questionCount + 1);
      fetchNewQuestion();
    } else {
      setShowResults(true);
    }
  };

  const restartPractice = () => {
    setScore(0);
    setQuestionCount(0);
    setShowResults(false);
    fetchNewQuestion();
  };

  return (
    <div className="practice">
      <h1>Practice Questions</h1>
      {loading ? (
        <p>Loading question...</p>
      ) : showResults ? (
        <Results score={score} totalQuestions={10} onRestart={restartPractice} />
      ) : (
        <Question
          question={currentQuestion}
          onAnswer={handleAnswer}
          showRationale={showRationale}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default Practice;