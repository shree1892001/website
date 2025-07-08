import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
