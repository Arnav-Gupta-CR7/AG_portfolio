import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Home from './src/Home/Home'
import About from './src/about/About'
import Projects from "./src/projects/Projects";
import Experience from "./src/experience/Experience";
import Connect from "./src/connect/Connect";
import Mobile from './src/mobile/Mobile';

import './App.css'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // redirect based on screen size + current route
  if (isMobile && location.pathname !== '/mobile') {
    return <Navigate to="/mobile" replace />;
  }

  if (!isMobile && location.pathname === '/mobile') {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/mobile" element={<Mobile/>} />
    </Routes>
  );
}

export default App
