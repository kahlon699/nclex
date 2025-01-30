// src/components/Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master the NCLEX Exam</h1>
          <p>Practice with AI-generated questions and track your progress.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.jpg" alt="NCLEX Exam Preparation" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="/images/feature1-icon.png" alt="AI-Generated Questions" />
            <h3>AI-Generated Questions</h3>
            <p>Get unlimited practice questions tailored to your needs.</p>
          </div>
          <div className="feature-card">
            <img src="/images/feature2-icon.png" alt="Detailed Analytics" />
            <h3>Detailed Analytics</h3>
            <p>Track your progress and identify areas for improvement.</p>
          </div>
          <div className="feature-card">
            <img src="/images/feature3-icon.png" alt="Flexible Learning" />
            <h3>Flexible Learning</h3>
            <p>Study anytime, anywhere with our mobile-friendly platform.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;