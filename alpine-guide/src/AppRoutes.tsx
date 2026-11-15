import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Adventures from './pages/Adventures';
import AdventureDetails from './pages/AdventureDetails';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Journal from './pages/Journal';
import JournalArticle from './pages/JournalArticle';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.split('/')[1];
    document.title = `${path ? path.charAt(0).toUpperCase() + path.slice(1) + ' — ' : ''}Matteo Ferri · Alpine Guide`;
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adventures" element={<Adventures />} />
      <Route path="/adventures/:slug" element={<AdventureDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/journal/:slug" element={<JournalArticle />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
