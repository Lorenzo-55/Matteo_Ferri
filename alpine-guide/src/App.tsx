import { Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MotionConfig } from 'motion/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
const AppRoutes = lazy(() => import('./AppRoutes'));
export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    try {
      localStorage.setItem('alpine-language', i18n.language);
    } catch {
      /* Preferences remain usable when browser storage is unavailable. */
    }
  }, [i18n.language]);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Suspense
          fallback={
            <div className="loading" role="status">
              …
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  );
}
