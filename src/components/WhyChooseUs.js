import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us" id="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="reasons-container">
        <div className="reason">
          <div className="reason-icon">
            <i className="fas fa-lock"></i>
          </div>
          <h3>Secure Transactions</h3>
          <p>All donations are securely made via blockchain, ensuring transparency and security for both students and donors.</p>
        </div>

        <div className="reason">
          <div className="reason-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>Community Driven</h3>
          <p>Our platform is powered by a community dedicated to helping students achieve their educational goals.</p>
        </div>

        <div className="reason">
          <div className="reason-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3>Trackable Impact</h3>
          <p>Follow the progress of the students you have supported and see the difference your contributions make.</p>
        </div>

        <div className="reason">
          <div className="reason-icon">
            <i className="fas fa-hand-holding-heart"></i>
          </div>
          <h3>Direct Support</h3>
          <p>Your donations go directly to students, ensuring every dollar counts without intermediaries.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
