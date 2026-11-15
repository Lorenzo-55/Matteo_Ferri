import { useEffect, useRef, useState } from 'react';

import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

import { gallery } from '../data/gallery';
import useCopy from '../hooks/useCopy';
import Photo from '../components/ui/Photo';
import PageTitle from '../components/ui/PageTitle';
import AdventureCTA from '../components/AdventureCTA';

export default function Gallery() {
  const { t, localize } = useCopy();
  const [category, setCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filteredPhotos = gallery.filter(
    (photo) => category === 'all' || photo.category === category,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const moveImage = (n: number) =>
    setActiveIndex((i) =>
      i === null ? null : (i + n + filteredPhotos.length) % filteredPhotos.length,
    );
  useEffect(() => {
    if (activeIndex !== null) {
      if (!dialogRef.current?.open) dialogRef.current?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeIndex]);
  return (
    <>
      <PageTitle
        label={t('galleryLabel')}
        title={t('images')}
        description={t('placeholder')}
      />
      <section className="wrap section">
        <div className="pills">
          {[
            'all',
            'landscapes',
            'hiking',
            'climbing',
            'refuges',
            'wildlife',
            'expedition',
          ].map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              className={category === c ? 'active' : ''}
              onClick={() => setCategory(c)}
            >
              {t(c === 'all' ? 'allPhotos' : c)}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filteredPhotos.map((photo, i) => (
            <button
              key={photo.id}
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setActiveIndex(i);
              }}
            >
              <Photo src={photo.image} alt={localize(photo.caption)} />
              <span>
                {localize(photo.caption)}
                <ArrowUpRight size={18} />
              </span>
            </button>
          ))}
        </div>
      </section>
      <dialog
        ref={dialogRef}
        className="lightbox"
        onCancel={(e) => {
          e.preventDefault();
          setActiveIndex(null);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveIndex(null);
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') moveImage(1);
          if (e.key === 'ArrowLeft') moveImage(-1);
        }}
      >
        <button
          className="lightbox-close"
          aria-label={t('close')}
          onClick={() => setActiveIndex(null)}
        >
          <X />
        </button>
        {activeIndex !== null && (
          <>
            <button aria-label={t('previous')} onClick={() => moveImage(-1)}>
              <ChevronLeft />
            </button>
            <figure>
              <Photo
                src={filteredPhotos[activeIndex].image}
                alt={localize(filteredPhotos[activeIndex].caption)}
              />
              <figcaption>
                {localize(filteredPhotos[activeIndex].caption)} · {activeIndex + 1} /{' '}
                {filteredPhotos.length}
              </figcaption>
            </figure>
            <button aria-label={t('nextImage')} onClick={() => moveImage(1)}>
              <ChevronRight />
            </button>
          </>
        )}
      </dialog>
      <AdventureCTA />
    </>
  );
}
