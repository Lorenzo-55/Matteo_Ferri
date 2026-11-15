import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Mountain, Menu, X } from 'lucide-react';
export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);
  return (
    <header className={location.pathname === '/' ? 'over-hero' : ''}>
      <Link className="brand" to="/" aria-label="Matteo Ferri home">
        <Mountain size={33} strokeWidth={1} />
        <span>
          MATTEO FERRI<small>ALPINE GUIDE</small>
        </span>
      </Link>
      <button
        className="mobile-toggle"
        aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isMenuOpen}
        aria-controls="navigation"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      <nav id="navigation" className={isMenuOpen ? 'open' : ''}>
        {['home', 'adventures', 'about', 'gallery', 'journal', 'contact'].map((key) => (
          <NavLink key={key} to={key === 'home' ? '/' : `/${key}`} end>
            {t(key)}
          </NavLink>
        ))}
        <button
          className="language"
          onClick={() => void i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en')}
          aria-label="Change language"
        >
          EN <span className={i18n.language === 'it' ? 'chosen' : ''}>/ IT</span>
        </button>
        <Link className="nav-cta" to="/contact">
          {t('plan')} <ArrowUpRight size={15} />
        </Link>
      </nav>
    </header>
  );
}
