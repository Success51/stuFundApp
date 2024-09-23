import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 
import Hero from '../components/Hero'; 
import HowItWorks from '../components/HowItWorks.js'; 
import WhyChooseUs from '../components/WhyChooseUs.js'; 
import Testimonials from '../components/Testimonials.js'; 
import Campaigns from './Campaigns.js'; 

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero-section">
      <Hero />
      </header>


        {/* for the campaigns */}
      <section className="featured-campaigns-section">
              <h1 style={{color:"white", width:"100%" , textAlign:"center" ,textDecoration:"underlined"}}>Featured Campaigns</h1>
                <Campaigns limit={4} /> {/* Show only top 3 campaigns */}
      </section>
      <br/>

      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />

    </div>
  );
};

export default Home;
