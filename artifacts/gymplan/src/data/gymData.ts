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
  mo01: { geraet: '🏋️ Kurzhanteln + Schrägbank (30°)', muskeln: { p: ['Obere Brust'], s: ['Vordere Schulter', 'Trizeps'] } },
  mo02: { geraet: '🏗️ Schrägbank Maschine (30°)', muskeln: { p: ['Obere Brust'], s: ['Vordere Schulter', 'Trizeps'] } },
  mo03: { geraet: '🏋️ Guillotine Press Schrägbank 30°', muskeln: { p: ['Obere Brust'], s: ['Vordere Schulter'] } },
  mo04: { geraet: '🏗️ Smith Machine — quer auf Bank', muskeln: { p: ['Mittlere Brust', 'Innere Brust'], s: ['Trizeps'] } },
  mo05: { geraet: '🦋 Pec Deck / Butterfly', muskeln: { p: ['Mittlere Brust'], s: ['Innere Brust'] } },
  mo06: { geraet: '🏗️ Decline-Bank + Langhantel', muskeln: { p: ['Untere Brust'], s: ['Trizeps', 'Vordere Schulter'] } },
  mo07: { geraet: '🏗️ Dip-Stangen — nach vorne gelehnt', muskeln: { p: ['Untere Brust'], s: ['Trizeps'] } },
  mo08: { geraet: '💪 Kurzhanteln + aufrechte Bank', muskeln: { p: ['Mittlere Schulter', 'Vordere Schulter'], s: ['Trizeps'] } },
  mo09: { geraet: '💪 Kurzhanteln stehend', muskeln: { p: ['Mittlere Schulter'], s: ['Vordere Schulter'] } },
  mo10: { geraet: '🔗 Kabelzug + Seilgriff oben', muskeln: { p: ['Trizeps alle 3 Köpfe'], s: [] } },
  mo11: { geraet: '🔗 Kabelzug oder KH über Kopf', muskeln: { p: ['Trizeps langer Kopf'], s: [] } },
  mo12: { geraet: '💪 Kurzhanteln + flache Bank', muskeln: { p: ['Trizeps langer Kopf'], s: [] } },
  mi01: { geraet: '🏗️ Klimmzug-Stange weiter Griff', muskeln: { p: ['Latissimus', 'Rückenbreite'], s: ['Bizeps', 'Hintere Schulter'] } },
  mi02: { geraet: '🔗 Lat Pulldown weiter Griff', muskeln: { p: ['Latissimus'], s: ['Bizeps', 'Hintere Schulter'] } },
  mi03: { geraet: '🔗 Straight Arm Pulldown', muskeln: { p: ['Latissimus Isolation'], s: ['Hintere Schulter'] } },
  mi04: { geraet: '🔗 Rudermaschine enger Griff', muskeln: { p: ['Mittlerer Rücken', 'Rhomboideus'], s: ['Bizeps', 'Latissimus'] } },
  mi05: { geraet: '🏗️ T-Bar Rudergerät', muskeln: { p: ['Mittlerer Rücken', 'Trapez'], s: ['Bizeps', 'Latissimus'] } },
  mi06: { geraet: '🔗 Kabelzug Enges Rudern', muskeln: { p: ['Mittlerer Rücken'], s: ['Bizeps'] } },
  mi07: { geraet: '🔗 Cable Face Pull', muskeln: { p: ['Hintere Schulter', 'Außenrotatoren'], s: ['Trapez'] } },
  mi08: { geraet: '🏋️ Drag Curl Langhantel', muskeln: { p: ['Bizeps langer Kopf'], s: ['Brachialis'] } },
  mi09: { geraet: '🏋️ EZ-Stange + Scottbank', muskeln: { p: ['Bizeps kurzer Kopf'], s: ['Brachialis'] } },
  mi10: { geraet: '💪 Hammer Curl KH', muskeln: { p: ['Brachialis', 'Brachioradialis'], s: ['Bizeps'] } },
  fr01: { geraet: '🏗️ Smith Machine Kniebeugen', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Hamstrings'] } },
  fr02: { geraet: '🦵 Beinpresse 45°', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Waden'] } },
  fr03: { geraet: '🦵 Beinstrecker Maschine', muskeln: { p: ['Quadrizeps Isolation'], s: [] } },
  fr04: { geraet: '🚶 Ausfallschritte Langhantel', muskeln: { p: ['Quadrizeps', 'Gesäß'], s: ['Hamstrings', 'Waden'] } },
  fr05: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  fr06: { geraet: '🏋️ Romanian Deadlift', muskeln: { p: ['Hamstrings', 'Gesäß'], s: ['Unterer Rücken'] } },
  fr07: { geraet: '🦵 Sitzender Beinbeuger', muskeln: { p: ['Hamstrings'], s: [] } },
  fr08: { geraet: '🦵 Standing Calf Raise', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },
  sop01: { geraet: '🏋️ Negatives Bankdrücken flach', muskeln: { p: ['Gesamte Brust exzentrisch'], s: ['Trizeps', 'Vordere Schulter'] } },
  sop02: { geraet: '🏗️ Brustpresse Maschine', muskeln: { p: ['Mittlere Brust'], s: ['Trizeps'] } },
  sop03: { geraet: '🔗 Kabelzug Fly tief→hoch', muskeln: { p: ['Untere Brust'], s: ['Mittlere Brust'] } },
  sop04: { geraet: '💪 Vorgebeugtes Seitheben', muskeln: { p: ['Hintere Schulter'], s: ['Trapez', 'Rhomboideus'] } },
  sop05: { geraet: '🔗 Cable Lateral Raise', muskeln: { p: ['Mittlere Schulter'], s: [] } },
  sop06: { geraet: '🏗️ Dip-Stangen', muskeln: { p: ['Trizeps'], s: ['Untere Brust', 'Schulter'] } },
  sop07: { geraet: '🔗 Einarmige Kabel Extension', muskeln: { p: ['Trizeps alle Köpfe'], s: [] } },
};

export const EX: Record<string, Exercise> = {
  mo01: { num: '01', name: 'Schrägbankdrücken KH (30°)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Obere Brust'], ['gold', 'KH']], tip: 'Tiefere Dehnung als LH. Hanteln leicht nach innen drehen oben.', ytq: 'incline dumbbell press technique', repsMin: 10, repsMax: 12, startKg: 20 },
  mo02: { num: '02', name: 'Schrägbankdrücken Maschine', sets: 3, reps: '12–15', rest: '75s', tags: [['red', 'Obere Brust'], ['gold', 'Maschine']], tip: 'Konstante Spannung. Schulterblätter fest zusammen.', ytq: 'incline chest press machine', repsMin: 12, repsMax: 15, startKg: 40 },
  mo03: { num: '03', name: 'Guillotine Press (30°)', sets: 4, reps: '12–15', rest: '90s', tags: [['red', 'Obere Brust'], ['red', 'Glass Favorit']], tip: 'Stange zum Schlüsselbein. Maximaler Stretch.', ytq: 'Charles Glass guillotine press', repsMin: 12, repsMax: 15, startKg: 40 },
  mo04: { num: '04', name: 'Smith Machine Champagne Press', sets: 4, reps: '12', rest: '90s', tags: [['gold', 'Glass Favorit'], ['gold', 'Mitte']], tip: 'Quer auf Bank. Isoliert innere + mittlere Brust.', ytq: 'Charles Glass champagne press', repsMin: 10, repsMax: 12, startKg: 50 },
  mo05: { num: '05', name: 'Pec Deck / Butterfly', sets: 3, reps: '13–15', rest: '60s', tags: [['gold', 'Isolation'], ['gold', 'Mitte']], tip: 'Volle Kontraktion in der Mitte – 2 Sek halten.', ytq: 'Charles Glass pec deck', repsMin: 13, repsMax: 15, startKg: 40 },
  mo06: { num: '06', name: 'Decline Bankdrücken', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Untere Brust'], ['red', 'Glass #1']], tip: 'Bank auf -15° bis -30°. Maximale Kontraktion.', ytq: 'Charles Glass decline bench press', repsMin: 10, repsMax: 12, startKg: 60 },
  mo07: { num: '07', name: 'Dips — nach vorne gelehnt', sets: 3, reps: '10–12', rest: '75s', tags: [['red', 'Untere Brust'], ['red', 'Compound']], tip: 'Oberkörper WEIT nach vorne lehnen (30–45°).', ytq: 'chest dips forward lean', repsMin: 10, repsMax: 12, startKg: 0 },
  mo08: { num: '08', name: 'Schulterdrücken KH (sitzend)', sets: 4, reps: '10–12', rest: '75s', tags: [['blue', 'Schulter']], tip: 'Ellenbogen leicht vor dem Körper.', ytq: 'dumbbell shoulder press technique', repsMin: 10, repsMax: 12, startKg: 16 },
  mo09: { num: '09', name: 'Seitliches Heben', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Schulter']], tip: 'Kleinen Finger leicht hoch drehen. Kein Schwung.', ytq: 'Charles Glass lateral raise', repsMin: 12, repsMax: 15, startKg: 10 },
  mo10: { num: '10', name: 'Kabelzug Pushdown (Seil)', sets: 4, reps: '12–15', rest: '60s', tags: [['green', 'Trizeps']], tip: 'Ellenbogen seitlich fixiert.', ytq: 'tricep pushdown cable', repsMin: 12, repsMax: 15, startKg: 20 },
  mo11: { num: '11', name: 'Overhead Trizeps Extension', sets: 3, reps: '12–15', rest: '75s', tags: [['green', 'Trizeps'], ['red', 'Langer Kopf']], tip: 'Nur Overhead dehnt den langen Kopf vollständig.', ytq: 'overhead tricep extension', repsMin: 12, repsMax: 15, startKg: 15 },
  mo12: { num: '12', name: 'KH Trizeps Extension (liegend)', sets: 3, reps: '12–15', rest: '60s', tags: [['green', 'Trizeps'], ['gold', 'Glass Favorit']], tip: 'Ellenbogen eng, nur Unterarm bewegt sich.', ytq: 'lying tricep extension dumbbell', repsMin: 12, repsMax: 15, startKg: 12 },
  mi01: { num: '01', name: 'Klimmzüge (weiter Griff)', sets: 4, reps: '8–12', rest: '90s', tags: [['blue', 'Breite'], ['red', 'Compound']], tip: 'Schulterblätter zuerst nach unten.', ytq: 'pull ups wide grip technique', repsMin: 8, repsMax: 12, startKg: 0 },
  mi02: { num: '02', name: 'Lat Pulldown (weiter Griff)', sets: 3, reps: '12–15', rest: '75s', tags: [['blue', 'Breite']], tip: 'Brust nach vorne, leichtes Zurücklehnen.', ytq: 'lat pulldown technique', repsMin: 12, repsMax: 15, startKg: 50 },
  mi03: { num: '03', name: 'Straight Arm Pulldown', sets: 3, reps: '12–15', rest: '60s', tags: [['blue', 'Breite'], ['gold', 'Isolation']], tip: 'Arme gestreckt lassen. Nur der Lat arbeitet.', ytq: 'straight arm pulldown', repsMin: 12, repsMax: 15, startKg: 30 },
  mi04: { num: '04', name: 'Sitzrudern Maschine (eng)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Dicke']], tip: 'Schulterblätter maximal zusammendrücken.', ytq: 'seated cable row technique', repsMin: 10, repsMax: 12, startKg: 50 },
  mi05: { num: '05', name: 'T-Bar Rudern', sets: 3, reps: '10–12', rest: '90s', tags: [['red', 'Dicke'], ['red', 'Compound']], tip: 'Ellenbogen eng. Schulterblätter zusammen.', ytq: 'T bar row technique', repsMin: 10, repsMax: 12, startKg: 40 },
  mi06: { num: '06', name: 'Enges Rudern Maschine', sets: 3, reps: '12–15', rest: '75s', tags: [['red', 'Dicke'], ['gold', 'Maschine']], tip: 'Schulterblatt vollständig zusammenziehen.', ytq: 'close grip cable row', repsMin: 12, repsMax: 15, startKg: 45 },
  mi07: { num: '07', name: 'Cable Face Pull', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Hintere Schulter'], ['gold', 'Glass Favorit']], tip: 'Seil auf Augenhöhe. Außenrotation 2 Sek.', ytq: 'face pull technique', repsMin: 12, repsMax: 15, startKg: 15 },
  mi08: { num: '08', name: 'Drag Curl (Langhantel)', sets: 3, reps: '10–12', rest: '60s', tags: [['purple', 'Bizeps'], ['red', 'Glass Favorit']], tip: 'Stange nah am Körper hochziehen.', ytq: 'drag curl technique', repsMin: 10, repsMax: 12, startKg: 30 },
  mi09: { num: '09', name: 'Preacher Curl (EZ-Stange)', sets: 3, reps: '10–12', rest: '60s', tags: [['purple', 'Bizeps']], tip: 'Volle Dehnung unten, volle Kontraktion oben.', ytq: 'preacher curl technique', repsMin: 10, repsMax: 12, startKg: 20 },
  mi10: { num: '10', name: 'Hammer Curl (KH)', sets: 3, reps: '12', rest: '60s', tags: [['purple', 'Bizeps'], ['blue', 'Brachialis']], tip: 'Neutraler Griff. Trifft Brachialis und langen Kopf.', ytq: 'hammer curl technique', repsMin: 10, repsMax: 12, startKg: 14 },
  fr01: { num: '01', name: 'Kniebeugen (Smith Machine)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Compound']], tip: 'Füße schulterbreit, tief, explosiv hoch.', ytq: 'squat technique smith machine', repsMin: 10, repsMax: 12, startKg: 60 },
  fr02: { num: '02', name: 'Beinpresse (45°)', sets: 4, reps: '12–15', rest: '90s', tags: [['red', 'Compound']], tip: 'Durch die Ballen drücken. Knie nie ganz strecken.', ytq: 'leg press technique', repsMin: 12, repsMax: 15, startKg: 100 },
  fr03: { num: '03', name: 'Beinstrecker (Leg Extension)', sets: 3, reps: '15', rest: '60s', tags: [['gold', 'Isolation']], tip: '1–2 Sek halten oben. 3 Sek Negativ.', ytq: 'leg extension technique', repsMin: 12, repsMax: 15, startKg: 40 },
  fr04: { num: '04', name: 'Ausfallschritte Langhantel', sets: 3, reps: '10–12/Seite', rest: '90s', tags: [['red', 'Compound'], ['blue', 'Stabilität']], tip: 'Großer Schritt, hinteres Knie fast auf Boden.', ytq: 'barbell walking lunges', repsMin: 10, repsMax: 12, startKg: 40 },
  fr05: { num: '05', name: 'Liegender Beinbeuger', sets: 4, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation']], tip: 'Zehen anziehen für maximale Hamstring-Aktivierung.', ytq: 'lying leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  fr06: { num: '06', name: 'Romanian Deadlift', sets: 3, reps: '10–12', rest: '90s', tags: [['red', 'Compound']], tip: 'Rücken gerade, Hüfte hinten. Dehnung spüren.', ytq: 'romanian deadlift technique', repsMin: 10, repsMax: 12, startKg: 60 },
  fr07: { num: '07', name: 'Sitzender Beinbeuger', sets: 3, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation']], tip: 'Volle Dehnung, volle Kontraktion.', ytq: 'seated leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  fr08: { num: '08', name: 'Standing Calf Raise', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden']], tip: 'Volle ROM. 2 Sek oben halten.', ytq: 'standing calf raise technique', repsMin: 15, repsMax: 20, startKg: 60 },
  sop01: { num: '01', name: 'Negatives Bankdrücken', sets: 4, reps: '4–6', rest: '120s', tags: [['red', 'Negativ'], ['gold', 'Stärke']], tip: '4–5 Sek senken. Sicherungspartner notwendig.', ytq: 'negative bench press technique', repsMin: 4, repsMax: 6, startKg: 80 },
  sop02: { num: '02', name: 'Brustpresse Maschine', sets: 3, reps: '12–15', rest: '60s', tags: [['gold', 'Maschine']], tip: 'Sitz auf Brusthöhe. 2 Sek einpressen.', ytq: 'machine chest press technique', repsMin: 12, repsMax: 15, startKg: 50 },
  sop03: { num: '03', name: 'Kabelzug Fly tief → hoch', sets: 3, reps: '13–15', rest: '60s', tags: [['red', 'Untere Brust']], tip: 'Hände in der Mitte leicht überkreuzen.', ytq: 'cable fly lower chest', repsMin: 13, repsMax: 15, startKg: 15 },
  sop04: { num: '04', name: 'Vorgebeugtes Seitheben', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Hintere Schulter']], tip: '45° vorgebeugt. Ellenbogen nach hinten oben.', ytq: 'bent over lateral raise', repsMin: 12, repsMax: 15, startKg: 10 },
  sop05: { num: '05', name: 'Cable Lateral Raise', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Schulter']], tip: 'Konstantere Spannung als Kurzhanteln.', ytq: 'cable lateral raise technique', repsMin: 12, repsMax: 15, startKg: 10 },
  sop06: { num: '06', name: 'Dips (Trizepsdips)', sets: 3, reps: '10–12', rest: '75s', tags: [['green', 'Trizeps'], ['red', 'Compound']], tip: 'Aufrecht bleiben für Trizepsfokus.', ytq: 'tricep dips technique', repsMin: 10, repsMax: 12, startKg: 0 },
  sop07: { num: '07', name: 'Einarmige Kabel Extension', sets: 3, reps: '12/Seite', rest: '60s', tags: [['green', 'Trizeps'], ['gold', 'Isolation']], tip: 'Ellenbogen fixiert. 1 Sek halten.', ytq: 'single arm cable tricep extension', repsMin: 10, repsMax: 12, startKg: 12 },
};

export const DAY_EX: Record<string, string[]> = {
  mo: ['mo01','mo02','mo03','mo04','mo05','mo06','mo07','mo08','mo09','mo10','mo11','mo12'],
  mi: ['mi01','mi02','mi03','mi04','mi05','mi06','mi07','mi08','mi09','mi10'],
  fr: ['fr01','fr02','fr03','fr04','fr05','fr06','fr07','fr08'],
  so: ['sop01','sop02','sop03','sop04','sop05','sop06','sop07'],
};

export const DAY_META: Record<string, DayMeta> = {
  mo: { label: 'Push A', color: 'var(--red)', cls: 't-push', emoji: '🔴' },
  mi: { label: 'Pull', color: 'var(--blue)', cls: 't-pull', emoji: '🔵' },
  fr: { label: 'Beine', color: 'var(--green)', cls: 't-legs', emoji: '🟢' },
  so: { label: 'Push B', color: 'var(--purple)', cls: 't-pushb', emoji: '🟣' },
};

export interface DaySection {
  title: string;
  badge: string;
  ids: string[];
}

export const DAY_SECTIONS: Record<string, { note: string; sections: DaySection[] }> = {
  mo: {
    note: 'Schultern hinten und unten. Brust raus, Schulterblätter zusammen. Volle Kontraktion jeden Satz.',
    sections: [
      { title: 'Obere Brust', badge: 'Clavicular', ids: ['mo01','mo02','mo03'] },
      { title: 'Mittlere Brust', badge: 'Sternal', ids: ['mo04','mo05'] },
      { title: 'Untere Brust', badge: 'Lower Pec', ids: ['mo06','mo07'] },
      { title: 'Schulter', badge: 'Delts', ids: ['mo08','mo09'] },
      { title: 'Trizeps', badge: 'Triceps', ids: ['mo10','mo11','mo12'] },
    ],
  },
  mi: {
    note: 'Mit den Ellenbogen ziehen. Schulterblätter zuerst runterziehen. Bizeps vollständig einpressen.',
    sections: [
      { title: 'Rückenbreite', badge: 'Latissimus', ids: ['mi01','mi02','mi03'] },
      { title: 'Rückendicke', badge: 'Thickness', ids: ['mi04','mi05','mi06'] },
      { title: 'Hintere Schulter', badge: 'Rear Delt', ids: ['mi07'] },
      { title: 'Bizeps', badge: 'Biceps', ids: ['mi08','mi09','mi10'] },
    ],
  },
  fr: {
    note: 'Kein Bouncing. Jede Wiederholung kontrolliert. Oben kurz einpressen.',
    sections: [
      { title: 'Quadrizeps', badge: 'Schwerpunkt', ids: ['fr01','fr02','fr03','fr04'] },
      { title: 'Hamstrings & Gesäß', badge: 'Posterior', ids: ['fr05','fr06','fr07'] },
      { title: 'Waden', badge: 'Calves', ids: ['fr08'] },
    ],
  },
  so: {
    note: 'Variation zum Montag. Negativ-Bankdrücken — 4–5 Sek senken, explosiv hoch.',
    sections: [
      { title: 'Brust', badge: 'Variation', ids: ['sop01','sop02','sop03'] },
      { title: 'Schulter', badge: 'Variation', ids: ['sop04','sop05'] },
      { title: 'Trizeps', badge: 'Variation', ids: ['sop06','sop07'] },
    ],
  },
};

export const DAYS = ['mo','mi','fr','so','stats'];
export const DAY_LABELS: Record<string, { short: string; name: string; type: string }> = {
  mo: { short: 'Mo', name: 'Push', type: 'BRUST·TRI' },
  mi: { short: 'Mi', name: 'Pull', type: 'RÜCKEN·BIZ' },
  fr: { short: 'Fr', name: 'Beine', type: 'LEGS' },
  so: { short: 'So', name: 'Push B', type: 'VARIATION' },
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
