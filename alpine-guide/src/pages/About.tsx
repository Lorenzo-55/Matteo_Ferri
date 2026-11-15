import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import useCopy from '../hooks/useCopy';
import Photo from '../components/ui/Photo';
import PageTitle from '../components/ui/PageTitle';
import AdventureCTA from '../components/AdventureCTA';

export default function About() {
  const { t } = useCopy();
  return (
    <>
      <PageTitle label={t('aboutLabel')} title={t('life')} description={t('intro')} />
      <section className="guide-section wrap">
        <div className="guide-image">
          <Photo eager src="/images/mountain-4.svg" alt={t('placeholder')} />
          <span className="photo-note">{t('placeholder')}</span>
        </div>
        <div>
          <p className="eyebrow">MATTEO FERRI / DOLOMITES</p>
          <h2>{t('calling')}</h2>
          <p className="lede">{t('bio')}</p>
          <p>{t('philosophy')}</p>
          <div className="signature">Matteo Ferri</div>
          <p className="notice">{t('demo')}</p>
        </div>
      </section>
      <section className="values section">
        <div className="wrap">
          <h2>{t('values')}</h2>
          <div className="three-col">
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <span className="value-number">0{n}</span>
                <h3>{t(`value${n}`)}</h3>
                <p>{t(`valDesc${n}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section">
        <h2>{t('adventures')}</h2>
        <div className="specialties">
          {['hiking', 'climbing', 'trek', 'ferrata'].map((c) => (
            <Link to={`/adventures?activity=${c}`} key={c}>
              {t(c)}
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
      <AdventureCTA />
    </>
  );
}
