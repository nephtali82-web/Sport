import { useState } from 'react';
import type { Exercise, ExerciseInfo, GoalData } from '../data/gymData';

interface SetRowData { weight: string; reps: string; done: boolean }

interface ExerciseCardProps {
  id: string;
  ex: Exercise;
  info: ExerciseInfo | undefined;
  week: number;
  goal: GoalData;
  isHidden: boolean;
  isSwapped: boolean;
  muscleGroup: string;
  getSets: (setNum: number) => SetRowData;
  onUpdateSet: (setNum: number, field: 'weight' | 'reps' | 'done', value: string | boolean) => void;
  onClear: () => void;
  onSetGoal: (goal: GoalData) => void;
  onToggleHide: () => void;
  onOpenLibrary: () => void;
}

const TAG_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  red:    { bg: 'rgba(201,76,76,.15)',   border: 'rgba(201,76,76,.25)',   text: '#C94C4C' },
  gold:   { bg: 'rgba(201,168,76,.12)',  border: 'rgba(201,168,76,.25)',  text: '#C9A84C' },
  blue:   { bg: 'rgba(76,142,201,.12)',  border: 'rgba(76,142,201,.25)',  text: '#4C8EC9' },
  green:  { bg: 'rgba(76,201,122,.12)',  border: 'rgba(76,201,122,.25)',  text: '#4CC97A' },
  purple: { bg: 'rgba(155,110,201,.12)', border: 'rgba(155,110,201,.25)', text: '#9B6EC9' },
};

