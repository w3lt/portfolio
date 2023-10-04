import React, { useEffect } from 'react';
import './App.css';

import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Projects from '../Projects/Project';
import Header from '../Header/Header';

// const router = createBrowserRouter([
//   {
//     path: "/portfolio",
//     element: <Dashboard />
//   },
//   {
//     path: "/portfolio/about",
//     element: <About />
//   },
//   {
//     path: "/portfolio/projects",
//     element: <Projects />
//   }
// ])

function App() {
  return <div className='App'>
    <Header />
    <div className='main-content-container'>
      <Dashboard />
      <About />
      <Projects />
    </div>
    
    
  </div>
}

export default App;