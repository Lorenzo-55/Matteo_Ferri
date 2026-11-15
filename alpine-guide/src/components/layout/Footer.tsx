import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Mountain } from 'lucide-react';
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-top">
        <Link className="brand" to="/">
          <Mountain size={36} strokeWidth={1} />
          <span>
            MATTEO FERRI<small>ALPINE GUIDE</small>
          </span>
        </Link>
        <p>{t('small')}</p>
        <Link to="/contact">
          {t('plan')} <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="footer-links">
        {['adventures', 'about', 'gallery', 'journal', 'contact'].map((k) => (
          <Link to={`/${k}`} key={k}>
            {t(k)}
          </Link>
        ))}
      </div>
      <div className="footer-bottom">
        <p>{t('demo')}</p>
        <span>© {new Date().getFullYear()} Matteo Ferri · Portfolio</span>
      </div>
    </footer>
  );
}
