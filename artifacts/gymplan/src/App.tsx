import { useState, useEffect } from 'react';
import { useGymState } from './hooks/useGymState';
import DayPanel from './components/DayPanel';
import StatsPanel from './components/StatsPanel';
import { DAYS, DAY_LABELS, DAY_EX } from './data/gymData';
import './app.css';

const MAX_WEEKS = 12;

export default function App() {
  const [splash, setSplash] = useState(true);
  const [splashBar, setSplashBar] = useState(0);
  const [activeDay, setActiveDay] = useState('mo');
  const [weekModalOpen, setWeekModalOpen] = useState(false);
  const [backupModalOpen, setBackupModalOpen] = useState(false);
  const [exportCode, setExportCode] = useState('');
  const [importCode, setImportCode] = useState('');
  const [toast, setToast] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const gym = useGymState();
  const week = gym.state.week;

  useEffect(() => {
    setTimeout(() => setSplashBar(100), 100);
    setTimeout(() => setSplash(false), 1400);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const handleExport = () => {
    const code = gym.exportData();
    setExportCode(code);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(exportCode).then(() => showToast('✓ Code kopiert'));
  };

  const handleImport = () => {
    if (!importCode.trim()) return;
    const ok = gym.importData(importCode.trim());
    if (ok) {
      setBackupModalOpen(false);
      setImportCode('');
      showToast('✓ Daten wiederhergestellt');
    } else {
      showToast('⚠ Ungültiger Backup-Code');
    }
  };

  const getDayProg = (day: string) => {
    if (day === 'stats') return null;
    const exIds = DAY_EX[day] || [];
    return gym.getDayProgress(week, day, exIds);
  };

  const weeksWithData = gym.getWeeksWithData();

  return (
    <>
      {/* Splash */}
      {splash && (
        <div id="splash">
          <div className="splash-ring">
            <div className="splash-cg">CG</div>
          </div>
          <div className="splash-title">Neph Gymplan</div>
          <div className="splash-sub">🦍 Double Progression System 💪🏾</div>
          <div className="splash-bar-wrap">
            <div className="splash-bar" style={{ width: `${splashBar}%` }} />
          </div>
        </div>
      )}

      {/* Toast */}
      <div id="toast" className={toastVisible ? 'show' : ''}>{toast}</div>

      {/* Backup Modal */}
      {backupModalOpen && (
        <div id="backup-modal" className="open" onClick={e => { if (e.target === e.currentTarget) setBackupModalOpen(false); }}>
          <div className="backup-sheet">
            <div className="bs-handle" />
            <div className="bs-title">Backup</div>
            <div className="bs-sub">Daten sichern & wiederherstellen</div>
            <div className="auto-badge"><div className="pulse-dot" />Auto-Backup aktiv</div>
            <div className="bs-info">
              <b>Auto:</b> Jede Eingabe wird sofort gespeichert.<br />
              <b>Manuell:</b> Code exportieren → in Notizen sichern.
            </div>
            <div className="bs-section">
              <div className="bs-section-label">💾 Exportieren</div>
              <button className="bs-btn bs-btn-export" onClick={handleExport}>📤 Backup-Code erstellen</button>
              {exportCode && (
                <>
                  <button className="bs-btn bs-btn-copy" onClick={handleCopy}>📋 Code kopieren</button>
                  <textarea className="bs-textarea" value={exportCode} readOnly />
                </>
              )}
            </div>
            <div className="bs-section">
              <div className="bs-section-label">📥 Wiederherstellen</div>
              <textarea
                className="bs-textarea"
                placeholder="Backup-Code hier einfügen..."
                value={importCode}
                onChange={e => setImportCode(e.target.value)}
              />
              <button className="bs-btn bs-btn-import" onClick={handleImport}>✅ Daten wiederherstellen</button>
            </div>
            <button className="bs-btn bs-btn-close" onClick={() => setBackupModalOpen(false)}>Schließen</button>
          </div>
        </div>
      )}

      {/* Week Modal */}
      {weekModalOpen && (
        <div id="week-modal" className="open" onClick={e => { if (e.target === e.currentTarget) setWeekModalOpen(false); }}>
          <div className="week-sheet">
            <div className="sheet-handle" />
            <div className="sheet-title">Trainingswoche wählen</div>
            <div className="week-grid">
              {Array.from({ length: MAX_WEEKS }, (_, i) => i + 1).map(w => (
                <div
                  key={w}
                  className={`week-btn ${w === week ? 'active' : ''} ${weeksWithData.includes(w) ? 'has-data' : ''}`}
                  onClick={() => { gym.setWeek(w); setWeekModalOpen(false); }}
                >
                  W{w}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Topbar */}
      <div id="topbar">
        <div className="topbar-left">
          <div className="topbar-eyebrow">4-Day PPL · Double Progression</div>
          <div className="topbar-title">Neph Gymplan</div>
        </div>
        <div className="topbar-right">
          <div className="backup-pill" onClick={() => { setExportCode(''); setBackupModalOpen(true); }}>
            <div className="pulse-dot" /><span>Backup</span>
          </div>
          <div className="week-pill" onClick={() => setWeekModalOpen(true)}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="2" width="8" height="7" rx="1.5" stroke="#C9A84C" strokeWidth="1.2" />
              <path d="M3 1v2M7 1v2M1 5h8" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span>W{week}</span>
          </div>
        </div>
      </div>

      {/* Day Tabs */}
      <div id="day-tabs">
        {DAYS.map(day => {
          const lbl = DAY_LABELS[day];
          const prog = getDayProg(day);
          const isActive = activeDay === day;
          return (
            <div
              key={day}
              className={`dtab ${isActive ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              <div className="dl">{lbl.short}</div>
              <div className="dn">{lbl.name}</div>
              <div className="dtype">{lbl.type}</div>
              {prog && prog.total > 0 && (
                <div className="dprog">
                  {Array.from({ length: prog.total }, (_, i) => (
                    <div key={i} className={`dprog-dot ${i < prog.done ? 'done' : ''}`} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Scroll Content */}
      <div id="scroll">
        {activeDay === 'stats' ? (
          <div className="day-panel" style={{ padding: '16px' }}>
            <StatsPanel
              week={week}
              getDayProgress={gym.getDayProgress}
              getGoal={gym.getGoal}
              getSets={(exId, setNum) => gym.getSetData(week, exId, setNum)}
            />
          </div>
        ) : (
          <div className="day-panel" style={{ padding: '16px 16px 80px' }}>
            <DayPanel
              day={activeDay}
              week={week}
              getSets={(exId, setNum) => gym.getSetData(week, exId, setNum)}
              onUpdateSet={(exId, setNum, field, value) => gym.updateSetData(week, exId, setNum, field, value)}
              onClear={exId => gym.clearExercise(week, exId)}
              getGoal={gym.getGoal}
              setGoal={gym.setGoal}
            />
          </div>
        )}
      </div>
    </>
  );
}
