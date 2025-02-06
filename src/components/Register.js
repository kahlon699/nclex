import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner"; // Import your Spinner component
import "./Register.css"; // Import the CSS file for styling

const Register = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    try {
      const response = await axios.post("https://localhost:5001/api/Auth/register", {
        username: username,
        email:email,
        password: password,
      });

      if (response.data.token) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          onClose(); // Close the modal
          navigate("/login"); // Redirect to login page
        }, 2000); // Wait 2 seconds before redirecting
      }
    } catch (err) {
      if (err.status === 400 || err.status === 401) 
        {
        setError(`${err.response.data}`);
      }  else {
        setError("Registration failed. Please try again.");
      }    
      console.error("Registration error:", err); // Log the error for debugging
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleRegister} className="register-form">

        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
             
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="register-button-submit" disabled={loading}>
            {loading ? <Spinner /> : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;