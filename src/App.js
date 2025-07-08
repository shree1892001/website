import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutChitFundsPage from './pages/AboutChitFundsPage';
import AboutUsPage from './pages/AboutUsPage';
import SchemesPage from './pages/SchemesPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import MaterialDashboardPage from './pages/MaterialDashboardPage';
import KidsLoginPage from './pages/KidsLoginPage';
import KidsDashboardPage from './pages/KidsDashboardPage';

// Temporary placeholder component for testing
const PlaceholderPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="material-card p-8 max-w-md w-full shadow-lg">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-600 text-3xl font-bold">NT</span>
          </div>
          <h1 className="text-2xl font-bold text-primary-600">NovaTrust Chit Fund</h1>
          <p className="text-sm text-primary-500">Secure • Transparent • Reliable</p>
        </div>

        <div className="bg-primary-50 p-4 rounded-lg mb-6">
          <p className="text-neutral-700">
            Welcome to NovaTrust Chit Fund Services. We're setting up your personalized dashboard with the latest chit fund data.
          </p>
        </div>

        <button
          className="btn-material-contained-primary w-full flex items-center justify-center"
          onClick={handleContinue}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </>
          ) : (
            'Continue to Dashboard'
          )}
        </button>

        <div className="mt-6 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} NovaTrust Chit Fund Services</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/about-us" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about-chit-funds" element={<AboutChitFundsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/dashboard" element={<MaterialDashboardPage />} />
        <Route path="/dashboard-classic" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/about-us" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
