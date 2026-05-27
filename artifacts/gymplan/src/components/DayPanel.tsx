import { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import LibraryModal from './LibraryModal';
import { EX, INFO, DAY_SECTIONS, DAY_META } from '../data/gymData';
import type { GoalData } from '../data/gymData';

interface DayPanelProps {
  day: string;
  week: number;
  hidden: string[];
  swaps: Record<string, string>;
  getSets: (exId: string, setNum: number) => { weight: string; reps: string; done: boolean };
  onUpdateSet: (exId: string, setNum: number, field: 'weight' | 'reps' | 'done', value: string | boolean) => void;
  onClear: (exId: string) => void;
  getGoal: (id: string, w: number) => GoalData;
  setGoal: (id: string, w: number, goal: GoalData) => void;
  onToggleHide: (exId: string) => void;
  onSwap: (originalId: string, newId: string) => void;
  onResetSwap: (originalId: string) => void;
}

const BADGE_STYLE: Record<string, { background: string; border: string; color: string }> = {
  mo: { background: 'rgba(201,76,76,.1)',   border: '1px solid rgba(201,76,76,.3)',   color: '#C94C4C' },
  mi: { background: 'rgba(76,142,201,.1)',  border: '1px solid rgba(76,142,201,.3)',  color: '#4C8EC9' },
  fr: { background: 'rgba(76,201,122,.1)',  border: '1px solid rgba(76,201,122,.3)',  color: '#4CC97A' },
  so: { background: 'rgba(201,76,76,.1)',   border: '1px solid rgba(201,76,76,.3)',   color: '#C94C4C' },
};

export default function DayPanel({ day, week, hidden, swaps, getSets, onUpdateSet, onClear, getGoal, setGoal, onToggleHide, onSwap, onResetSwap }: DayPanelProps) {
  const meta = DAY_META[day];
  const dayData = DAY_SECTIONS[day];
  const badge = BADGE_STYLE[day] || BADGE_STYLE.mo;

  const [libraryTarget, setLibraryTarget] = useState<string | null>(null);
  const [librarySectionTitle, setLibrarySectionTitle] = useState('');

  if (!meta || !dayData) return null;

  const dayNames: Record<string, string> = { mo: 'Montag', mi: 'Mittwoch', fr: 'Freitag', so: 'Sonntag' };

  const openLibrary = (exId: string, sectionTitle: string) => {
    setLibraryTarget(exId);
    setLibrarySectionTitle(sectionTitle);
  };

  const handleLibrarySelect = (libId: string) => {
    if (libraryTarget) onSwap(libraryTarget, libId);
    setLibraryTarget(null);
  };

  const handleLibraryReset = () => {
    if (libraryTarget) onResetSwap(libraryTarget);
    setLibraryTarget(null);
  };

  return (
    <div className="day-panel-content">
      {/* Library Modal */}
      {libraryTarget && (
        <LibraryModal
          sectionTitle={librarySectionTitle}
          currentDisplayId={swaps[libraryTarget] || libraryTarget}
          onSelect={handleLibrarySelect}
          onReset={handleLibraryReset}
          onClose={() => setLibraryTarget(null)}
          isSwapped={!!swaps[libraryTarget]}
        />
      )}

      <div className="day-badge" style={badge}>
        {meta.emoji} {dayNames[day]} — {meta.label}
      </div>

      <div className="charles-note">
        <strong>Trainingshinweis — {meta.label}</strong>
        {dayData.note}
      </div>

      {dayData.sections.map((section, si) => {
        const visibleIds = section.ids.filter(id => !hidden.includes(id));
        const hiddenIds  = section.ids.filter(id =>  hidden.includes(id));

        return (
          <div key={si}>
            {si > 0 && <div className="divider" />}
            <div className="section-header">
              <div className="section-title">{section.title}</div>
              <div className="section-badge">{section.badge}</div>
            </div>

            {/* Visible exercises */}
            {visibleIds.map(id => {
              const displayId = swaps[id] || id;
              const ex   = EX[displayId]   || EX[id];
              const info = INFO[displayId] || INFO[id];
              if (!ex) return null;
              return (
                <ExerciseCard
                  key={id}
                  id={id}
                  ex={ex}
                  info={info}
                  week={week}
                  goal={getGoal(id, week)}
                  isHidden={false}
                  isSwapped={!!swaps[id]}
                  muscleGroup={section.title}
                  getSets={setNum => getSets(id, setNum)}
                  onUpdateSet={(setNum, field, value) => onUpdateSet(id, setNum, field, value)}
                  onClear={() => onClear(id)}
                  onSetGoal={goal => setGoal(id, week, goal)}
                  onToggleHide={() => onToggleHide(id)}
                  onOpenLibrary={() => openLibrary(id, section.title)}
                />
              );
            })}

            {/* Hidden exercises (collapsed) */}
            {hiddenIds.map(id => {
              const displayId = swaps[id] || id;
              const ex = EX[displayId] || EX[id];
              if (!ex) return null;
              return (
                <ExerciseCard
                  key={id}
                  id={id}
                  ex={ex}
                  info={INFO[displayId] || INFO[id]}
                  week={week}
                  goal={getGoal(id, week)}
                  isHidden={true}
                  isSwapped={!!swaps[id]}
                  muscleGroup={section.title}
                  getSets={setNum => getSets(id, setNum)}
                  onUpdateSet={(setNum, field, value) => onUpdateSet(id, setNum, field, value)}
                  onClear={() => onClear(id)}
                  onSetGoal={goal => setGoal(id, week, goal)}
                  onToggleHide={() => onToggleHide(id)}
                  onOpenLibrary={() => openLibrary(id, section.title)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
