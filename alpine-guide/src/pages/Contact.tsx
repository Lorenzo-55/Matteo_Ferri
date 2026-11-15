import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

import { adventures } from '../data/adventures';
import useCopy from '../hooks/useCopy';
import Photo from '../components/ui/Photo';
import PageTitle from '../components/ui/PageTitle';
import getLocalDate from '../utils/getLocalDate';

export default function Contact() {
  const { t } = useCopy();
  const [params] = useSearchParams();
  const [fields, setFields] = useState({
    name: '',
    email: '',
    adventure: adventures.some((a) => a.slug === params.get('adventure'))
      ? params.get('adventure')!
      : '',
    date: params.get('date') || '',
    people: params.get('people') || '1',
    level: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const confirmationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sent) confirmationRef.current?.focus();
  }, [sent]);
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const validationErrors: Record<string, string> = {};

    for (const key of ['name', 'email', 'adventure', 'date', 'level'] as const) {
      if (!fields[key].trim()) {
        validationErrors[key] = 'required';
      }
    }

    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      validationErrors.email = 'emailError';
    }

    if (fields.date && fields.date <= getLocalDate()) {
      validationErrors.date = 'dateError';
    }

    if (
      !Number.isInteger(Number(fields.people)) ||
      +fields.people < 1 ||
      +fields.people > 6
    ) {
      validationErrors.people = 'peopleError';
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) {
      document.getElementById(Object.keys(validationErrors)[0])?.focus();
      return;
    }
    setSent(true);
  }
  const getFieldProps = (key: keyof typeof fields) => ({
    id: key,
    name: key,
    value: fields[key],
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => setFields({ ...fields, [key]: e.target.value }),
    'aria-invalid': !!errors[key],
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  });
  const renderFieldError = (key: string) =>
    errors[key] && (
      <span id={`${key}-error`} className="error">
        {t(errors[key])}
      </span>
    );
  return (
    <>
      <PageTitle
        label={t('contactLabel')}
        title={t('inquiry')}
        description={t('small')}
      />
      <section className="wrap contact-layout">
        <div>
          <Photo eager src="/images/mountain-3.svg" alt={t('placeholder')} />
          <h3>{t('calling')}</h3>
          <p>{t('philosophy')}</p>
          <p className="notice">{t('noDelivery')}</p>
        </div>
        {sent ? (
          <div className="confirmation" ref={confirmationRef} tabIndex={-1} role="status">
            <Check size={40} />
            <h2>{t('sent')}</h2>
            <p>
              {fields.name} · {adventures.find((a) => a.slug === fields.adventure)?.title}{' '}
              · {fields.date} · {fields.people}
            </p>
            <button className="button" onClick={() => setSent(false)}>
              {t('back')}
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit}>
            <div className="two-col">
              <label htmlFor="name">
                {t('name')} *
                <input {...getFieldProps('name')} autoComplete="name" required />
                {renderFieldError('name')}
              </label>
              <label htmlFor="email">
                {t('email')} *
                <input
                  {...getFieldProps('email')}
                  type="email"
                  autoComplete="email"
                  required
                />
                {renderFieldError('email')}
              </label>
            </div>
            <label htmlFor="adventure">
              {t('adventures')} *
              <select {...getFieldProps('adventure')} required>
                <option value="">{t('select')}</option>
                {adventures.map((a) => (
                  <option value={a.slug} key={a.slug}>
                    {a.title}
                  </option>
                ))}
              </select>
              {renderFieldError('adventure')}
            </label>
            <div className="two-col">
              <label htmlFor="date">
                {t('date')} *
                <input
                  {...getFieldProps('date')}
                  type="date"
                  min={getLocalDate(1)}
                  required
                />
                {renderFieldError('date')}
              </label>
              <label htmlFor="people">
                {t('people')} *
                <input
                  {...getFieldProps('people')}
                  type="number"
                  min="1"
                  max="6"
                  required
                />
                {renderFieldError('people')}
              </label>
            </div>
            <label htmlFor="level">
              {t('level')} *
              <select {...getFieldProps('level')} required>
                <option value="">—</option>
                {['begin', 'some', 'experienced'].map((k) => (
                  <option key={k} value={k}>
                    {t(k)}
                  </option>
                ))}
              </select>
              {renderFieldError('level')}
            </label>
            <label htmlFor="message">
              {t('message')}
              <textarea {...getFieldProps('message')} rows={5} />
            </label>
            <p className="notice">{t('noDelivery')}</p>
            <button className="button" type="submit">
              {t('send')}
              <ArrowUpRight size={18} />
            </button>
          </form>
        )}
      </section>
    </>
  );
}
