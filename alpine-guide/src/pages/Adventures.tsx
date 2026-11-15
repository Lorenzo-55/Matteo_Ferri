import { useSearchParams } from 'react-router-dom';
import { Mountain } from 'lucide-react';
import { adventures } from '../data/adventures';
import useCopy from '../hooks/useCopy';
import PageTitle from '../components/ui/PageTitle';
import AdventureCard from '../components/adventures/AdventureCard';
import AdventureCTA from '../components/AdventureCTA';

export default function Adventures() {
  const { t } = useCopy();
  const [params, setParams] = useSearchParams();
  const getFilterValue = (key: string) => params.get(key) || '';
  const updateFilter = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setParams(next, { replace: true });
  };
  const difficultyOrder = ['easy', 'moderate', 'challenging', 'advanced'];
  let results = adventures.filter(
    (adventure) =>
      (!getFilterValue('q') ||
        `${adventure.title} ${adventure.region}`
          .toLowerCase()
          .includes(getFilterValue('q').toLowerCase())) &&
      (!getFilterValue('activity') ||
        adventure.category === getFilterValue('activity')) &&
      (!getFilterValue('difficulty') ||
        adventure.difficulty === getFilterValue('difficulty')) &&
      (!getFilterValue('region') || adventure.region === getFilterValue('region')) &&
      (!getFilterValue('season') ||
        adventure.season.some((s) => s === getFilterValue('season'))) &&
      (!getFilterValue('duration') ||
        (getFilterValue('duration') === 'day'
          ? adventure.days === 1
          : adventure.days > 1)),
  );
  results = [...results].sort((first, second) => {
    switch (getFilterValue('sort')) {
      case 'price':
        return first.price - second.price;
      case 'duration':
        return first.hours - second.hours;
      case 'difficulty':
        return (
          difficultyOrder.indexOf(first.difficulty) -
          difficultyOrder.indexOf(second.difficulty)
        );
      default:
        return 0;
    }
  });

  return (
    <>
      <PageTitle
        label={t('adventureLabel')}
        title={t('adventures')}
        description={t('selectedSub')}
      />
      <section className="wrap catalog">
        <div className="filters">
          <label className="search">
            {t('search')}
            <input
              type="search"
              value={getFilterValue('q')}
              onChange={(e) => updateFilter('q', e.target.value)}
              placeholder="Tre Cime, Seceda…"
            />
          </label>
          {[
            ['activity', ['hiking', 'climbing', 'trek', 'ferrata']],
            ['difficulty', difficultyOrder],
            ['duration', ['day', 'multi']],
            ['region', [...new Set(adventures.map((adventure) => adventure.region))]],
            ['season', ['summer', 'autumn', 'spring']],
          ].map(([key, options]) => (
            <label key={key as string}>
              {t(key as string)}
              <select
                value={getFilterValue(key as string)}
                onChange={(e) => updateFilter(key as string, e.target.value)}
              >
                <option value="">{t('any')}</option>
                {(options as string[]).map((o) => (
                  <option key={o} value={o}>
                    {o === 'day'
                      ? `1 ${t('day')}`
                      : o === 'multi'
                        ? `2+ ${t('days')}`
                        : t(o)}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button className="reset" onClick={() => setParams({})}>
            {t('reset')}
          </button>
        </div>
        <div className="results-bar">
          <span aria-live="polite">
            {results.length} {t('results')}
          </span>
          <label>
            {t('sort')}{' '}
            <select
              value={getFilterValue('sort')}
              onChange={(e) => updateFilter('sort', e.target.value)}
            >
              <option value="">{t('any')}</option>
              {['price', 'duration', 'difficulty'].map((o) => (
                <option key={o} value={o}>
                  {t(o)}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="adventure-grid">
          {results.map((adventure) => (
            <AdventureCard key={adventure.slug} adventure={adventure} />
          ))}
        </div>
        {!results.length && (
          <div className="empty">
            <Mountain />
            <h3>{t('empty')}</h3>
            <button onClick={() => setParams({})}>{t('reset')}</button>
          </div>
        )}
      </section>
      <AdventureCTA />
    </>
  );
}
