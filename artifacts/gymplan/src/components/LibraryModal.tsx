import { useState } from 'react';
import { EX, INFO, LIBRARY_GROUPS, SECTION_TO_GROUP } from '../data/gymData';

interface LibraryModalProps {
  sectionTitle: string;
  currentDisplayId: string;
  onSelect: (libId: string) => void;
  onReset: () => void;
  onClose: () => void;
  isSwapped: boolean;
}

const TAG_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  red:    { bg: 'rgba(201,76,76,.15)',   border: 'rgba(201,76,76,.25)',   text: '#C94C4C' },
  gold:   { bg: 'rgba(201,168,76,.12)',  border: 'rgba(201,168,76,.25)',  text: '#C9A84C' },
  blue:   { bg: 'rgba(76,142,201,.12)',  border: 'rgba(76,142,201,.25)',  text: '#4C8EC9' },
  green:  { bg: 'rgba(76,201,122,.12)',  border: 'rgba(76,201,122,.25)',  text: '#4CC97A' },
  purple: { bg: 'rgba(155,110,201,.12)', border: 'rgba(155,110,201,.25)', text: '#9B6EC9' },
};

export default function LibraryModal({ sectionTitle, currentDisplayId, onSelect, onReset, onClose, isSwapped }: LibraryModalProps) {
  const groupKey = SECTION_TO_GROUP[sectionTitle] || '';
  const allGroupKeys = Object.keys(LIBRARY_GROUPS);
  const [activeGroup, setActiveGroup] = useState(groupKey || allGroupKeys[0]);

  const group = LIBRARY_GROUPS[activeGroup];
  const exercises = group ? group.ids.map(id => ({ id, ex: EX[id], info: INFO[id] })).filter(e => e.ex) : [];

  return (
    <div
      className="lib-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="lib-sheet">
        <div className="bs-handle" />
        <div className="lib-header">
          <div>
            <div className="lib-eyebrow">Übungsbibliothek</div>
            <div className="lib-title">{sectionTitle}</div>
          </div>
          <button className="lib-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Muscle group tabs */}
        <div className="lib-group-tabs">
          {allGroupKeys.map(key => (
            <button
              key={key}
              className={`lib-group-tab ${activeGroup === key ? 'active' : ''}`}
              onClick={() => setActiveGroup(key)}
            >
              {LIBRARY_GROUPS[key].label}
            </button>
          ))}
        </div>

        {/* Exercise list */}
        <div className="lib-list">
          {exercises.map(({ id, ex, info }) => {
            const isCurrent = id === currentDisplayId;
            return (
              <button
                key={id}
                className={`lib-ex-item ${isCurrent ? 'active' : ''}`}
                onClick={() => { onSelect(id); onClose(); }}
              >
                <div className="lib-ex-top">
                  <div className="lib-ex-name">{ex.name}</div>
                  {isCurrent && <span className="lib-current-badge">Aktiv</span>}
                </div>
                <div className="lib-ex-meta">
                  {ex.sets} Sätze · {ex.reps} Wdh · {ex.rest} Pause
                </div>
                {info && (
                  <div className="lib-ex-muscles">
                    {info.muskeln.p.slice(0, 2).map((m, i) => (
                      <span key={i} className="lib-muscle-chip">{m}</span>
                    ))}
                  </div>
                )}
                <div className="lib-ex-tags">
                  {ex.tags.map(([color, label], i) => {
                    const c = TAG_COLORS[color] || TAG_COLORS.gold;
                    return (
                      <span key={i} className="tag" style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>
                        {label}
                      </span>
                    );
                  })}
                </div>
              </button>
            );
          })}
        </div>

        {isSwapped && (
          <div style={{ padding: '0 16px 8px' }}>
            <button className="lib-reset-btn" onClick={() => { onReset(); onClose(); }}>
              ↩ Originalübung wiederherstellen
            </button>
          </div>
        )}
        <div style={{ height: 'calc(16px + var(--safe-bot))' }} />
      </div>
    </div>
  );
}
