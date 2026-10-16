import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import page components
import Home from '../user/pages/Home';
import About from '../user/pages/About';
import Customize from '../user/pages/Customize';
import Women from '../user/pages/Women';
import Group from '../user/pages/Group';
import Blogs from '../user/pages/Blogs';
import Contact from '../user/pages/Contact';
import { BlogPost } from '../user/pages/BlogPost'; // Corrected import (removed curly braces)
import CancellationPolicy from '../user/pages/CancellationPolicy'; 
import DomesticTours from '../user/pages/DomesticTours';
import TourDetailPage from '../user/pages/TourDetailPage';
import InternationalTours from '../user/pages/InternationalTours';
// Removed unused import for PackageDetails

export function AppRoutes() {
  const location = useLocation();
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About key={location.key} />} />
      <Route path="/customize" element={<Customize />} />
      <Route path="/women" element={<Women />} />
      <Route path="/group-departure" element={<Group />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:postId" element={<BlogPost />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/domestic-tours" element={<DomesticTours />} />
      <Route path="/international-tours" element={<InternationalTours />} />
      
      {/* --- This is now the single, correct route for ALL tour details --- */}
      <Route path="/tour/:type/:tourId" element={<TourDetailPage />} />
      
      {/* Removed old and redundant routes like /package-details */}
    </Routes>
  );
}