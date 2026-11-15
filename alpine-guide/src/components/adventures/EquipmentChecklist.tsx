import { useState } from 'react';
import { equipment, technical } from '../../data/equipment';

import type { Adventure } from '../../types/content';
import useCopy from '../../hooks/useCopy';

export default function EquipmentChecklist({ adventure }: { adventure: Adventure }) {
  const { t, localize } = useCopy();
  const key = `alpine-checklist-${adventure.slug}`;
  const [checked, setChecked] = useState<string[]>(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(data)
        ? data.filter((x: unknown) => typeof x === 'string')
        : [];
    } catch {
      return [];
    }
  });
  const groups =
    adventure.category === 'climbing' || adventure.category === 'ferrata'
      ? [
          ...equipment,
          {
            category: { en: 'Technical equipment', it: 'Attrezzatura tecnica' },
            items: [technical],
          },
        ]
      : equipment;
  const count = groups.reduce((n, g) => n + g.items.length, 0);
  function toggle(id: string) {
    const next = checked.includes(id)
      ? checked.filter((v) => v !== id)
      : [...checked, id];
    setChecked(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      /* optional */
    }
  }
  return (
    <>
      <p className="notice">{t('equipmentNote')}</p>
      <p className="eyebrow" aria-live="polite">
        {checked.length} / {count} {t('saved')}
      </p>
      <div className="checklist">
        {groups.map((g, i) => (
          <fieldset key={i}>
            <legend>{localize(g.category)}</legend>
            {g.items.map((item, j) => (
              <label key={j}>
                <input
                  type="checkbox"
                  checked={checked.includes(`${i}-${j}`)}
                  onChange={() => toggle(`${i}-${j}`)}
                />
                {localize(item)}
              </label>
            ))}
          </fieldset>
        ))}
      </div>
    </>
  );
}
