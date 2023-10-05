import React, { useState } from 'react';
import './App.css';

import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';


function App() {

  const [isInPage, setIsInPage] = useState(0);

  return <div className='App'>
    <Header setIsInPage={setIsInPage} />
    {isInPage === 0 && <Dashboard />}
    {isInPage === 1 && <About />}
    {isInPage === 2 && <Projects />}
  </div>
}

export default App;