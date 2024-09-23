import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home />} /> {/* element is used instead of component */}
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

          <Footer />

      </div>
    </Router>
  );
};

export default App;
