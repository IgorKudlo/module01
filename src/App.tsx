import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/404';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="404" replace />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
