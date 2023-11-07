import React, { useState } from 'react';
import './App.css';

import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Project from '../Project/Project';

function App() {

  const [isInPage, setIsInPage] = useState(0);
  const [isInProject, setIsInProject] = useState(-1);

  return <div className='App'>
    <Header setIsInPage={setIsInPage} />
    <div className='content'>
      {isInPage === 0 && <Dashboard />}
      {isInPage === 1 && <About />}
      {isInPage === 2 && <Projects setIsInPage={setIsInPage} setIsInProject={setIsInProject} />}
      {isInPage === 3 && <Project index={isInProject} />}
      <Footer />
    </div>
    
  </div>
}

export default App;