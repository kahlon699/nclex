import React, { useState } from "react";
import "./Question.css";

const Question = ({ question, onAnswer, showRationale, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(selectedOption === question.answer);
  };

  // Determine if the selected option is correct
  const isCorrect = selectedOption === question.answer;

  return (
    <div className="question">
      <h3>{question.question}</h3>
      <form onSubmit={handleSubmit}>
        {question.options.map((option, index) => {
          // Determine the class for each option based on correctness
          let optionClass = "";
          if (showRationale) {
            if (option === question.answer) {
              optionClass = "correct"; // Correct answer
            } else if (option === selectedOption && !isCorrect) {
              optionClass = "incorrect"; // Incorrectly selected answer
            }
          }

          return (
            <div key={index} className={`option ${optionClass}`}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  disabled={showRationale} // Disable options after submission
                />
                {option}
              </label>
            </div>
          );
        })}
        <button
          type="submit"
          className="submit-button"
          disabled={!selectedOption || showRationale}
        >
          Submit
        </button>
      </form>

      {/* Display rationale after submission */}
      {showRationale && (
        <div className="rationale">
          <p>
            <strong>Rationale:</strong> {question.rationale}
          </p>
          <button onClick={onNextQuestion} className="next-button">
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;