import { Mountain } from 'lucide-react';
import useCopy from '../hooks/useCopy';
import Button from '../components/ui/Button';

export default function NotFound() {
  const { t } = useCopy();
  return (
    <div className="wrap empty">
      <Mountain size={60} />
      <h1>{t('notFound')}</h1>
      <Button to="/adventures">{t('back')}</Button>
    </div>
  );
}