export default function ExerciseCard({
  id, ex, info, week, goal, isHidden, isSwapped,
  getSets, onUpdateSet, onClear, onSetGoal, onToggleHide, onOpenLibrary,
}: ExerciseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [goalKg, setGoalKg] = useState(String(goal.kg));
  const [goalReps, setGoalReps] = useState(String(goal.repsTarget));

  const doneSets = Array.from({ length: ex.sets }, (_, i) => i + 1).filter(s => getSets(s).done).length;
  const totalSets = ex.sets;
  const progress = totalSets > 0 ? doneSets / totalSets : 0;
  const circumference = 2 * Math.PI * 9;
  const dashOffset = circumference * (1 - progress);

  const handleSaveGoal = () => {
    onSetGoal({ ...goal, kg: parseFloat(goalKg) || 0, repsTarget: parseInt(goalReps) || goal.repsMin, auto: false });
  };

  const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.ytq)}`;

  // ── HIDDEN STATE ────────────────────────────────────────────────────────────
  if (isHidden) {
    return (
      <div className="exercise-card ex-hidden-card">
        <div className="ex-hidden-row">
          <span className="ex-hidden-name">{ex.name}</span>
          <div className="ex-hidden-actions">
            <button className="ex-icon-btn" onClick={onOpenLibrary} title="Übung tauschen">🔄</button>
            <button className="ex-icon-btn ex-icon-btn-show" onClick={onToggleHide} title="Einblenden">👁 Anzeigen</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="exercise-card" style={{ borderColor: expanded ? 'rgba(201,168,76,.2)' : undefined }}>
      <div className="exercise-main" onClick={() => setExpanded(!expanded)}>
        <div className="ex-num">{ex.num}</div>
        <div>
          <div className="ex-name">
            {ex.name}
            {isSwapped && <span className="ex-swapped-badge">🔄 Variiert</span>}
          </div>
          <div className="ex-meta">
            <span>{ex.sets} Sätze</span>
            <span>{ex.reps} Wdh</span>
            <span>{ex.rest}</span>
          </div>
          <div className="ex-tags">
            {ex.tags.map(([color, label], i) => {
              const c = TAG_COLORS[color] || TAG_COLORS.gold;
              return <span key={i} className="tag" style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>{label}</span>;
            })}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} onClick={e => e.stopPropagation()}>
          <button className="ex-icon-btn" onClick={onOpenLibrary} title="Übung tauschen">🔄</button>
          <button className="ex-icon-btn" onClick={onToggleHide} title="Ausblenden">👁</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} onClick={() => setExpanded(!expanded)}>
            <div className="ex-ring">
              <svg viewBox="0 0 22 22" width="22" height="22">
                <circle className="ex-ring-bg" cx="11" cy="11" r="9" />
                <circle className="ex-ring-fill" cx="11" cy="11" r="9"
                  strokeDasharray={`${circumference}`} strokeDashoffset={dashOffset}
                  style={{ stroke: progress === 1 ? '#4CC97A' : progress > 0 ? '#C9A84C' : 'rgba(255,255,255,.1)' }}
                />
              </svg>
            </div>
            <div className="toggle-icon" style={expanded ? { background: 'rgba(201,168,76,.1)', borderColor: 'rgba(201,168,76,.6)' } : {}}>
              {expanded ? '−' : '+'}
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="ex-info">
          {info && (
            <div className="geraet-box">
              <div className="geraet-title">🏗️ GERÄT</div>
              <div className="geraet-text">{info.geraet}</div>
            </div>
          )}
          {info && (info.muskeln.p.length > 0 || info.muskeln.s.length > 0) && (
            <div className="muskel-box">
              <div className="muskel-title">💪 MUSKELN</div>
              <div className="mc-label">Hauptmuskeln</div>
              <div className="muskel-chips">
                {info.muskeln.p.map((m, i) => <span key={i} className="muskel-chip mc-primary">{m}</span>)}
              </div>
              {info.muskeln.s.length > 0 && (
                <>
                  <div className="mc-label" style={{ marginTop: '5px' }}>Unterstützend</div>
                  <div className="muskel-chips">
                    {info.muskeln.s.map((m, i) => <span key={i} className="muskel-chip mc-secondary">{m}</span>)}
                  </div>
                </>
              )}
            </div>
          )}
          <div className="exercise-tip"><strong>Tipp:</strong> {ex.tip}</div>
          <a href={ytUrl} target="_blank" rel="noopener noreferrer" className="yt-btn">▶ YouTube Technik-Demo</a>

          <div className="goal-banner gb-gold" style={{ margin: '0 12px 10px' }}>
            <div className="gb-inner">
              <div className="gb-row">
                <div>
                  <div className="gb-label" style={{ color: '#C9A84C' }}>Ziel Woche {week}</div>
                  <div className="gb-target" style={{ color: '#C9A84C' }}>{goal.kg} kg × {goal.repsTarget} Wdh</div>
                  {goal.bumped && <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#4CC97A', marginTop: '2px' }}>↑ Gewicht erhöht (Double Progression)</div>}
                  {goal.auto && !goal.bumped && <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#7A7060', marginTop: '2px' }}>Auto-berechnet aus Vorwoche</div>}
                </div>
              </div>
              <div className="gb-edit-row">
                <div className="gb-edit-label">Ziel:</div>
                <input type="number" className="gb-inp" value={goalKg} onChange={e => setGoalKg(e.target.value)} placeholder="kg" />
                <span className="gb-inp-sep">kg ×</span>
                <input type="number" className="gb-inp" value={goalReps} onChange={e => setGoalReps(e.target.value)} placeholder="Wdh" />
                <button className="gb-save-btn" onClick={handleSaveGoal}>Speichern</button>
              </div>
            </div>
          </div>

          <div className="set-logger" style={{ display: 'block' }}>
            <div className="log-title">Sätze loggen</div>
            <div className="set-input-header">
              <span></span><span>KG</span><span>WDH</span><span>✓</span>
            </div>
            <div className="set-rows">
              {Array.from({ length: ex.sets }, (_, i) => i + 1).map(setNum => {
                const sd = getSets(setNum);
                return (
                  <div key={setNum} className="set-row">
                    <div className="set-label">{setNum}</div>
                    <input type="number" className={`set-input ${sd.weight ? 'filled' : ''}`} placeholder={String(goal.kg || '')} value={sd.weight} onChange={e => onUpdateSet(setNum, 'weight', e.target.value)} />
                    <input type="number" className={`set-input ${sd.reps ? 'filled' : ''}`} placeholder={String(goal.repsTarget || ex.repsMin)} value={sd.reps} onChange={e => onUpdateSet(setNum, 'reps', e.target.value)} />
                    <button className={`sdone ${sd.done ? 'done' : ''}`} onClick={() => onUpdateSet(setNum, 'done', !sd.done)}>✓</button>
                  </div>
                );
              })}
            </div>
            <button className="clear-btn" onClick={onClear}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}
