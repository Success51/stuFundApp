import React from 'react';
import './Hero.css'; // Import CSS for styles
import { Link } from 'react-router-dom'; // Import Link for navigation


const Hero = () => {
    return (
        <section className="hero">
        <div className="hero-content">
            <h1>Empowering Education Through Crowdfunding</h1>
            <p>Help students achieve their dreams by funding their education.</p>
            <div className="cta-buttons">
                <Link to="/Profile" className="btn-start">Start a Campaign</Link>
                {/* Use Link for navigation to /campaigns */}
                <Link to="/campaigns" className="btn-explore">Explore Campaigns</Link>
            </div>
        </div>
    </section>
    );
};

export default Hero;
