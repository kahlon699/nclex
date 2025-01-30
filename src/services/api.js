// src/services/api.js
import axios from "axios";

const API_KEY = "your-deepseek-api-key"; // Replace with your actual API key
const API_URL = "https://api.deepseek.com/v1/questions"; // Replace with the actual API endpoint

const generateQuestion = async (topic) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        prompt: `Generate an NCLEX-style multiple-choice question about ${topic}. Include 4 options and indicate the correct answer.`,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].text; // Adjust based on the API response structure
  } catch (error) {
    console.error("Error generating question:", error);
    return null;
  }
};

export { generateQuestion };