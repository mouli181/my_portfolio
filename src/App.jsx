import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import Certifications from './components/Certifications';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onResumeClick={() => setIsResumeModalOpen(true)}
      />

      <main>
        <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Training />
        <Education />
        <Certifications />
        <WhyWorkWithMe />
        <Contact />
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
