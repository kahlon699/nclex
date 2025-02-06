// src/components/ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const ProtectedRoute = ({ children, openLogin }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    openLogin(); // Open the login modal if the user is not authenticated
    return <Navigate to="/" replace />; // Redirect to home or any other route
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;