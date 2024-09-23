import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-section" id="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <div className="profile-pic">
            <img src="logo.webp" alt="User 1" />
          </div>
          <div className="testimonial-text">
            <p style={{fontFamily:"revert-layer"}}>"Fund4Edu helped me secure the funds I needed to complete my education. The process was smooth, and the support was amazing!"</p>
            <h3>John Doe</h3>
            <span>Student</span>
          </div>
        </div>

        <div className="testimonial">
          <div className="profile-pic">
            <img src="logo.webp" alt="User 2" />
          </div>
          <div className="testimonial-text">
            <p style={{fontFamily:"revert-layer"}}>"Contributing to Fund4Edu was one of the best decisions. I could see how my donation directly impacted students' lives."</p>
            <h3>Jane Smith</h3>
            <span>Donor</span>
          </div>
        </div>

        <div className="testimonial">
          <div className="profile-pic">
            <img src = "logo.webp" alt="User 3" />
          </div>
          <div className="testimonial-text">
            <p style={{fontFamily:"revert-layer"}}>"The platform's transparency and ease of use are unmatched. I'm proud to be a part of such an initiative."</p>
            <h3>Michael Lee</h3>
            <span>Community Member</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
