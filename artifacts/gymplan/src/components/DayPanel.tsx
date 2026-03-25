import ExerciseCard from './ExerciseCard';
import { EX, INFO, DAY_SECTIONS, DAY_META } from '../data/gymData';
import type { GoalData } from '../data/gymData';

interface DayPanelProps {
  day: string;
  week: number;
  getSets: (exId: string, setNum: number) => { weight: string; reps: string; done: boolean };
  onUpdateSet: (exId: string, setNum: number, field: 'weight' | 'reps' | 'done', value: string | boolean) => void;
  onClear: (exId: string) => void;
  getGoal: (id: string, w: number) => GoalData;
  setGoal: (id: string, w: number, goal: GoalData) => void;
}

const BADGE_STYLE: Record<string, { background: string; border: string; color: string }> = {
  mo: { background: 'rgba(201,76,76,.1)', border: '1px solid rgba(201,76,76,.3)', color: '#C94C4C' },
  mi: { background: 'rgba(76,142,201,.1)', border: '1px solid rgba(76,142,201,.3)', color: '#4C8EC9' },
  fr: { background: 'rgba(76,201,122,.1)', border: '1px solid rgba(76,201,122,.3)', color: '#4CC97A' },
  so: { background: 'rgba(201,76,76,.1)', border: '1px solid rgba(201,76,76,.3)', color: '#C94C4C' },
};

export default function DayPanel({ day, week, getSets, onUpdateSet, onClear, getGoal, setGoal }: DayPanelProps) {
  const meta = DAY_META[day];
  const dayData = DAY_SECTIONS[day];
  const badge = BADGE_STYLE[day] || BADGE_STYLE.mo;

  if (!meta || !dayData) return null;

  const dayNames: Record<string, string> = { mo: 'Montag', mi: 'Mittwoch', fr: 'Freitag', so: 'Sonntag' };

  return (
    <div className="day-panel-content">
      <div className="day-badge" style={badge}>
        {meta.emoji} {dayNames[day]} — {meta.label}
      </div>

      <div className="charles-note">
        <strong>Charles Glass — {meta.label}</strong>
        {dayData.note}
      </div>

      {dayData.sections.map((section, si) => (
        <div key={si}>
          {si > 0 && <div className="divider" />}
          <div className="section-header">
            <div className="section-title">{section.title}</div>
            <div className="section-badge">{section.badge}</div>
          </div>
          {section.ids.map(id => {
            const ex = EX[id];
            if (!ex) return null;
            return (
              <ExerciseCard
                key={id}
                id={id}
                ex={ex}
                info={INFO[id]}
                week={week}
                goal={getGoal(id, week)}
                getSets={setNum => getSets(id, setNum)}
                onUpdateSet={(setNum, field, value) => onUpdateSet(id, setNum, field, value)}
                onClear={() => onClear(id)}
                onSetGoal={goal => setGoal(id, week, goal)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
