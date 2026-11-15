import useCopy from '../hooks/useCopy';
import Button from './ui/Button';

export default function AdventureCTA() {
  const { t } = useCopy();
  return (
    <section className="closing">
      <p className="eyebrow">DOLOMITES · 46°29′ N 11°51′ E</p>
      <h2>{t('next')}</h2>
      <p>{t('small')}</p>
      <Button to="/contact" light>
        {t('plan')}
      </Button>
    </section>
  );
}
