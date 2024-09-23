import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-icon">
            <i className="fas fa-user-plus"></i>
          </div>
          <h3>Sign Up</h3>
          <p>Create your account as a student or donor and start exploring the platform.</p>
        </div>

        <div className="step">
          <div className="step-icon">
            <i className="fas fa-search"></i>
          </div>
          <h3>Browse Campaigns</h3>
          <p>Find student campaigns that match your interests or goals.</p>
        </div>

        <div className="step">
          <div className="step-icon">
            <i className="fas fa-donate"></i>
          </div>
          <h3>Donate</h3>
          <p>Make a donation through our secure blockchain platform.</p>
        </div>

        <div className="step">
          <div className="step-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3>Track Progress</h3>
          <p>Follow the progress of the students you have supported over time.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
