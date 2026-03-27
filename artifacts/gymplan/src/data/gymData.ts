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

export const INFO: Record<string, ExerciseInfo> = {
  // UPPER A — Push/Chest focus
  ua01: { geraet: '🏋️ Kurzhanteln + Schrägbank (30°)', muskeln: { p: ['Obere Brust'], s: ['Vordere Schulter', 'Trizeps'] } },
  ua02: { geraet: '🏗️ Decline-Bank + Langhantel', muskeln: { p: ['Untere Brust'], s: ['Trizeps', 'Vordere Schulter'] } },
  ua03: { geraet: '🦋 Pec Deck / Butterfly', muskeln: { p: ['Mittlere Brust'], s: ['Innere Brust'] } },
  ua04: { geraet: '💪 Kurzhanteln + aufrechte Bank', muskeln: { p: ['Mittlere Schulter', 'Vordere Schulter'], s: ['Trizeps'] } },
  ua05: { geraet: '💪 Kurzhanteln stehend', muskeln: { p: ['Mittlere Schulter'], s: ['Vordere Schulter'] } },
  ua06: { geraet: '🔗 Kabelzug + Seilgriff oben', muskeln: { p: ['Trizeps alle 3 Köpfe'], s: [] } },
  ua07: { geraet: '🔗 Kabelzug oder KH über Kopf', muskeln: { p: ['Trizeps langer Kopf'], s: [] } },
  // LOWER A — Quad focus
  la01: { geraet: '🏗️ Smith Machine Kniebeugen', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Hamstrings'] } },
  la02: { geraet: '🦵 Beinpresse 45°', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Waden'] } },
  la03: { geraet: '🦵 Beinstrecker Maschine', muskeln: { p: ['Quadrizeps Isolation'], s: [] } },
  la04: { geraet: '🚶 Ausfallschritte Langhantel', muskeln: { p: ['Quadrizeps', 'Gesäß'], s: ['Hamstrings', 'Waden'] } },
  la05: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  la06: { geraet: '🦵 Standing Calf Raise', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },
  // UPPER B — Pull/Back focus
  ub01: { geraet: '🏗️ Klimmzug-Stange weiter Griff', muskeln: { p: ['Latissimus', 'Rückenbreite'], s: ['Bizeps', 'Hintere Schulter'] } },
  ub02: { geraet: '🔗 Lat Pulldown weiter Griff', muskeln: { p: ['Latissimus'], s: ['Bizeps', 'Hintere Schulter'] } },
  ub03: { geraet: '🔗 Rudermaschine enger Griff', muskeln: { p: ['Mittlerer Rücken', 'Rhomboideus'], s: ['Bizeps', 'Latissimus'] } },
  ub04: { geraet: '🏗️ T-Bar Rudergerät', muskeln: { p: ['Mittlerer Rücken', 'Trapez'], s: ['Bizeps', 'Latissimus'] } },
  ub05: { geraet: '🔗 Cable Face Pull', muskeln: { p: ['Hintere Schulter', 'Außenrotatoren'], s: ['Trapez'] } },
  ub06: { geraet: '🏋️ Drag Curl Langhantel', muskeln: { p: ['Bizeps langer Kopf'], s: ['Brachialis'] } },
  ub07: { geraet: '🏋️ EZ-Stange + Scottbank', muskeln: { p: ['Bizeps kurzer Kopf'], s: ['Brachialis'] } },
  ub08: { geraet: '💪 Hammer Curl KH', muskeln: { p: ['Brachialis', 'Brachioradialis'], s: ['Bizeps'] } },
  // LOWER B — Posterior/Hamstring focus
  lb01: { geraet: '🏋️ Romanian Deadlift', muskeln: { p: ['Hamstrings', 'Gesäß'], s: ['Unterer Rücken'] } },
  lb02: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  lb03: { geraet: '🦵 Sitzender Beinbeuger', muskeln: { p: ['Hamstrings'], s: [] } },
  lb04: { geraet: '🦵 Beinpresse 45° — enger Fußstand', muskeln: { p: ['Gesäß', 'Hamstrings'], s: ['Quadrizeps'] } },
  lb05: { geraet: '🏗️ Smith Machine — enge Kniebeugen', muskeln: { p: ['Gesäß'], s: ['Hamstrings', 'Waden'] } },
  lb06: { geraet: '🦵 Standing Calf Raise', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },
};

export const EX: Record<string, Exercise> = {
  // UPPER A
  ua01: { num: '01', name: 'Schrägbankdrücken KH (30°)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Obere Brust'], ['gold', 'KH']], tip: 'Tiefere Dehnung als LH. Hanteln leicht nach innen drehen oben.', ytq: 'incline dumbbell press technique', repsMin: 10, repsMax: 12, startKg: 20 },
  ua02: { num: '02', name: 'Decline Bankdrücken', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Untere Brust'], ['red', 'Glass #1']], tip: 'Bank auf -15° bis -30°. Maximale Kontraktion unten.', ytq: 'Charles Glass decline bench press', repsMin: 10, repsMax: 12, startKg: 60 },
  ua03: { num: '03', name: 'Pec Deck / Butterfly', sets: 3, reps: '13–15', rest: '60s', tags: [['gold', 'Isolation'], ['gold', 'Mitte']], tip: 'Volle Kontraktion in der Mitte – 2 Sek halten.', ytq: 'Charles Glass pec deck', repsMin: 13, repsMax: 15, startKg: 40 },
  ua04: { num: '04', name: 'Schulterdrücken KH (sitzend)', sets: 4, reps: '10–12', rest: '75s', tags: [['blue', 'Schulter']], tip: 'Ellenbogen leicht vor dem Körper. Keine Überstreckung oben.', ytq: 'dumbbell shoulder press technique', repsMin: 10, repsMax: 12, startKg: 16 },
  ua05: { num: '05', name: 'Seitliches Heben', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Schulter']], tip: 'Kleinen Finger leicht hoch drehen. Kein Schwung.', ytq: 'Charles Glass lateral raise', repsMin: 12, repsMax: 15, startKg: 10 },
  ua06: { num: '06', name: 'Kabelzug Pushdown (Seil)', sets: 4, reps: '12–15', rest: '60s', tags: [['green', 'Trizeps']], tip: 'Ellenbogen seitlich fixiert. Volle Streckung unten.', ytq: 'tricep pushdown cable', repsMin: 12, repsMax: 15, startKg: 20 },
  ua07: { num: '07', name: 'Overhead Trizeps Extension', sets: 3, reps: '12–15', rest: '75s', tags: [['green', 'Trizeps'], ['red', 'Langer Kopf']], tip: 'Nur Overhead dehnt den langen Kopf vollständig.', ytq: 'overhead tricep extension', repsMin: 12, repsMax: 15, startKg: 15 },
  // LOWER A
  la01: { num: '01', name: 'Kniebeugen (Smith Machine)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Compound'], ['red', 'Quad-Fokus']], tip: 'Füße schulterbreit, tief runter, explosiv hoch.', ytq: 'squat technique smith machine', repsMin: 10, repsMax: 12, startKg: 60 },
  la02: { num: '02', name: 'Beinpresse (45°)', sets: 4, reps: '12–15', rest: '90s', tags: [['red', 'Compound']], tip: 'Durch die Ballen drücken. Knie nie ganz strecken.', ytq: 'leg press technique', repsMin: 12, repsMax: 15, startKg: 100 },
  la03: { num: '03', name: 'Beinstrecker (Leg Extension)', sets: 3, reps: '15', rest: '60s', tags: [['gold', 'Isolation'], ['gold', 'Quad']], tip: '1–2 Sek halten oben. 3 Sek Negativ kontrolliert.', ytq: 'leg extension technique', repsMin: 12, repsMax: 15, startKg: 40 },
  la04: { num: '04', name: 'Ausfallschritte Langhantel', sets: 3, reps: '10–12/Seite', rest: '90s', tags: [['red', 'Compound'], ['blue', 'Stabilität']], tip: 'Großer Schritt, hinteres Knie fast auf Boden.', ytq: 'barbell walking lunges', repsMin: 10, repsMax: 12, startKg: 40 },
  la05: { num: '05', name: 'Liegender Beinbeuger', sets: 3, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation'], ['green', 'Hamstring']], tip: 'Zehen anziehen für maximale Hamstring-Aktivierung.', ytq: 'lying leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  la06: { num: '06', name: 'Standing Calf Raise', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden']], tip: 'Volle ROM. 2 Sek oben halten, langsam runter.', ytq: 'standing calf raise technique', repsMin: 15, repsMax: 20, startKg: 60 },
  // UPPER B
  ub01: { num: '01', name: 'Klimmzüge (weiter Griff)', sets: 4, reps: '8–12', rest: '90s', tags: [['blue', 'Breite'], ['red', 'Compound']], tip: 'Schulterblätter zuerst nach unten. Mit Ellenbogen ziehen.', ytq: 'pull ups wide grip technique', repsMin: 8, repsMax: 12, startKg: 0 },
  ub02: { num: '02', name: 'Lat Pulldown (weiter Griff)', sets: 3, reps: '12–15', rest: '75s', tags: [['blue', 'Breite']], tip: 'Brust nach vorne, leichtes Zurücklehnen. Ellenbogen nach unten.', ytq: 'lat pulldown technique', repsMin: 12, repsMax: 15, startKg: 50 },
  ub03: { num: '03', name: 'Sitzrudern Maschine (eng)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Dicke']], tip: 'Schulterblätter maximal zusammendrücken. 1 Sek halten.', ytq: 'seated cable row technique', repsMin: 10, repsMax: 12, startKg: 50 },
  ub04: { num: '04', name: 'T-Bar Rudern', sets: 3, reps: '10–12', rest: '90s', tags: [['red', 'Dicke'], ['red', 'Compound']], tip: 'Ellenbogen eng. Schulterblätter am Ende vollständig zusammen.', ytq: 'T bar row technique', repsMin: 10, repsMax: 12, startKg: 40 },
  ub05: { num: '05', name: 'Cable Face Pull', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Hintere Schulter'], ['gold', 'Glass Favorit']], tip: 'Seil auf Augenhöhe. Außenrotation 2 Sek halten.', ytq: 'face pull technique', repsMin: 12, repsMax: 15, startKg: 15 },
  ub06: { num: '06', name: 'Drag Curl (Langhantel)', sets: 3, reps: '10–12', rest: '60s', tags: [['purple', 'Bizeps'], ['red', 'Glass Favorit']], tip: 'Stange nah am Körper hochziehen. Ellenbogen nach hinten.', ytq: 'drag curl technique', repsMin: 10, repsMax: 12, startKg: 30 },
  ub07: { num: '07', name: 'Preacher Curl (EZ-Stange)', sets: 3, reps: '10–12', rest: '60s', tags: [['purple', 'Bizeps']], tip: 'Volle Dehnung unten, volle Kontraktion oben halten.', ytq: 'preacher curl technique', repsMin: 10, repsMax: 12, startKg: 20 },
  ub08: { num: '08', name: 'Hammer Curl (KH)', sets: 3, reps: '12', rest: '60s', tags: [['purple', 'Bizeps'], ['blue', 'Brachialis']], tip: 'Neutraler Griff. Trifft Brachialis und langen Kopf.', ytq: 'hammer curl technique', repsMin: 10, repsMax: 12, startKg: 14 },
  // LOWER B
  lb01: { num: '01', name: 'Romanian Deadlift', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Compound'], ['green', 'Hamstring']], tip: 'Rücken gerade, Hüfte hinten schieben. Dehnung unten spüren.', ytq: 'romanian deadlift technique', repsMin: 10, repsMax: 12, startKg: 60 },
  lb02: { num: '02', name: 'Liegender Beinbeuger', sets: 4, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation'], ['green', 'Hamstring']], tip: 'Zehen anziehen. Volle Kontraktion, langsam runter.', ytq: 'lying leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  lb03: { num: '03', name: 'Sitzender Beinbeuger', sets: 3, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation']], tip: 'Volle Dehnung, volle Kontraktion. Kontrollierte Bewegung.', ytq: 'seated leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  lb04: { num: '04', name: 'Beinpresse — tiefer Fußstand', sets: 3, reps: '12–15', rest: '90s', tags: [['red', 'Compound'], ['green', 'Gesäß']], tip: 'Füße hoch auf der Platte. Aktiviert mehr Gesäß und Hamstring.', ytq: 'leg press high foot placement glutes', repsMin: 12, repsMax: 15, startKg: 80 },
  lb05: { num: '05', name: 'Sumo Kniebeugen (Smith Machine)', sets: 3, reps: '12–15', rest: '75s', tags: [['green', 'Gesäß'], ['red', 'Compound']], tip: 'Breiter Standabstand, Zehen nach außen. Gesäß tief drücken.', ytq: 'sumo squat smith machine glutes', repsMin: 12, repsMax: 15, startKg: 50 },
  lb06: { num: '06', name: 'Standing Calf Raise', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden']], tip: 'Volle ROM. 2 Sek oben halten, langsam runter.', ytq: 'standing calf raise technique', repsMin: 15, repsMax: 20, startKg: 60 },
};

export const DAY_EX: Record<string, string[]> = {
  mo: ['ua01','ua02','ua03','ua04','ua05','ua06','ua07'],
  mi: ['la01','la02','la03','la04','la05','la06'],
  fr: ['ub01','ub02','ub03','ub04','ub05','ub06','ub07','ub08'],
  so: ['lb01','lb02','lb03','lb04','lb05','lb06'],
};

export const DAY_META: Record<string, DayMeta> = {
  mo: { label: 'Oberkörper A', color: 'var(--red)', cls: 't-push', emoji: '🔴' },
  mi: { label: 'Unterkörper A', color: 'var(--green)', cls: 't-legs', emoji: '🟢' },
  fr: { label: 'Oberkörper B', color: 'var(--blue)', cls: 't-pull', emoji: '🔵' },
  so: { label: 'Unterkörper B', color: 'var(--purple)', cls: 't-pushb', emoji: '🟣' },
};

export interface DaySection {
  title: string;
  badge: string;
  ids: string[];
}

export const DAY_SECTIONS: Record<string, { note: string; sections: DaySection[] }> = {
  mo: {
    note: 'Brust, Schultern und Trizeps. Schulterblätter zusammendrücken, Brust raus. Vollständige Kontraktion jeden Satz.',
    sections: [
      { title: 'Brust', badge: 'Chest', ids: ['ua01','ua02','ua03'] },
      { title: 'Schulter', badge: 'Delts', ids: ['ua04','ua05'] },
      { title: 'Trizeps', badge: 'Triceps', ids: ['ua06','ua07'] },
    ],
  },
  mi: {
    note: 'Quad-Fokus. Kein Bouncing. Jede Wiederholung kontrolliert. Oben kurz einpressen.',
    sections: [
      { title: 'Quadrizeps', badge: 'Quad-Fokus', ids: ['la01','la02','la03','la04'] },
      { title: 'Hamstrings', badge: 'Posterior', ids: ['la05'] },
      { title: 'Waden', badge: 'Calves', ids: ['la06'] },
    ],
  },
  fr: {
    note: 'Rücken und Bizeps. Mit den Ellenbogen ziehen. Schulterblätter zuerst runterziehen. Bizeps vollständig einpressen.',
    sections: [
      { title: 'Rückenbreite', badge: 'Latissimus', ids: ['ub01','ub02'] },
      { title: 'Rückendicke', badge: 'Thickness', ids: ['ub03','ub04'] },
      { title: 'Hintere Schulter', badge: 'Rear Delt', ids: ['ub05'] },
      { title: 'Bizeps', badge: 'Biceps', ids: ['ub06','ub07','ub08'] },
    ],
  },
  so: {
    note: 'Hamstring- und Gesäß-Fokus. Rücken gerade halten. Dehnung unten maximieren. Kontrolliert senken.',
    sections: [
      { title: 'Hamstrings', badge: 'Posterior Chain', ids: ['lb01','lb02','lb03'] },
      { title: 'Gesäß', badge: 'Glutes', ids: ['lb04','lb05'] },
      { title: 'Waden', badge: 'Calves', ids: ['lb06'] },
    ],
  },
};

export const DAYS = ['mo','mi','fr','so','stats'];
export const DAY_LABELS: Record<string, { short: string; name: string; type: string }> = {
  mo: { short: 'Mo', name: 'Oben A', type: 'BRUST·TRIZEPS' },
  mi: { short: 'Mi', name: 'Unten A', type: 'QUAD·WADEN' },
  fr: { short: 'Fr', name: 'Oben B', type: 'RÜCKEN·BIZEPS' },
  so: { short: 'So', name: 'Unten B', type: 'HAMS·GESÄSS' },
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
