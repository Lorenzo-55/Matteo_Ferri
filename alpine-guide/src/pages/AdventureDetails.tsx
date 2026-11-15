import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowUpRight, Clock3, Mountain, MoveUpRight, Users } from 'lucide-react';

import { adventures } from '../data/adventures';
import useCopy from '../hooks/useCopy';
import Photo from '../components/ui/Photo';
import AdventureCard from '../components/adventures/AdventureCard';
import EquipmentChecklist from '../components/adventures/EquipmentChecklist';
import NotFound from './NotFound';
import getLocalDate from '../utils/getLocalDate';
const RouteExplorer = lazy(() => import('../components/RouteExplorer'));

export default function AdventureDetails() {
  const { slug } = useParams();
  const adventure = adventures.find((x) => x.slug === slug);
  const { t, localize } = useCopy();
  if (!adventure) return <NotFound />;
  return (
    <>
      <section className="detail-hero">
        <Photo
          eager
          src={adventure.image}
          alt={`${adventure.title} illustrated landscape`}
        />
        <div>
          <p className="eyebrow">
            {adventure.region} / {t(adventure.category)}
          </p>
          <h1>{adventure.title}</h1>
          <p>{localize(adventure.description)}</p>
        </div>
      </section>
      <div className="wrap stats">
        {[
          [
            <Clock3 size={19} />,
            adventure.days > 1
              ? `${adventure.days} ${t('days')}`
              : `${adventure.hours} ${t('hours')}`,
            t('duration'),
          ],
          [
            <MoveUpRight size={19} />,
            `${adventure.distance} km / +${adventure.gain} m`,
            t('route'),
          ],
          [
            <Mountain size={19} />,
            `${adventure.altitude} m`,
            t('difficulty') + ': ' + t(adventure.difficulty),
          ],
          [<Users size={19} />, '1–6', t('people')],
        ].map(([icon, v, label], i) => (
          <div key={i}>
            {icon}
            <strong>{v}</strong>
            <small>{label}</small>
          </div>
        ))}
      </div>
      <div className="wrap detail-layout">
        <article>
          <section>
            <p className="eyebrow">{t(adventure.category)}</p>
            <h2>{t('overview')}</h2>
            <p className="lede">
              {localize(adventure.description)} {t('philosophy')}
            </p>
            <ul className="highlights">
              <li>
                {adventure.region} · {t(adventure.season[0])}
              </li>
              <li>
                {adventure.altitude} m · {t('images')}
              </li>
              <li>{t('small')}</li>
            </ul>
          </section>
          <section>
            <h2>{t('itinerary')}</h2>
            {Array.from({ length: adventure.days === 1 ? 3 : adventure.days }, (_, i) => (
              <details key={i} open={i === 0}>
                <summary>
                  <span>0{i + 1}</span>
                  {t('day')} {i + 1} ·{' '}
                  {i === 0
                    ? t('meeting')
                    : i === (adventure.days === 1 ? 2 : adventure.days - 1)
                      ? t('images')
                      : t('overview')}
                </summary>
                <p>
                  {localize(adventure.description)} {t('routeNote')}
                </p>
              </details>
            ))}
          </section>
          <section>
            <h2>{t('route')}</h2>
            <Suspense fallback={<p>…</p>}>
              <RouteExplorer adventure={adventure} />
            </Suspense>
          </section>
          <section>
            <h2>{t('equipment')}</h2>
            <EquipmentChecklist key={adventure.slug} adventure={adventure} />
          </section>
          <section className="two-col">
            <div>
              <h3>{t('included')}</h3>
              <p>{t('includeText')}</p>
            </div>
            <div>
              <h3>{t('excluded')}</h3>
              <p>{t('excludeText')}</p>
            </div>
            <div>
              <h3>{t('requirements')}</h3>
              <p>{t('reqText')}</p>
            </div>
            <div>
              <h3>{t('meeting')}</h3>
              <p>
                {adventure.region} · {t('routeNote')}
              </p>
            </div>
          </section>
          <section>
            <h2>{t('faq')}</h2>
            {['faq', 'season'].map((k) => (
              <details key={k}>
                <summary>{t(`${k}Q`)}</summary>
                <p>{t(`${k}A`)}</p>
              </details>
            ))}
          </section>
        </article>
        <aside>
          <p className="eyebrow">{t('from')}</p>
          <p className="price">
            €{adventure.price}
            <small> / {t('people').toLowerCase()}</small>
          </p>
          <p>
            {t(adventure.difficulty)} · {adventure.season.map((s) => t(s)).join(' / ')}
          </p>
          <form action="/contact">
            <input type="hidden" name="adventure" value={adventure.slug} />
            <label>
              {t('date')}
              <input name="date" type="date" min={getLocalDate(1)} />
            </label>
            <label>
              {t('people')}
              <select name="people">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <button className="button" type="submit">
              {t('plan')}
              <ArrowUpRight size={18} />
            </button>
          </form>
          <p className="notice">{t('demo')}</p>
        </aside>
      </div>
      <section className="wrap section">
        <h2>{t('selected')}</h2>
        <div className="adventure-grid">
          {adventures
            .filter((x) => x.slug !== adventure.slug)
            .slice(0, 3)
            .map((x) => (
              <AdventureCard key={x.slug} adventure={x} />
            ))}
        </div>
      </section>
    </>
  );
}
