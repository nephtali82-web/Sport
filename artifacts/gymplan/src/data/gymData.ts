export interface ExerciseInfo {
  geraet: string;
  muskeln: {
    p: string[];
    s: string[];
  };
}

export interface Exercise {
  num: string;
  name: string;
  sets: number;
  reps: string;
  rest: string;
  tags: [string, string][];
  tip: string;
  ytq: string;
  repsMin: number;
  repsMax: number;
  startKg: number;
}

export interface DayMeta {
  label: string;
  color: string;
  cls: string;
  emoji: string;
}

// ── Original exercise IDs preserved for data continuity ──────────────────────

export const INFO: Record<string, ExerciseInfo> = {
  // OBERKÖRPER A (Mo) — Brust + Schulter + Trizeps
  mo01: { geraet: '🏋️ Kurzhanteln + Schrägbank (30°)', muskeln: { p: ['Obere Brust'], s: ['Vordere Schulter', 'Trizeps'] } },
  mo02: { geraet: '🏗️ Schrägbank Maschine (30°)', muskeln: { p: ['Obere Brust'], s: ['Vordere Schulter', 'Trizeps'] } },
  mo03: { geraet: '🏗️ Decline-Bank + Langhantel', muskeln: { p: ['Untere Brust'], s: ['Trizeps', 'Vordere Schulter'] } },
  mo04: { geraet: '🦋 Pec Deck / Butterfly', muskeln: { p: ['Mittlere Brust'], s: ['Innere Brust'] } },
  mo05: { geraet: '💪 Kurzhanteln + aufrechte Bank', muskeln: { p: ['Mittlere Schulter', 'Vordere Schulter'], s: ['Trizeps'] } },
  mo06: { geraet: '💪 Kurzhanteln stehend', muskeln: { p: ['Mittlere Schulter'], s: ['Vordere Schulter'] } },
  mo07: { geraet: '🔗 Kabelzug + Seilgriff oben', muskeln: { p: ['Trizeps alle 3 Köpfe'], s: [] } },
  mo08: { geraet: '🔗 Kabelzug oder KH über Kopf', muskeln: { p: ['Trizeps langer Kopf'], s: [] } },
  // UNTERKÖRPER A (Mi) — Quad-Fokus
  fr01: { geraet: '🏗️ Smith Machine Kniebeugen', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Hamstrings'] } },
  fr02: { geraet: '🦵 Beinpresse 45°', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Waden'] } },
  fr03: { geraet: '🦵 Beinstrecker Maschine', muskeln: { p: ['Quadrizeps Isolation'], s: [] } },
  fr04: { geraet: '🚶 Ausfallschritte Langhantel', muskeln: { p: ['Quadrizeps', 'Gesäß'], s: ['Hamstrings', 'Waden'] } },
  fr05: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  fr06: { geraet: '🏋️ Romanian Deadlift', muskeln: { p: ['Hamstrings', 'Gesäß'], s: ['Unterer Rücken'] } },
  fr08: { geraet: '🦵 Standing Calf Raise', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },
  // OBERKÖRPER B (Fr) — Rücken + Bizeps
  mi01: { geraet: '🏗️ Klimmzug-Stange weiter Griff', muskeln: { p: ['Latissimus', 'Rückenbreite'], s: ['Bizeps', 'Hintere Schulter'] } },
  mi02: { geraet: '🔗 Lat Pulldown weiter Griff', muskeln: { p: ['Latissimus'], s: ['Bizeps', 'Hintere Schulter'] } },
  mi03: { geraet: '🔗 Straight Arm Pulldown', muskeln: { p: ['Latissimus Isolation'], s: ['Hintere Schulter'] } },
  mi04: { geraet: '🔗 Rudermaschine enger Griff', muskeln: { p: ['Mittlerer Rücken', 'Rhomboideus'], s: ['Bizeps', 'Latissimus'] } },
  mi05: { geraet: '🏗️ T-Bar Rudergerät', muskeln: { p: ['Mittlerer Rücken', 'Trapez'], s: ['Bizeps', 'Latissimus'] } },
  mi06: { geraet: '🔗 Cable Face Pull', muskeln: { p: ['Hintere Schulter', 'Außenrotatoren'], s: ['Trapez'] } },
  mi07: { geraet: '🏋️ Drag Curl Langhantel', muskeln: { p: ['Bizeps langer Kopf'], s: ['Brachialis'] } },
  mi08: { geraet: '🏋️ EZ-Stange + Scottbank', muskeln: { p: ['Bizeps kurzer Kopf'], s: ['Brachialis'] } },
  mi09: { geraet: '💪 Hammer Curl KH', muskeln: { p: ['Brachialis', 'Brachioradialis'], s: ['Bizeps'] } },
  // UNTERKÖRPER B (So) — Hamstring + Gesäß-Fokus
  lb01: { geraet: '🏋️ Romanian Deadlift (schwerer)', muskeln: { p: ['Hamstrings', 'Gesäß'], s: ['Unterer Rücken'] } },
  lb02: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  lb03: { geraet: '🦵 Sitzender Beinbeuger', muskeln: { p: ['Hamstrings'], s: [] } },
  lb04: { geraet: '🦵 Beinpresse — hoher Fußstand (Gesäß)', muskeln: { p: ['Gesäß', 'Hamstrings'], s: ['Quadrizeps'] } },
  lb05: { geraet: '🏗️ Smith Machine — Sumo Kniebeugen', muskeln: { p: ['Gesäß'], s: ['Hamstrings', 'Waden'] } },
  lb06: { geraet: '🦵 Standing Calf Raise', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },
};

export const EX: Record<string, Exercise> = {
  // OBERKÖRPER A (Mo)
  mo01: { num: '01', name: 'Schrägbankdrücken KH (30°)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Obere Brust'], ['gold', 'KH']], tip: 'Tiefere Dehnung als LH. Hanteln leicht nach innen drehen oben.', ytq: 'incline dumbbell press technique', repsMin: 10, repsMax: 12, startKg: 20 },
  mo02: { num: '02', name: 'Schrägbankdrücken Maschine', sets: 3, reps: '12–15', rest: '75s', tags: [['red', 'Obere Brust'], ['gold', 'Maschine']], tip: 'Konstante Spannung. Schulterblätter fest zusammen.', ytq: 'incline chest press machine', repsMin: 12, repsMax: 15, startKg: 40 },
  mo03: { num: '03', name: 'Decline Bankdrücken', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Untere Brust'], ['red', 'Glass #1']], tip: 'Bank auf -15° bis -30°. Maximale Kontraktion.', ytq: 'Charles Glass decline bench press', repsMin: 10, repsMax: 12, startKg: 60 },
  mo04: { num: '04', name: 'Pec Deck / Butterfly', sets: 3, reps: '13–15', rest: '60s', tags: [['gold', 'Isolation'], ['gold', 'Mitte']], tip: 'Volle Kontraktion in der Mitte – 2 Sek halten.', ytq: 'Charles Glass pec deck', repsMin: 13, repsMax: 15, startKg: 40 },
  mo05: { num: '05', name: 'Schulterdrücken KH (sitzend)', sets: 4, reps: '10–12', rest: '75s', tags: [['blue', 'Schulter']], tip: 'Ellenbogen leicht vor dem Körper.', ytq: 'dumbbell shoulder press technique', repsMin: 10, repsMax: 12, startKg: 16 },
  mo06: { num: '06', name: 'Seitliches Heben', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Schulter']], tip: 'Kleinen Finger leicht hoch drehen. Kein Schwung.', ytq: 'Charles Glass lateral raise', repsMin: 12, repsMax: 15, startKg: 10 },
  mo07: { num: '07', name: 'Kabelzug Pushdown (Seil)', sets: 4, reps: '12–15', rest: '60s', tags: [['green', 'Trizeps']], tip: 'Ellenbogen seitlich fixiert. Volle Streckung unten.', ytq: 'tricep pushdown cable', repsMin: 12, repsMax: 15, startKg: 20 },
  mo08: { num: '08', name: 'Overhead Trizeps Extension', sets: 3, reps: '12–15', rest: '75s', tags: [['green', 'Trizeps'], ['red', 'Langer Kopf']], tip: 'Nur Overhead dehnt den langen Kopf vollständig.', ytq: 'overhead tricep extension', repsMin: 12, repsMax: 15, startKg: 15 },
  // UNTERKÖRPER A (Mi)
  fr01: { num: '01', name: 'Kniebeugen (Smith Machine)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Compound'], ['gold', 'Quad-Fokus']], tip: 'Füße schulterbreit, tief, explosiv hoch.', ytq: 'squat technique smith machine', repsMin: 10, repsMax: 12, startKg: 60 },
  fr02: { num: '02', name: 'Beinpresse (45°)', sets: 4, reps: '12–15', rest: '90s', tags: [['red', 'Compound']], tip: 'Durch die Ballen drücken. Knie nie ganz strecken.', ytq: 'leg press technique', repsMin: 12, repsMax: 15, startKg: 100 },
  fr03: { num: '03', name: 'Beinstrecker (Leg Extension)', sets: 3, reps: '15', rest: '60s', tags: [['gold', 'Isolation']], tip: '1–2 Sek halten oben. 3 Sek Negativ.', ytq: 'leg extension technique', repsMin: 12, repsMax: 15, startKg: 40 },
  fr04: { num: '04', name: 'Ausfallschritte Langhantel', sets: 3, reps: '10–12/Seite', rest: '90s', tags: [['red', 'Compound'], ['blue', 'Stabilität']], tip: 'Großer Schritt, hinteres Knie fast auf Boden.', ytq: 'barbell walking lunges', repsMin: 10, repsMax: 12, startKg: 40 },
  fr05: { num: '05', name: 'Liegender Beinbeuger', sets: 3, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation'], ['green', 'Hamstring']], tip: 'Zehen anziehen für maximale Hamstring-Aktivierung.', ytq: 'lying leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  fr06: { num: '06', name: 'Romanian Deadlift', sets: 3, reps: '10–12', rest: '90s', tags: [['red', 'Compound']], tip: 'Rücken gerade, Hüfte hinten. Dehnung spüren.', ytq: 'romanian deadlift technique', repsMin: 10, repsMax: 12, startKg: 60 },
  fr08: { num: '07', name: 'Standing Calf Raise', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden']], tip: 'Volle ROM. 2 Sek oben halten.', ytq: 'standing calf raise technique', repsMin: 15, repsMax: 20, startKg: 60 },
  // OBERKÖRPER B (Fr)
  mi01: { num: '01', name: 'Klimmzüge (weiter Griff)', sets: 4, reps: '8–12', rest: '90s', tags: [['blue', 'Breite'], ['red', 'Compound']], tip: 'Schulterblätter zuerst nach unten.', ytq: 'pull ups wide grip technique', repsMin: 8, repsMax: 12, startKg: 0 },
  mi02: { num: '02', name: 'Lat Pulldown (weiter Griff)', sets: 3, reps: '12–15', rest: '75s', tags: [['blue', 'Breite']], tip: 'Brust nach vorne, leichtes Zurücklehnen.', ytq: 'lat pulldown technique', repsMin: 12, repsMax: 15, startKg: 50 },
  mi03: { num: '03', name: 'Straight Arm Pulldown', sets: 3, reps: '12–15', rest: '60s', tags: [['blue', 'Breite'], ['gold', 'Isolation']], tip: 'Arme gestreckt lassen. Nur der Lat arbeitet.', ytq: 'straight arm pulldown', repsMin: 12, repsMax: 15, startKg: 30 },
  mi04: { num: '04', name: 'Sitzrudern Maschine (eng)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Dicke']], tip: 'Schulterblätter maximal zusammendrücken.', ytq: 'seated cable row technique', repsMin: 10, repsMax: 12, startKg: 50 },
  mi05: { num: '05', name: 'T-Bar Rudern', sets: 3, reps: '10–12', rest: '90s', tags: [['red', 'Dicke'], ['red', 'Compound']], tip: 'Ellenbogen eng. Schulterblätter zusammen.', ytq: 'T bar row technique', repsMin: 10, repsMax: 12, startKg: 40 },
  mi06: { num: '06', name: 'Cable Face Pull', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Hintere Schulter'], ['gold', 'Glass Favorit']], tip: 'Seil auf Augenhöhe. Außenrotation 2 Sek.', ytq: 'face pull technique', repsMin: 12, repsMax: 15, startKg: 15 },
  mi07: { num: '07', name: 'Drag Curl (Langhantel)', sets: 3, reps: '10–12', rest: '60s', tags: [['purple', 'Bizeps'], ['red', 'Glass Favorit']], tip: 'Stange nah am Körper hochziehen.', ytq: 'drag curl technique', repsMin: 10, repsMax: 12, startKg: 30 },
  mi08: { num: '08', name: 'Preacher Curl (EZ-Stange)', sets: 3, reps: '10–12', rest: '60s', tags: [['purple', 'Bizeps']], tip: 'Volle Dehnung unten, volle Kontraktion oben.', ytq: 'preacher curl technique', repsMin: 10, repsMax: 12, startKg: 20 },
  mi09: { num: '09', name: 'Hammer Curl (KH)', sets: 3, reps: '12', rest: '60s', tags: [['purple', 'Bizeps'], ['blue', 'Brachialis']], tip: 'Neutraler Griff. Trifft Brachialis und langen Kopf.', ytq: 'hammer curl technique', repsMin: 10, repsMax: 12, startKg: 14 },
  // UNTERKÖRPER B (So) — Hamstring + Gesäß-Fokus
  lb01: { num: '01', name: 'Romanian Deadlift (schwerer)', sets: 4, reps: '8–10', rest: '90s', tags: [['red', 'Compound'], ['green', 'Hamstring']], tip: 'Rücken gerade, Hüfte weit hinten. Tief runter, Dehnung spüren.', ytq: 'romanian deadlift technique', repsMin: 8, repsMax: 10, startKg: 70 },
  lb02: { num: '02', name: 'Liegender Beinbeuger', sets: 4, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation'], ['green', 'Hamstring']], tip: 'Zehen anziehen. Langsam runter (3 Sek).', ytq: 'lying leg curl technique', repsMin: 12, repsMax: 15, startKg: 35 },
  lb03: { num: '03', name: 'Sitzender Beinbeuger', sets: 3, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation']], tip: 'Volle Dehnung, volle Kontraktion. Kontrolliert.', ytq: 'seated leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  lb04: { num: '04', name: 'Beinpresse — hoher Fußstand', sets: 3, reps: '12–15', rest: '90s', tags: [['red', 'Compound'], ['green', 'Gesäß']], tip: 'Füße oben auf der Platte → mehr Gesäß und Hamstring.', ytq: 'leg press high foot placement glutes', repsMin: 12, repsMax: 15, startKg: 80 },
  lb05: { num: '05', name: 'Sumo Kniebeugen (Smith Machine)', sets: 3, reps: '12–15', rest: '75s', tags: [['green', 'Gesäß'], ['red', 'Compound']], tip: 'Breiter Standabstand, Zehen nach außen. Gesäß tief drücken.', ytq: 'sumo squat smith machine glutes', repsMin: 12, repsMax: 15, startKg: 50 },
  lb06: { num: '06', name: 'Standing Calf Raise', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden']], tip: 'Volle ROM. 2 Sek oben halten, langsam runter.', ytq: 'standing calf raise technique', repsMin: 15, repsMax: 20, startKg: 60 },
};

export const DAY_EX: Record<string, string[]> = {
  mo: ['mo01','mo02','mo03','mo04','mo05','mo06','mo07','mo08'],
  mi: ['fr01','fr02','fr03','fr04','fr05','fr06','fr08'],
  fr: ['mi01','mi02','mi03','mi04','mi05','mi06','mi07','mi08','mi09'],
  so: ['lb01','lb02','lb03','lb04','lb05','lb06'],
};

export const DAY_META: Record<string, DayMeta> = {
  mo: { label: 'Oberkörper', color: 'var(--red)', cls: 't-push', emoji: '🔴' },
  mi: { label: 'Unterkörper', color: 'var(--green)', cls: 't-legs', emoji: '🟢' },
  fr: { label: 'Oberkörper', color: 'var(--blue)', cls: 't-pull', emoji: '🔵' },
  so: { label: 'Unterkörper', color: 'var(--purple)', cls: 't-pushb', emoji: '🟣' },
};

export interface DaySection {
  title: string;
  badge: string;
  ids: string[];
}

export const DAY_SECTIONS: Record<string, { note: string; sections: DaySection[] }> = {
  mo: {
    note: 'Brust, Schultern und Trizeps. Schulterblätter zusammendrücken, Brust raus. Volle Kontraktion jeden Satz.',
    sections: [
      { title: 'Brust', badge: 'Chest', ids: ['mo01','mo02','mo03','mo04'] },
      { title: 'Schulter', badge: 'Delts', ids: ['mo05','mo06'] },
      { title: 'Trizeps', badge: 'Triceps', ids: ['mo07','mo08'] },
    ],
  },
  mi: {
    note: 'Quad-Fokus. Kein Bouncing. Jede Wiederholung kontrolliert runter, explosiv hoch.',
    sections: [
      { title: 'Quadrizeps', badge: 'Quad-Fokus', ids: ['fr01','fr02','fr03','fr04'] },
      { title: 'Hamstrings', badge: 'Posterior', ids: ['fr05','fr06'] },
      { title: 'Waden', badge: 'Calves', ids: ['fr08'] },
    ],
  },
  fr: {
    note: 'Rücken und Bizeps. Mit den Ellenbogen ziehen. Schulterblätter zuerst runterziehen. Bizeps vollständig einpressen.',
    sections: [
      { title: 'Rückenbreite', badge: 'Latissimus', ids: ['mi01','mi02','mi03'] },
      { title: 'Rückendicke', badge: 'Thickness', ids: ['mi04','mi05'] },
      { title: 'Hintere Schulter', badge: 'Rear Delt', ids: ['mi06'] },
      { title: 'Bizeps', badge: 'Biceps', ids: ['mi07','mi08','mi09'] },
    ],
  },
  so: {
    note: 'Hamstring- und Gesäß-Fokus. Rücken immer gerade halten. Dehnung unten maximieren. Kontrolliert senken.',
    sections: [
      { title: 'Hamstrings', badge: 'Posterior Chain', ids: ['lb01','lb02','lb03'] },
      { title: 'Gesäß', badge: 'Glutes', ids: ['lb04','lb05'] },
      { title: 'Waden', badge: 'Calves', ids: ['lb06'] },
    ],
  },
};

export const DAYS = ['mo','mi','fr','so','stats'];
export const DAY_LABELS: Record<string, { short: string; name: string; type: string }> = {
  mo: { short: 'Mo', name: 'Oben', type: 'BRUST·SCHULTER' },
  mi: { short: 'Mi', name: 'Unten', type: 'QUAD·WADEN' },
  fr: { short: 'Fr', name: 'Oben', type: 'RÜCKEN·BIZEPS' },
  so: { short: 'So', name: 'Unten', type: 'HAMS·GESÄSS' },
  stats: { short: '📊', name: 'Stats', type: 'ZIELE' },
};

export interface SetData {
  weight: string;
  reps: string;
  done: boolean;
}

export interface ExerciseData {
  [setNum: number]: SetData;
}

export interface WeekData {
  [exerciseId: string]: ExerciseData;
}

export interface AppData {
  [week: number]: WeekData;
}

export interface GoalData {
  kg: number;
  repsTarget: number;
  repsMin: number;
  repsMax: number;
  auto?: boolean;
  bumped?: boolean;
}

export interface AppState {
  week: number;
  data: AppData;
  goals: Record<string, GoalData>;
}
