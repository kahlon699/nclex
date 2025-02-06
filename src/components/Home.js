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
    <img
      src={process.env.PUBLIC_URL + "/images/hero-image.jpg"}
      alt="NCLEX Exam Preparation"
    />
  </div>
</section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img
              src={process.env.PUBLIC_URL + "/images/feature1-icon.png"}
              alt="AI-Generated Questions"
            />
            <h3>AI-Generated Questions</h3>
            <p>Get unlimited practice questions tailored to your needs.</p>
          </div>
          <div className="feature-card">
            <img
              src={process.env.PUBLIC_URL + "/images/feature2-icon.png"}
              alt="Detailed Analytics"
            />
            <h3>Detailed Analytics</h3>
            <p>Track your progress and identify areas for improvement.</p>
          </div>
          <div className="feature-card">
            <img
              src={process.env.PUBLIC_URL + "/images/feature3-icon.png"}
              alt="Flexible Learning"
            />
            <h3>Flexible Learning</h3>
            <p>Study anytime, anywhere with our mobile-friendly platform.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
  <h2>What Our Users Say</h2>
  <div className="testimonial-cards">
    <div className="testimonial-card">
      <p>"This platform helped me pass the NCLEX on my first attempt!"</p>
      <h4>- Jane Doe</h4>
    </div>
    <div className="testimonial-card">
      <p>"The AI-generated questions are incredibly realistic and helpful."</p>
      <h4>- John Smith</h4>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;