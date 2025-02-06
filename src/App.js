import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Practice from "./components/Practice";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./services/AuthContext";
import Register from "./components/Register";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to manage login modal visibility
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // State to manage register modal visibility

  // Function to open the Login modal
  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false); // Ensure Register modal is closed
  };

  // Function to close the Login modal
  const closeLogin = () => setIsLoginOpen(false);

  // Function to open the Register modal
  const openRegister = () => {
    setIsLoginOpen(false); // Close the Login modal
    setIsRegisterOpen(true); // Open the Register modal
  };

  // Function to close the Register modal
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          {/* Pass openLogin function to Navbar */}
          <Navbar openLogin={openLogin} />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Remove the /login route since Login is now a modal */}
            <Route
              path="/practice"
              element={
                <ProtectedRoute openLogin={openLogin}>
                  <Practice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute openLogin={openLogin}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* Footer */}
          <Footer />

          {/* Render the Login modal */}
          <Login
            isOpen={isLoginOpen}
            onClose={closeLogin}
            openRegister={openRegister} // Pass openRegister to Login           
          />

          {/* Render the Register modal */}
          <Register isOpen={isRegisterOpen} onClose={closeRegister}/>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;