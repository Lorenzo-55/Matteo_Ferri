import { articles } from '../data/articles';
import useCopy from '../hooks/useCopy';
import PageTitle from '../components/ui/PageTitle';
import AdventureCTA from '../components/AdventureCTA';
import ArticleCard from '../components/journal/ArticleCard';

export default function Journal() {
  const { t } = useCopy();
  return (
    <>
      <PageTitle
        label={t('journalLabel')}
        title={t('stories')}
        description={t('storyIntro')}
      />
      <section className="wrap section three-col">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
      <AdventureCTA />
    </>
  );
}
