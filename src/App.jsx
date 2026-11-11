import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import CustomSoftware from './pages/CustomSoftware';
import AIAutomation from './pages/AIAutomation';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
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
  );
}

