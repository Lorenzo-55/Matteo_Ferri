import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Mountain } from 'lucide-react';

import { adventures } from '../data/adventures';
import { articles } from '../data/articles';
import { gallery } from '../data/gallery';
import useCopy from '../hooks/useCopy';
import Photo from '../components/ui/Photo';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import AdventureCard from '../components/adventures/AdventureCard';
import AdventureCTA from '../components/AdventureCTA';
import ArticleCard from '../components/journal/ArticleCard';

export default function Home() {
  const { t, localize } = useCopy();
  return (
    <>
      <section className="hero">
        <Photo
          eager
          className="hero-image"
          src="/images/mountain-1.svg"
          alt="Illustrated Dolomite limestone towers above a quiet alpine valley"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {t('location')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {t('hero')}
            <br />
            <em>{t('hero2')}</em>
          </motion.h1>
          <p>{t('intro')}</p>
          <div className="hero-actions">
            <Button to="/adventures" light>
              {t('explore')}
            </Button>
            <Link className="text-link" to="/about">
              {t('meet')}
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#introduction">
            <ArrowDown size={16} /> {t('calling')}
          </a>
          <span>
            01 — 04 <i /> {t('placeholder')}
          </span>
        </div>
      </section>
      <section id="introduction" className="intro wrap">
        <p className="eyebrow">A LITTLE CLOSER TO THE WILD</p>
        <Reveal>
          <h2>{t('calling')}</h2>
          <p>{t('philosophy')}</p>
          <Link className="text-link dark" to="/about">
            {t('meet')} <ArrowUpRight size={18} />
          </Link>
        </Reveal>
        <Mountain className="intro-mountain" strokeWidth={0.5} />
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / {t('adventures')}</p>
            <h2>{t('selected')}</h2>
            <p>{t('selectedSub')}</p>
          </div>
          <Link className="text-link dark" to="/adventures">
            {t('all')}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="adventure-grid">
          {adventures.slice(0, 3).map((adventure) => (
            <Reveal key={adventure.slug}>
              <AdventureCard adventure={adventure} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="categories">
        {(['hiking', 'climbing', 'trek', 'ferrata'] as const).map((c, i) => (
          <Link key={c} to={`/adventures?activity=${c}`}>
            <Photo src={`/images/mountain-${i + 1}.svg`} alt={t(c)} />
            <span className="eyebrow">0{i + 1} /</span>
            <h3>{t(c)}</h3>
            <ArrowUpRight size={25} />
          </Link>
        ))}
      </section>
      <section className="guide-section wrap section">
        <div className="guide-image">
          <Photo
            src="/images/mountain-4.svg"
            alt="Illustrated alpine landscape, awaiting fictional guide portrait"
          />
          <span className="photo-note">{t('placeholder')}</span>
        </div>
        <Reveal>
          <p className="eyebrow">02 / {t('aboutLabel')}</p>
          <h2>{t('life')}</h2>
          <p className="lede">{t('bio')}</p>
          <div className="signature">Matteo Ferri</div>
          <Button to="/about">{t('more')}</Button>
        </Reveal>
      </section>
      <section className="values">
        <div className="wrap">
          <p className="eyebrow">THE WAY WE GO</p>
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
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / {t('gallery')}</p>
            <h2>{t('images')}</h2>
          </div>
          <Link className="text-link dark" to="/gallery">
            {t('gallery')}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="gallery-preview">
          {gallery.slice(0, 3).map((photo) => (
            <Link to="/gallery" key={photo.id}>
              <Photo src={photo.image} alt={localize(photo.caption)} />
            </Link>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / {t('journal')}</p>
            <h2>{t('stories')}</h2>
          </div>
          <Link className="text-link dark" to="/journal">
            {t('journal')}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="three-col">
          {articles.map((adventure) => (
            <ArticleCard key={adventure.slug} article={adventure} />
          ))}
        </div>
      </section>
      <AdventureCTA />
    </>
  );
}
