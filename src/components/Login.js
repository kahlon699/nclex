import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Spinner from "./Spinner";
import "./Login.css";

const CLIENT_ID = "116313171313-gav4gr5o2aurh41bi65hmblti4h0308a.apps.googleusercontent.com"; // Replace with your Google Client ID

const Login = ({ isOpen, onClose, openRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://localhost:5001/api/Auth/login", {
        email: email,
        password: password,
      });
    
       
      if (response.data.token) {
        login(response.data.token); // Save the token
       
        setTimeout(() => {
          onClose(); // Close the modal
          navigate("/dashboard"); // Redirect to dashboard
        }, 2000); // Wait 2 seconds before redirecting
      }
      
    } catch (err) {

      if (err.status === 400 || err.status === 401) 
        {
        setError(`${err.response.data}`);
      }  else {
        setError("Invalid username or password");
      }  
    
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const response = await axios.post("https://localhost:5001/api/Auth/google-login", {
        token: credentialResponse.credential,
      });

      if (response.data.token) {
        login(response.data.token);
        setTimeout(() => {
          onClose();
          navigate("/dashboard");
        }, 2000);
      }
    } catch (err) {
      if (err.status === 400 || err.status === 401) 
        {
        setError(`${err.response.data}`);
      }  else {
        setError("Google login failed");
      }        
      console.error("Google login error:", err);
    }
  };
  if (!isOpen) return null;

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleLogin} className="login-form">
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
          <button type="submit" className="login-button-submit" disabled={loading}>
            {loading ? <Spinner /> : "Login"}
          </button>
        </form>
        <div className="google-login-container">
            <GoogleLogin onSuccess={handleGoogleLogin} onError={() => setError("Google login failed")} />
          </div>
        <p className="register-text">
          Don't have an account?{" "}
          <button className="register-link" onClick={openRegister}>
            Register here
          </button>
        </p>
      </div>
    </div>
    </GoogleOAuthProvider>
  );
};

export default Login;