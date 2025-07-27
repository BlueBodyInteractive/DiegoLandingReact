import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  useScrollSpy(setActiveSection);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Services />
      <Products />
      <Blog />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;