import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Subjects from './components/Subjects';
import Rules from './components/Rules';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="bg-deep-space min-h-screen text-white relative selection:bg-electric-blue selection:text-black">
      <BackgroundParticles />
      <Header />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <div className="relative">
          {/* Background gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space to-deep-space pointer-events-none" />
          <About />
          <Subjects />
          <Rules />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
