import React, { useEffect, useState } from 'react';
import { useAuth } from '../services/AuthContext'; // Import the useAuth hook
import axios from 'axios';

const Dashboard = () => {
  const { isAuthenticated } = useAuth(); // Get the isAuthenticated state
  const [currentStreak, setCurrentStreak] = useState(null); // Track login streak
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const fetchStreak = async () => {
      try {
        // Check if the user is authenticated
        if (!isAuthenticated) {
          console.error('User is not authenticated.');
          return;
        }

        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');     
        if (!token) {
          console.error('Token not found in localStorage.');
          return;
        }

        // Make the API request with the token in the headers
        const response = await axios.get('https://localhost:5001/api/user/streak', {
          headers: { Authorization: `Bearer ${token}` }, // Include the token in the request
        });

        // Set the current streak from the response
        setCurrentStreak(response.data.currentStreak);
        setUserName(response.data.username);
      } catch (err) {
        console.error('Failed to fetch streak:', err);
      }
    };

    fetchStreak();
  }, [isAuthenticated]); // Re-run effect when isAuthenticated changes

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {userName} !</h2>
      {currentStreak !== null ? (
        <p>Current Login Streak: {currentStreak} days</p>
      ) : (
        <p>Loading streak...</p>
      )}
    </div>
  );
};

export default Dashboard;