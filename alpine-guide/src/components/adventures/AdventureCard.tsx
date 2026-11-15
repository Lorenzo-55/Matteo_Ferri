import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock3 } from 'lucide-react';

import type { Adventure } from '../../types/content';
import useCopy from '../../hooks/useCopy';
import Photo from '../ui/Photo';

export default function AdventureCard({ adventure }: { adventure: Adventure }) {
  const { t, localize } = useCopy();
  return (
    <Link className="adventure-card" to={`/adventures/${adventure.slug}`}>
      <div className="card-image">
        <Photo
          src={adventure.image}
          alt={`${adventure.title} illustrated mountain placeholder`}
        />
        <span className="tag">{t(adventure.category)}</span>
        <span className="image-arrow">
          <ArrowUpRight size={24} />
        </span>
      </div>
      <div className="card-meta">
        <span>{adventure.region}</span>
        <span>{t(adventure.difficulty)}</span>
      </div>
      <h3>{adventure.title}</h3>
      <p>{localize(adventure.description)}</p>
      <div className="card-bottom">
        <span>
          <Clock3 size={14} />
          {adventure.days > 1
            ? `${adventure.days} ${t('days')}`
            : `${adventure.hours} ${t('hours')}`}
        </span>
        <span>↗ {adventure.gain} m</span>
        <strong>
          {t('from')} €{adventure.price}
        </strong>
      </div>
    </Link>
  );
}
