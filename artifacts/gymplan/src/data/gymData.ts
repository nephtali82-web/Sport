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

// ── OBERKÖRPER A (Montag) — Drück-Fokus ─────────────────────────────────────
// ── UNTERKÖRPER A (Mittwoch) — Quad-Fokus ───────────────────────────────────
// ── OBERKÖRPER B (Freitag) — Zug-Fokus ─────────────────────────────────────
// ── UNTERKÖRPER B (Sonntag) — Posterior-Fokus ───────────────────────────────

export const INFO: Record<string, ExerciseInfo> = {
  // OBERKÖRPER A
  oa1: { geraet: '🏋️ Schrägbank + Kurzhanteln (30°)', muskeln: { p: ['Obere Brust'], s: ['Vordere Schulter', 'Trizeps'] } },
  oa2: { geraet: '🏗️ Decline-Bank + Langhantel', muskeln: { p: ['Untere Brust'], s: ['Trizeps'] } },
  oa3: { geraet: '🦋 Pec Deck Maschine', muskeln: { p: ['Brust Isolation'], s: ['Innere Brust'] } },
  oa4: { geraet: '💪 Kurzhanteln + aufrechte Bank', muskeln: { p: ['Vordere/Mittlere Schulter'], s: ['Trizeps'] } },
  oa5: { geraet: '💪 Kurzhanteln stehend', muskeln: { p: ['Mittlere Schulter'], s: [] } },
  oa6: { geraet: '🔗 Kabelzug Seilgriff oben', muskeln: { p: ['Trizeps alle 3 Köpfe'], s: [] } },
  oa7: { geraet: '🔗 Kabelzug oder KH über Kopf', muskeln: { p: ['Trizeps langer Kopf'], s: [] } },
  // UNTERKÖRPER A
  ua1: { geraet: '🏗️ Smith Machine', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Hamstrings'] } },
  ua2: { geraet: '🦵 Beinpresse 45°', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Waden'] } },
  ua3: { geraet: '🦵 Leg Extension Maschine', muskeln: { p: ['Quadrizeps Isolation'], s: [] } },
  ua4: { geraet: '🚶 Langhantel', muskeln: { p: ['Quadrizeps', 'Gesäß'], s: ['Hamstrings'] } },
  ua5: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  ua6: { geraet: '🦵 Calf Raise Maschine', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },
  // OBERKÖRPER B
  ob1: { geraet: '🏗️ Klimmzug-Stange weiter Griff', muskeln: { p: ['Latissimus'], s: ['Bizeps', 'Hintere Schulter'] } },
  ob2: { geraet: '🔗 Lat Pulldown Maschine', muskeln: { p: ['Latissimus'], s: ['Bizeps'] } },
  ob3: { geraet: '🔗 Kabelzug enger Griff', muskeln: { p: ['Mittlerer Rücken', 'Rhomboideus'], s: ['Bizeps'] } },
  ob4: { geraet: '🏗️ T-Bar Gerät', muskeln: { p: ['Mittlerer Rücken', 'Trapez'], s: ['Latissimus'] } },
  ob5: { geraet: '🔗 Cable Face Pull', muskeln: { p: ['Hintere Schulter', 'Außenrotatoren'], s: ['Trapez'] } },
  ob6: { geraet: '🏋️ EZ-Stange Scottbank', muskeln: { p: ['Bizeps kurzer Kopf'], s: ['Brachialis'] } },
  ob7: { geraet: '💪 Kurzhanteln neutraler Griff', muskeln: { p: ['Brachialis', 'Brachioradialis'], s: ['Bizeps'] } },
  // UNTERKÖRPER B
  ub1: { geraet: '🏋️ Langhantel', muskeln: { p: ['Hamstrings', 'Gesäß'], s: ['Unterer Rücken'] } },
  ub2: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  ub3: { geraet: '🦵 Sitzender Beinbeuger', muskeln: { p: ['Hamstrings'], s: [] } },
  ub4: { geraet: '🦵 Beinpresse 45° hoher Fußstand', muskeln: { p: ['Gesäß', 'Hamstrings'], s: ['Quadrizeps'] } },
  ub5: { geraet: '🏗️ Smith Machine breiter Stand', muskeln: { p: ['Gesäß'], s: ['Hamstrings', 'Waden'] } },
  ub6: { geraet: '🦵 Calf Raise Maschine', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },
};

export const EX: Record<string, Exercise> = {
  // ── OBERKÖRPER A ───────────────────────────────────────────────────────────
  oa1: {
    num: '01', name: 'Schrägbank Drücken KH (30°)',
    sets: 4, reps: '10–12', rest: '90s',
    tags: [['red', 'Obere Brust'], ['gold', 'Kurzhanteln']],
    tip: 'Hanteln tiefer als mit LH — nutze die volle Dehnung. Oben leicht zusammendrehen.',
    ytq: 'incline dumbbell press Charles Glass',
    repsMin: 10, repsMax: 12, startKg: 20,
  },
  oa2: {
    num: '02', name: 'Decline Bankdrücken LH',
    sets: 4, reps: '10–12', rest: '90s',
    tags: [['red', 'Untere Brust'], ['red', 'Compound']],
    tip: 'Bank auf −15° bis −30°. Schulterblätter fest zusammen. Maximale Kontraktion unten.',
    ytq: 'decline bench press technique',
    repsMin: 10, repsMax: 12, startKg: 60,
  },
  oa3: {
    num: '03', name: 'Pec Deck / Butterfly',
    sets: 3, reps: '13–15', rest: '60s',
    tags: [['gold', 'Isolation'], ['gold', 'Brust Mitte']],
    tip: '2 Sekunden in der Kontraktion halten. Langsam zurück zur Dehnung.',
    ytq: 'pec deck fly technique',
    repsMin: 13, repsMax: 15, startKg: 40,
  },
  oa4: {
    num: '04', name: 'Schulterdrücken KH (sitzend)',
    sets: 4, reps: '10–12', rest: '75s',
    tags: [['blue', 'Schulter']],
    tip: 'Ellenbogen leicht vor dem Körper halten. Keine volle Streckung oben.',
    ytq: 'seated dumbbell shoulder press',
    repsMin: 10, repsMax: 12, startKg: 16,
  },
  oa5: {
    num: '05', name: 'Seitliches Heben KH',
    sets: 4, reps: '12–15', rest: '60s',
    tags: [['blue', 'Mittlere Schulter']],
    tip: 'Kleinen Finger leicht oben halten. Kein Schwung aus der Hüfte.',
    ytq: 'lateral raise technique Charles Glass',
    repsMin: 12, repsMax: 15, startKg: 10,
  },
  oa6: {
    num: '06', name: 'Trizeps Pushdown (Seilzug)',
    sets: 4, reps: '12–15', rest: '60s',
    tags: [['green', 'Trizeps']],
    tip: 'Ellenbogen an den Seiten fixieren. Volle Streckung am Ende halten.',
    ytq: 'tricep pushdown rope cable',
    repsMin: 12, repsMax: 15, startKg: 20,
  },
  oa7: {
    num: '07', name: 'Overhead Trizeps Ext. (Kabel)',
    sets: 3, reps: '12–15', rest: '60s',
    tags: [['green', 'Trizeps'], ['red', 'Langer Kopf']],
    tip: 'Nur über dem Kopf wird der lange Trizeps-Kopf vollständig gedehnt.',
    ytq: 'overhead cable tricep extension',
    repsMin: 12, repsMax: 15, startKg: 15,
  },

  // ── UNTERKÖRPER A ──────────────────────────────────────────────────────────
  ua1: {
    num: '01', name: 'Kniebeugen Smith Machine',
    sets: 4, reps: '10–12', rest: '90s',
    tags: [['red', 'Compound'], ['gold', 'Quad-Fokus']],
    tip: 'Füße schulterbreit, Zehen leicht nach außen. Tief runter, explosiv hoch.',
    ytq: 'smith machine squat technique',
    repsMin: 10, repsMax: 12, startKg: 60,
  },
  ua2: {
    num: '02', name: 'Beinpresse 45°',
    sets: 4, reps: '12–15', rest: '90s',
    tags: [['red', 'Compound']],
    tip: 'Füße schulterbreit, mitte der Platte. Durch die Fersen drücken, Knie nie ganz strecken.',
    ytq: 'leg press technique',
    repsMin: 12, repsMax: 15, startKg: 100,
  },
  ua3: {
    num: '03', name: 'Leg Extension (Maschine)',
    sets: 3, reps: '15', rest: '60s',
    tags: [['gold', 'Isolation'], ['gold', 'Quad']],
    tip: '1–2 Sek oben halten. 3 Sek negativ. Kein Schwingen.',
    ytq: 'leg extension isolation technique',
    repsMin: 12, repsMax: 15, startKg: 40,
  },
  ua4: {
    num: '04', name: 'Ausfallschritte LH',
    sets: 3, reps: '10/Seite', rest: '90s',
    tags: [['red', 'Compound'], ['blue', 'Stabilität']],
    tip: 'Großer Schritt, hinteres Knie fast den Boden berühren. Aufrecht bleiben.',
    ytq: 'barbell lunge technique',
    repsMin: 10, repsMax: 12, startKg: 40,
  },
  ua5: {
    num: '05', name: 'Liegender Beinbeuger',
    sets: 3, reps: '12–15', rest: '60s',
    tags: [['green', 'Hamstring']],
    tip: 'Zehen anziehen für maximale Aktivierung. Langsam zur Dehnung zurück.',
    ytq: 'lying leg curl technique',
    repsMin: 12, repsMax: 15, startKg: 30,
  },
  ua6: {
    num: '06', name: 'Calf Raise (Maschine)',
    sets: 4, reps: '15–20', rest: '45s',
    tags: [['green', 'Waden']],
    tip: 'Volle Bewegung. 2 Sek oben halten, langsam runter. Keine halben Wiederholungen.',
    ytq: 'calf raise machine technique',
    repsMin: 15, repsMax: 20, startKg: 60,
  },

  // ── OBERKÖRPER B ───────────────────────────────────────────────────────────
  ob1: {
    num: '01', name: 'Klimmzüge (weiter Griff)',
    sets: 4, reps: '8–12', rest: '90s',
    tags: [['blue', 'Latissimus'], ['red', 'Compound']],
    tip: 'Schulterblätter zuerst nach unten ziehen, dann Ellenbogen. Kontrolliert hochkommen.',
    ytq: 'wide grip pull up technique',
    repsMin: 8, repsMax: 12, startKg: 0,
  },
  ob2: {
    num: '02', name: 'Lat Pulldown (weiter Griff)',
    sets: 3, reps: '12–15', rest: '75s',
    tags: [['blue', 'Latissimus']],
    tip: 'Brust leicht nach vorne. Ellenbogen zur Hüfte ziehen, nicht zum Körper.',
    ytq: 'lat pulldown wide grip technique',
    repsMin: 12, repsMax: 15, startKg: 50,
  },
  ob3: {
    num: '03', name: 'Sitzrudern (enger Griff)',
    sets: 4, reps: '10–12', rest: '90s',
    tags: [['red', 'Rückendicke']],
    tip: 'Schulterblätter am Ende maximal zusammendrücken. 1 Sek halten.',
    ytq: 'seated cable row technique',
    repsMin: 10, repsMax: 12, startKg: 50,
  },
  ob4: {
    num: '04', name: 'T-Bar Rudern',
    sets: 3, reps: '10–12', rest: '90s',
    tags: [['red', 'Rückendicke'], ['red', 'Compound']],
    tip: 'Ellenbogen eng am Körper. Brust auf die Pad-Ablage drücken, Schulterblätter zusammen.',
    ytq: 'T bar row technique',
    repsMin: 10, repsMax: 12, startKg: 40,
  },
  ob5: {
    num: '05', name: 'Face Pull (Kabel)',
    sets: 3, reps: '15', rest: '60s',
    tags: [['blue', 'Hintere Schulter'], ['gold', 'Gesundheit']],
    tip: 'Seil auf Augenhöhe. Außenrotation am Ende 2 Sek halten. Schultergesundheit!',
    ytq: 'face pull technique Jeff Nippard',
    repsMin: 12, repsMax: 15, startKg: 15,
  },
  ob6: {
    num: '06', name: 'Preacher Curl EZ-Stange',
    sets: 3, reps: '10–12', rest: '60s',
    tags: [['purple', 'Bizeps']],
    tip: 'Volle Dehnung unten, volle Kontraktion oben. Langsam runter (3 Sek).',
    ytq: 'preacher curl EZ bar technique',
    repsMin: 10, repsMax: 12, startKg: 20,
  },
  ob7: {
    num: '07', name: 'Hammer Curl KH',
    sets: 3, reps: '12', rest: '60s',
    tags: [['purple', 'Bizeps'], ['blue', 'Brachialis']],
    tip: 'Neutraler Griff. Trifft Brachialis und den langen Bizeps-Kopf.',
    ytq: 'hammer curl technique',
    repsMin: 10, repsMax: 12, startKg: 14,
  },

  // ── UNTERKÖRPER B ──────────────────────────────────────────────────────────
  ub1: {
    num: '01', name: 'Romanian Deadlift (RDL)',
    sets: 4, reps: '8–10', rest: '90s',
    tags: [['red', 'Compound'], ['green', 'Hamstring']],
    tip: 'Rücken immer gerade. Hüfte weit nach hinten schieben. Dehnung unten 1 Sek halten.',
    ytq: 'romanian deadlift technique',
    repsMin: 8, repsMax: 10, startKg: 60,
  },
  ub2: {
    num: '02', name: 'Liegender Beinbeuger',
    sets: 4, reps: '12–15', rest: '60s',
    tags: [['gold', 'Isolation'], ['green', 'Hamstring']],
    tip: 'Zehen anziehen. Volle Kontraktion oben. 3 Sek negativ runter.',
    ytq: 'lying leg curl machine technique',
    repsMin: 12, repsMax: 15, startKg: 35,
  },
  ub3: {
    num: '03', name: 'Sitzender Beinbeuger',
    sets: 3, reps: '12–15', rest: '60s',
    tags: [['gold', 'Isolation']],
    tip: 'Anderer Winkel = andere Fasern. Volle Dehnung, volle Kontraktion.',
    ytq: 'seated leg curl technique',
    repsMin: 12, repsMax: 15, startKg: 30,
  },
  ub4: {
    num: '04', name: 'Beinpresse (hoher Fußstand)',
    sets: 3, reps: '12–15', rest: '90s',
    tags: [['red', 'Compound'], ['green', 'Gesäß']],
    tip: 'Füße hoch auf der Platte → aktiviert Gesäß und Hamstring stärker als normal.',
    ytq: 'leg press high foot placement glutes',
    repsMin: 12, repsMax: 15, startKg: 80,
  },
  ub5: {
    num: '05', name: 'Sumo Kniebeugen (Smith Machine)',
    sets: 3, reps: '12–15', rest: '75s',
    tags: [['green', 'Gesäß'], ['red', 'Compound']],
    tip: 'Breiter Stand, Zehen weit nach außen. Gesäß tief runterdrücken, Knie über Zehen.',
    ytq: 'sumo squat smith machine glutes',
    repsMin: 12, repsMax: 15, startKg: 50,
  },
  ub6: {
    num: '06', name: 'Calf Raise (Maschine)',
    sets: 4, reps: '15–20', rest: '45s',
    tags: [['green', 'Waden']],
    tip: 'Volle Bewegung. 2 Sek oben halten. Waden brauchen viel Volumen.',
    ytq: 'calf raise machine technique',
    repsMin: 15, repsMax: 20, startKg: 60,
  },
};

export const DAY_EX: Record<string, string[]> = {
  mo: ['oa1','oa2','oa3','oa4','oa5','oa6','oa7'],
  mi: ['ua1','ua2','ua3','ua4','ua5','ua6'],
  fr: ['ob1','ob2','ob3','ob4','ob5','ob6','ob7'],
  so: ['ub1','ub2','ub3','ub4','ub5','ub6'],
};

export const DAY_META: Record<string, DayMeta> = {
  mo: { label: 'Oberkörper A', color: 'var(--red)',    cls: 't-push',  emoji: '🔴' },
  mi: { label: 'Unterkörper A', color: 'var(--green)', cls: 't-legs',  emoji: '🟢' },
  fr: { label: 'Oberkörper B', color: 'var(--blue)',   cls: 't-pull',  emoji: '🔵' },
  so: { label: 'Unterkörper B', color: 'var(--purple)',cls: 't-pushb', emoji: '🟣' },
};

export interface DaySection {
  title: string;
  badge: string;
  ids: string[];
}

export const DAY_SECTIONS: Record<string, { note: string; sections: DaySection[] }> = {
  mo: {
    note: 'Brust + Schulter + Trizeps. Schulterblätter zusammendrücken, Brust raus. Volle Kontraktion jeden Satz.',
    sections: [
      { title: 'Brust', badge: 'Chest', ids: ['oa1','oa2','oa3'] },
      { title: 'Schulter', badge: 'Delts', ids: ['oa4','oa5'] },
      { title: 'Trizeps', badge: 'Triceps', ids: ['oa6','oa7'] },
    ],
  },
  mi: {
    note: 'Quad-Fokus. Kein Bouncing unten. Jede Wiederholung kontrolliert senken — explosiv hoch.',
    sections: [
      { title: 'Quadrizeps', badge: 'Quad', ids: ['ua1','ua2','ua3','ua4'] },
      { title: 'Hamstrings', badge: 'Posterior', ids: ['ua5'] },
      { title: 'Waden', badge: 'Calves', ids: ['ua6'] },
    ],
  },
  fr: {
    note: 'Rücken + Bizeps. Mit den Ellenbogen ziehen, nicht mit den Händen. Schulterblätter zuerst runterziehen.',
    sections: [
      { title: 'Rückenbreite', badge: 'Latissimus', ids: ['ob1','ob2'] },
      { title: 'Rückendicke', badge: 'Thickness', ids: ['ob3','ob4'] },
      { title: 'Hintere Schulter', badge: 'Rear Delt', ids: ['ob5'] },
      { title: 'Bizeps', badge: 'Biceps', ids: ['ob6','ob7'] },
    ],
  },
  so: {
    note: 'Hamstring + Gesäß Fokus. Rücken immer gerade halten. Dehnung unten maximieren. Kontrolliert senken.',
    sections: [
      { title: 'Hamstrings', badge: 'Posterior Chain', ids: ['ub1','ub2','ub3'] },
      { title: 'Gesäß', badge: 'Glutes', ids: ['ub4','ub5'] },
      { title: 'Waden', badge: 'Calves', ids: ['ub6'] },
    ],
  },
};

export const DAYS = ['mo','mi','fr','so','stats'];

export const DAY_LABELS: Record<string, { short: string; name: string; type: string }> = {
  mo: { short: 'Mo', name: 'Oben A', type: 'BRUST · SCHULTER · TRI' },
  mi: { short: 'Mi', name: 'Unten A', type: 'QUAD · HAMSTRING · WADEN' },
  fr: { short: 'Fr', name: 'Oben B', type: 'RÜCKEN · BIZEPS' },
  so: { short: 'So', name: 'Unten B', type: 'HAMS · GESÄSS · WADEN' },
  stats: { short: '📊', name: 'Stats', type: 'ZIELE & FORTSCHRITT' },
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
