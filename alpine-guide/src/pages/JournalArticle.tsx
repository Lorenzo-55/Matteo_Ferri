import { Link, useParams } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import useCopy from '../hooks/useCopy';
import Photo from '../components/ui/Photo';
import PageTitle from '../components/ui/PageTitle';
import ArticleCard from '../components/journal/ArticleCard';
import NotFound from './NotFound';

export default function JournalArticle() {
  const { slug } = useParams();
  const article = articles.find((article) => article.slug === slug);
  const { t, localize, lang } = useCopy();
  if (!article) return <NotFound />;
  return (
    <>
      <PageTitle
        label={`${localize(article.category)} / ${article.minutes} ${t('reading')}`}
        title={localize(article.title)}
        description={localize(article.description)}
      />
      <Photo
        eager
        className="article-cover"
        src={article.image}
        alt={localize(article.title)}
      />
      <article className="reading">
        <p className="eyebrow">
          MATTEO FERRI ·{' '}
          {new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(
            new Date(article.date),
          )}
        </p>
        <p className="notice">{t('demo')}</p>
        {article.paragraphs.map((p, i) => (
          <p key={i}>{localize(p)}</p>
        ))}
        <Photo src="/images/mountain-2.svg" alt={t('placeholder')} />
        <Link className="text-link dark" to="/journal">
          {t('journal')}
          <ArrowRight size={17} />
        </Link>
      </article>
      <section className="wrap section">
        <h2>{t('stories')}</h2>
        <div className="two-col">
          {articles
            .filter((x) => x.slug !== slug)
            .map((x) => (
              <ArticleCard key={x.slug} article={x} />
            ))}
        </div>
      </section>
    </>
  );
}
