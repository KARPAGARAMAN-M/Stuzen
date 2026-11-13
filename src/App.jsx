import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import CustomSoftware from './pages/CustomSoftware';
import AIAutomation from './pages/AIAutomation';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Track if welcome screen has completed in current session
  const [welcomeCompleted, setWelcomeCompleted] = useState(() => {
    // If the visitor opens a deep link directly (e.g. /about, /services), don't block
    if (location.pathname !== '/' && location.pathname !== '/welcome') {
      return true;
    }
    // Check if explicitly passed skipWelcome state
    if (location.state?.skipWelcome) {
      return true;
    }
    return false;
  });

  const handleWelcomeComplete = () => {
    setWelcomeCompleted(true);
    if (location.pathname === '/welcome') {
      navigate('/', { replace: true, state: { skipWelcome: true } });
    }
  };

  // Determine if welcome screen should be displayed
  const isEntryWelcome = location.pathname === '/' && !welcomeCompleted;
  const isExplicitWelcome = location.pathname === '/welcome';

  return (
    <>
      {/* Premium Stuzen Technologies Welcome Screen as default entry screen */}
      {(isEntryWelcome || isExplicitWelcome) && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}

      {/* Existing application routes fully protected & untouched */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/website-development" element={<WebsiteDevelopment />} />
          <Route path="services/custom-software" element={<CustomSoftware />} />
          <Route path="services/ai-automation" element={<AIAutomation />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
