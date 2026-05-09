import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <About />
        <Stats />
        <Gallery />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
