// src/components/Results.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Results.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Results = ({ score, totalQuestions, onRestart }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);
  const isPass = percentage >= 70; // Check if the score is a pass (70% or higher)

  // Data for the pie chart
  const chartData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [score, totalQuestions - score],
        backgroundColor: ["#4caf50", "#f44336"], // Green for correct, red for incorrect
        hoverBackgroundColor: ["#66bb6a", "#ef5350"],
      },
    ],
  };

  return (
    <div className="results">
      <h2>Your Results</h2>
      <div className="chart-container">
        <Pie data={chartData} />
      </div>
      <p>
        You scored {score} out of {totalQuestions} ({percentage}%).
      </p>
      <p className={isPass ? "pass-message" : "fail-message"}>
        {isPass ? "Congratulations! You passed!" : "Sorry, you did not pass. Keep practicing!"}
      </p>
      <button onClick={onRestart} className="restart-button">
        Restart Practice
      </button>
    </div>
  );
};

export default Results;