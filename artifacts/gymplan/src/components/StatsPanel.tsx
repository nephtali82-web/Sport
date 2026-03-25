import { DAY_EX, DAY_META, EX, DAY_LABELS } from '../data/gymData';
import type { GoalData } from '../data/gymData';

interface StatsPanelProps {
  week: number;
  getDayProgress: (week: number, day: string, exIds: string[]) => { done: number; total: number };
  getGoal: (id: string, w: number) => GoalData;
  getSets: (exId: string, setNum: number) => { weight: string; reps: string; done: boolean };
}

const DAYS_LIST = ['mo', 'mi', 'fr', 'so'];

export default function StatsPanel({ week, getDayProgress, getGoal, getSets }: StatsPanelProps) {
  const totalSets = DAYS_LIST.reduce((acc, day) => {
    const exIds = DAY_EX[day] || [];
    const prog = getDayProgress(week, day, exIds);
    return acc + prog.total;
  }, 0);

  const doneSets = DAYS_LIST.reduce((acc, day) => {
    const exIds = DAY_EX[day] || [];
    const prog = getDayProgress(week, day, exIds);
    return acc + prog.done;
  }, 0);

  const daysCompleted = DAYS_LIST.filter(day => {
    const exIds = DAY_EX[day] || [];
    const prog = getDayProgress(week, day, exIds);
    return prog.total > 0 && prog.done === prog.total;
  }).length;

  let totalVolume = 0;
  DAYS_LIST.forEach(day => {
    const exIds = DAY_EX[day] || [];
    exIds.forEach(id => {
      const ex = EX[id];
      if (!ex) return;
      for (let s = 1; s <= ex.sets; s++) {
        const sd = getSets(id, s);
        if (sd.done) {
          const kg = parseFloat(sd.weight) || 0;
          const reps = parseFloat(sd.reps) || 0;
          totalVolume += kg * reps;
        }
      }
    });
  });

  return (
    <div className="day-panel-content">
      <div className="day-badge" style={{ background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', color: '#C9A84C' }}>
        📊 Woche {week} — Statistiken
      </div>

      <div className="stats-kpi-row">
        <div className="kpi-box">
          <div className="kpi-label">Sätze done</div>
          <div className="kpi-val">{doneSets}</div>
          <div className="kpi-unit">von {totalSets}</div>
        </div>
        <div className="kpi-box">
          <div className="kpi-label">Tage</div>
          <div className="kpi-val">{daysCompleted}</div>
          <div className="kpi-unit">von 4</div>
        </div>
        <div className="kpi-box">
          <div className="kpi-label">Volumen</div>
          <div className="kpi-val">{Math.round(totalVolume / 1000 * 10) / 10}</div>
          <div className="kpi-unit">Tonnen</div>
        </div>
      </div>

      {DAYS_LIST.map(day => {
        const meta = DAY_META[day];
        const exIds = DAY_EX[day] || [];
        const prog = getDayProgress(week, day, exIds);
        const pct = prog.total > 0 ? Math.round((prog.done / prog.total) * 100) : 0;

        const COLOR_MAP: Record<string, string> = {
          mo: '#C94C4C', mi: '#4C8EC9', fr: '#4CC97A', so: '#9B6EC9'
        };
        const color = COLOR_MAP[day] || '#C9A84C';

        return (
          <div key={day} className="stats-card">
            <div className="stats-card-head">
              <div className="sc-title" style={{ color }}>{DAY_LABELS[day]?.name} {meta.label !== DAY_LABELS[day]?.name ? `— ${meta.label}` : ''}</div>
              <div className="sc-meta">{prog.done}/{prog.total} Sätze · {pct}%</div>
            </div>
            <div className="sc-body">
              <div style={{ height: '4px', background: 'rgba(255,255,255,.06)', borderRadius: '2px', marginBottom: '12px' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: '2px', transition: 'width .4s' }} />
              </div>
              <div className="sc-ex-list">
                {exIds.map(id => {
                  const ex = EX[id];
                  if (!ex) return null;
                  const goal = getGoal(id, week);
                  let bestKg = 0, totalReps = 0, doneCount = 0;
                  for (let s = 1; s <= ex.sets; s++) {
                    const sd = getSets(id, s);
                    if (sd.done) {
                      const kg = parseFloat(sd.weight) || 0;
                      const reps = parseFloat(sd.reps) || 0;
                      if (kg > bestKg) bestKg = kg;
                      totalReps += reps;
                      doneCount++;
                    }
                  }
                  const vol = bestKg * totalReps;
                  const hitGoal = doneCount > 0 && bestKg >= goal.kg;

                  return (
                    <div key={id} className="sc-ex-row">
                      <div className="sc-ex-row-top">
                        <div className="sc-ex-name">{ex.name}</div>
                        {doneCount > 0 ? (
                          <>
                            <div className="sc-ex-kg" style={{ color: hitGoal ? '#4CC97A' : '#C9A84C' }}>{bestKg}kg</div>
                            <div className="sc-ex-vol">{vol}kg·vol</div>
                          </>
                        ) : (
                          <div className="sc-ex-kg" style={{ color: '#7A7060' }}>—</div>
                        )}
                      </div>
                      {doneCount > 0 && (
                        <div className="sc-goal-row">
                          <span className="sc-goal-icon">🎯</span>
                          <span className="sc-goal-text">Ziel: {goal.kg}kg × {goal.repsTarget} Wdh</span>
                          <span className={`sc-goal-badge ${hitGoal ? 'sc-gb-hit' : doneCount > 0 ? 'sc-gb-close' : 'sc-gb-open'}`}>
                            {hitGoal ? '✓ Erreicht' : doneCount > 0 ? `${bestKg}/${goal.kg}kg` : 'Offen'}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
