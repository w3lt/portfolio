import React, { useState } from 'react';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "/projects",
//     element: <Projects />
//   },
//   {
//     path: "/project/:projectName",
//     element: <Project />
//   }
// ])

function App() {

  const [isInPage, setIsInPage] = useState(0);

  return <div className='App'>
    <Header setIsInPage={setIsInPage} />
    <div className='content'>
      {isInPage === 0 && <Dashboard />}
      {isInPage === 1 && <About />}
      {isInPage === 2 && <Projects />}
      <Footer />
    </div>
    
  </div>
}

export default App;