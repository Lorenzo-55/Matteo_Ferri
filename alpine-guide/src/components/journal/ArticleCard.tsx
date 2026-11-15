import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Article } from '../../types/content';
import useCopy from '../../hooks/useCopy';
import Photo from '../ui/Photo';

export default function ArticleCard({ article }: { article: Article }) {
  const { t, localize, lang } = useCopy();
  return (
    <Link className="article-card" to={`/journal/${article.slug}`}>
      <Photo src={article.image} alt={localize(article.title)} />
      <p className="eyebrow">
        {localize(article.category)} / {article.minutes} {t('reading')}
      </p>
      <h3>{localize(article.title)}</h3>
      <p>{localize(article.description)}</p>
      <span className="article-date">
        {new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(
          new Date(article.date),
        )}
      </span>
      <span className="text-link dark">
        {t('read')}
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}
