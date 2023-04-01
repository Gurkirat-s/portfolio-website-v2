import './App.css';
import './general.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleDarkMode = () => {
    console.log('theme changed');
    setTheme((prev) => {
      if (prev === 'dark') {
        return 'light';
      } else {
        return 'dark';
      }
    });
  };

  return (
    <div className={theme === 'light' ? 'app light' : 'app'}>
      <Navbar toggleDarkMode={toggleDarkMode} theme={theme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
