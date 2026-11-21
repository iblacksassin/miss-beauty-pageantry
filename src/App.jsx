import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';          // Make sure Hero.jsx exists in src/
import About from './About';        // Make sure About.jsx exists in src/
import Contestants from './Contestants'; // Fix spelling if your file is Contentants.jsx or Contestants.jsx
import More from './More';
import Vote from './Vote';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Home page showing all main sections */}
        <Route 
          path="/" 
          element={
            <main>
              <div id="hero">
                <Hero />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="contestants">
                <Contestants />
              </div>
              <div id="more">
                <More />
              </div>
              <div id='contact'>
                <Footer />
              </div>
            </main>
          } 
        />
        
        {/* Separate Vote page */}
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </>
  );
};

export default App;