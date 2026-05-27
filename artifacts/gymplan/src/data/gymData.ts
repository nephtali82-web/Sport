export interface ExerciseInfo {
  geraet: string;
  muskeln: { p: string[]; s: string[] };
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

// ── PLAN EXERCISES ────────────────────────────────────────────────────────────

export const INFO: Record<string, ExerciseInfo> = {
  // OBERKÖRPER A (Mo) — Brust + Schulter + Trizeps
  oa1: { geraet: '🏋️ Schrägbank + Kurzhanteln (30°)', muskeln: { p: ['Obere Brust'], s: ['Vordere Schulter', 'Trizeps'] } },
  oa2: { geraet: '🏗️ Decline-Bank + Langhantel', muskeln: { p: ['Untere Brust'], s: ['Trizeps'] } },
  oa3: { geraet: '🦋 Pec Deck Maschine', muskeln: { p: ['Brust Isolation'], s: ['Innere Brust'] } },
  oa4: { geraet: '💪 Kurzhanteln + aufrechte Bank', muskeln: { p: ['Vordere/Mittlere Schulter'], s: ['Trizeps'] } },
  oa5: { geraet: '💪 Kurzhanteln stehend', muskeln: { p: ['Mittlere Schulter'], s: [] } },
  oa6: { geraet: '🔗 Kabelzug Seilgriff oben', muskeln: { p: ['Trizeps alle 3 Köpfe'], s: [] } },
  oa7: { geraet: '🔗 Kabelzug oder KH über Kopf', muskeln: { p: ['Trizeps langer Kopf'], s: [] } },
  // UNTERKÖRPER A (Mi) — Quad-Fokus
  ua1: { geraet: '🏗️ Smith Machine', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Hamstrings'] } },
  ua2: { geraet: '🦵 Beinpresse 45°', muskeln: { p: ['Quadrizeps'], s: ['Gesäß', 'Waden'] } },
  ua3: { geraet: '🦵 Leg Extension Maschine', muskeln: { p: ['Quadrizeps Isolation'], s: [] } },
  ua4: { geraet: '🚶 Langhantel', muskeln: { p: ['Quadrizeps', 'Gesäß'], s: ['Hamstrings'] } },
  ua5: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  ua6: { geraet: '🦵 Calf Raise Maschine', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },
  // OBERKÖRPER B (Fr) — Rücken + Bizeps
  ob1: { geraet: '🏗️ Klimmzug-Stange weiter Griff', muskeln: { p: ['Latissimus'], s: ['Bizeps', 'Hintere Schulter'] } },
  ob2: { geraet: '🔗 Lat Pulldown Maschine', muskeln: { p: ['Latissimus'], s: ['Bizeps'] } },
  ob3: { geraet: '🔗 Kabelzug enger Griff', muskeln: { p: ['Mittlerer Rücken', 'Rhomboideus'], s: ['Bizeps'] } },
  ob4: { geraet: '🏗️ T-Bar Gerät', muskeln: { p: ['Mittlerer Rücken', 'Trapez'], s: ['Latissimus'] } },
  ob5: { geraet: '🔗 Cable Face Pull', muskeln: { p: ['Hintere Schulter', 'Außenrotatoren'], s: ['Trapez'] } },
  ob6: { geraet: '🏋️ EZ-Stange Scottbank', muskeln: { p: ['Bizeps kurzer Kopf'], s: ['Brachialis'] } },
  ob7: { geraet: '💪 Kurzhanteln neutraler Griff', muskeln: { p: ['Brachialis', 'Brachioradialis'], s: ['Bizeps'] } },
  // UNTERKÖRPER B (So) — Hamstring + Gesäß-Fokus
  ub1: { geraet: '🏋️ Langhantel', muskeln: { p: ['Hamstrings', 'Gesäß'], s: ['Unterer Rücken'] } },
  ub2: { geraet: '🦵 Liegender Beinbeuger', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  ub3: { geraet: '🦵 Sitzender Beinbeuger', muskeln: { p: ['Hamstrings'], s: [] } },
  ub4: { geraet: '🦵 Beinpresse 45° hoher Fußstand', muskeln: { p: ['Gesäß', 'Hamstrings'], s: ['Quadrizeps'] } },
  ub5: { geraet: '🏗️ Smith Machine breiter Stand', muskeln: { p: ['Gesäß'], s: ['Hamstrings', 'Waden'] } },
  ub6: { geraet: '🦵 Calf Raise Maschine', muskeln: { p: ['Wadenmuskeln'], s: ['Soleus'] } },

  // ── BIBLIOTHEK ─────────────────────────────────────────────────────────────
  // Brust
  lib_c1: { geraet: '🏗️ Flachbank + Langhantel', muskeln: { p: ['Mittlere Brust'], s: ['Vordere Schulter', 'Trizeps'] } },
  lib_c2: { geraet: '🔗 Kabelzug Fly (mittlere Höhe)', muskeln: { p: ['Mittlere Brust', 'Innere Brust'], s: [] } },
  lib_c3: { geraet: '🏗️ Parallel Bars (Dips)', muskeln: { p: ['Untere Brust'], s: ['Trizeps', 'Vordere Schulter'] } },
  lib_c4: { geraet: '🏗️ Schrägbank Maschine', muskeln: { p: ['Obere Brust'], s: ['Schulter', 'Trizeps'] } },
  lib_c5: { geraet: '🔗 Kabelzug Crossover (oben)', muskeln: { p: ['Untere/Innere Brust'], s: [] } },
  lib_c6: { geraet: '💪 Liegestütz (gewichtet)', muskeln: { p: ['Brust'], s: ['Trizeps', 'Schulter'] } },
  // Schulter
  lib_s1: { geraet: '💪 Kurzhanteln sitzend', muskeln: { p: ['Vordere/Mittlere Schulter'], s: ['Trizeps'] } },
  lib_s2: { geraet: '💪 Kurzhanteln stehend', muskeln: { p: ['Vordere Schulter'], s: [] } },
  lib_s3: { geraet: '🏋️ Langhantel enger Griff', muskeln: { p: ['Mittlere Schulter', 'Trapez'], s: ['Bizeps'] } },
  lib_s4: { geraet: '🏗️ Schulterdrücken Maschine', muskeln: { p: ['Mittlere/Vordere Schulter'], s: ['Trizeps'] } },
  lib_s5: { geraet: '🔗 Kabelzug seitlich', muskeln: { p: ['Mittlere Schulter Isolation'], s: [] } },
  // Trizeps
  lib_t1: { geraet: '🏗️ Parallel Bars (eng)', muskeln: { p: ['Trizeps alle 3 Köpfe'], s: ['Brust', 'Schulter'] } },
  lib_t2: { geraet: '🏋️ EZ-Stange liegend', muskeln: { p: ['Trizeps langer/mittlerer Kopf'], s: [] } },
  lib_t3: { geraet: '🏗️ Flachbank + LH enger Griff', muskeln: { p: ['Trizeps'], s: ['Brust', 'Schulter'] } },
  lib_t4: { geraet: '💪 KH French Press sitzend', muskeln: { p: ['Trizeps langer Kopf'], s: [] } },
  lib_t5: { geraet: '🔗 Kabelzug Reverse Grip', muskeln: { p: ['Trizeps lateraler Kopf'], s: [] } },
  // Rücken Breite
  lib_rb1: { geraet: '💪 KH einarmig (Kniebank)', muskeln: { p: ['Latissimus', 'Mittlerer Rücken'], s: ['Bizeps'] } },
  lib_rb2: { geraet: '🏗️ Assisted Pull-Up Maschine', muskeln: { p: ['Latissimus'], s: ['Bizeps'] } },
  lib_rb3: { geraet: '🔗 Neutralgriff Pulldown', muskeln: { p: ['Latissimus', 'Teres Major'], s: ['Bizeps'] } },
  lib_rb4: { geraet: '🔗 Straight Arm Pulldown', muskeln: { p: ['Latissimus Isolation'], s: [] } },
  lib_rb5: { geraet: '🔗 Pull-Over Kabelzug', muskeln: { p: ['Latissimus', 'Brust'], s: ['Trizeps'] } },
  // Rücken Dicke
  lib_rd1: { geraet: '🏋️ Langhantel Rudern vorgebeugt', muskeln: { p: ['Mittlerer Rücken'], s: ['Bizeps', 'Latissimus'] } },
  lib_rd2: { geraet: '🏗️ Chest Supported Row', muskeln: { p: ['Mittlerer Rücken', 'Rhomboideus'], s: ['Bizeps'] } },
  lib_rd3: { geraet: '🔗 Low Cable Row (weiter Griff)', muskeln: { p: ['Latissimus', 'Mittlerer Rücken'], s: ['Bizeps'] } },
  lib_rd4: { geraet: '💪 KH Rudern zweiarmig', muskeln: { p: ['Mittlerer Rücken'], s: ['Bizeps', 'Trapez'] } },
  // Hintere Schulter
  lib_hs1: { geraet: '💪 Reverse Fly KH (vorgebeugt)', muskeln: { p: ['Hintere Schulter'], s: ['Trapez', 'Rhomboideus'] } },
  lib_hs2: { geraet: '🔗 Reverse Pec Deck', muskeln: { p: ['Hintere Schulter Isolation'], s: [] } },
  lib_hs3: { geraet: '🔗 Band Pull Apart', muskeln: { p: ['Hintere Schulter', 'Außenrotatoren'], s: ['Trapez'] } },
  // Bizeps
  lib_bz1: { geraet: '🏋️ Langhantel Curl', muskeln: { p: ['Bizeps beide Köpfe'], s: ['Brachialis'] } },
  lib_bz2: { geraet: '🏋️ Schrägsitz KH Curl (40°)', muskeln: { p: ['Bizeps langer Kopf'], s: [] } },
  lib_bz3: { geraet: '🔗 Kabelzug Curl', muskeln: { p: ['Bizeps konstante Spannung'], s: ['Brachialis'] } },
  lib_bz4: { geraet: '💪 Concentration Curl KH', muskeln: { p: ['Bizeps Isolation'], s: [] } },
  lib_bz5: { geraet: '🏗️ Bizeps Maschine', muskeln: { p: ['Bizeps'], s: ['Brachialis'] } },
  // Quadrizeps
  lib_q1: { geraet: '🏋️ KH Goblet Squat', muskeln: { p: ['Quadrizeps', 'Gesäß'], s: ['Hamstrings', 'Core'] } },
  lib_q2: { geraet: '🏗️ Hack Squat Maschine', muskeln: { p: ['Quadrizeps'], s: ['Gesäß'] } },
  lib_q3: { geraet: '🦵 Bulgarian Split Squat', muskeln: { p: ['Quadrizeps', 'Gesäß'], s: ['Hamstrings'] } },
  lib_q4: { geraet: '🏗️ Step-Ups mit KH', muskeln: { p: ['Quadrizeps', 'Gesäß'], s: ['Hamstrings'] } },
  lib_q5: { geraet: '🦵 Sissy Squat', muskeln: { p: ['Quadrizeps Isolation'], s: [] } },
  // Hamstrings
  lib_h1: { geraet: '🏋️ Good Morning', muskeln: { p: ['Hamstrings', 'Unterer Rücken'], s: ['Gesäß'] } },
  lib_h2: { geraet: '🦵 Nordic Hamstring Curl', muskeln: { p: ['Hamstrings exzentrisch'], s: [] } },
  lib_h3: { geraet: '🏋️ Sumo Deadlift', muskeln: { p: ['Hamstrings', 'Gesäß'], s: ['Unterer Rücken', 'Adduktoren'] } },
  lib_h4: { geraet: '🔗 Cable Curl (liegend)', muskeln: { p: ['Hamstrings'], s: ['Waden'] } },
  // Gesäß
  lib_g1: { geraet: '🏗️ Hip Thrust (Bank + LH)', muskeln: { p: ['Gesäß'], s: ['Hamstrings'] } },
  lib_g2: { geraet: '🔗 Cable Kickback', muskeln: { p: ['Gesäß Isolation'], s: ['Hamstrings'] } },
  lib_g3: { geraet: '🏗️ Glute Bridge mit LH', muskeln: { p: ['Gesäß'], s: ['Hamstrings'] } },
  lib_g4: { geraet: '🏗️ Step-Ups (hohe Box)', muskeln: { p: ['Gesäß', 'Quadrizeps'], s: ['Hamstrings'] } },
  // Waden
  lib_w1: { geraet: '🦵 Seated Calf Raise Maschine', muskeln: { p: ['Soleus'], s: ['Gastrocnemius'] } },
  lib_w2: { geraet: '🦵 Single Leg Calf Raise', muskeln: { p: ['Wadenmuskeln'], s: [] } },
  lib_w3: { geraet: '🦵 Donkey Calf Raise', muskeln: { p: ['Gastrocnemius'], s: ['Soleus'] } },
};

export const EX: Record<string, Exercise> = {
  // ── OBERKÖRPER A ─────────────────────────────────────────────────────────────
  oa1: { num: '01', name: 'Schrägbank Drücken KH (30°)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Obere Brust'], ['gold', 'Kurzhanteln']], tip: 'Hanteln tiefer als mit LH — nutze die volle Dehnung. Oben leicht zusammendrehen.', ytq: 'incline dumbbell press Charles Glass', repsMin: 10, repsMax: 12, startKg: 20 },
  oa2: { num: '02', name: 'Decline Bankdrücken LH', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Untere Brust'], ['red', 'Compound']], tip: 'Bank auf −15° bis −30°. Schulterblätter fest zusammen. Maximale Kontraktion.', ytq: 'decline bench press technique', repsMin: 10, repsMax: 12, startKg: 60 },
  oa3: { num: '03', name: 'Pec Deck / Butterfly', sets: 3, reps: '13–15', rest: '60s', tags: [['gold', 'Isolation'], ['gold', 'Brust Mitte']], tip: '2 Sekunden in der Kontraktion halten. Langsam zurück zur Dehnung.', ytq: 'pec deck fly technique', repsMin: 13, repsMax: 15, startKg: 40 },
  oa4: { num: '04', name: 'Schulterdrücken KH (sitzend)', sets: 4, reps: '10–12', rest: '75s', tags: [['blue', 'Schulter']], tip: 'Ellenbogen leicht vor dem Körper halten. Keine volle Streckung oben.', ytq: 'seated dumbbell shoulder press', repsMin: 10, repsMax: 12, startKg: 16 },
  oa5: { num: '05', name: 'Seitliches Heben KH', sets: 4, reps: '12–15', rest: '60s', tags: [['blue', 'Mittlere Schulter']], tip: 'Kleinen Finger leicht oben halten. Kein Schwung aus der Hüfte.', ytq: 'lateral raise technique Charles Glass', repsMin: 12, repsMax: 15, startKg: 10 },
  oa6: { num: '06', name: 'Trizeps Pushdown (Seil)', sets: 4, reps: '12–15', rest: '60s', tags: [['green', 'Trizeps']], tip: 'Ellenbogen an den Seiten fixieren. Volle Streckung am Ende halten.', ytq: 'tricep pushdown rope cable', repsMin: 12, repsMax: 15, startKg: 20 },
  oa7: { num: '07', name: 'Overhead Trizeps Ext. (Kabel)', sets: 3, reps: '12–15', rest: '60s', tags: [['green', 'Trizeps'], ['red', 'Langer Kopf']], tip: 'Nur über dem Kopf wird der lange Trizeps-Kopf vollständig gedehnt.', ytq: 'overhead cable tricep extension', repsMin: 12, repsMax: 15, startKg: 15 },

  // ── UNTERKÖRPER A ─────────────────────────────────────────────────────────────
  ua1: { num: '01', name: 'Kniebeugen Smith Machine', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Compound'], ['gold', 'Quad-Fokus']], tip: 'Füße schulterbreit, Zehen leicht nach außen. Tief runter, explosiv hoch.', ytq: 'smith machine squat technique', repsMin: 10, repsMax: 12, startKg: 60 },
  ua2: { num: '02', name: 'Beinpresse 45°', sets: 4, reps: '12–15', rest: '90s', tags: [['red', 'Compound']], tip: 'Füße schulterbreit, Mitte der Platte. Durch die Fersen drücken, Knie nie ganz strecken.', ytq: 'leg press technique', repsMin: 12, repsMax: 15, startKg: 100 },
  ua3: { num: '03', name: 'Leg Extension (Maschine)', sets: 3, reps: '15', rest: '60s', tags: [['gold', 'Isolation'], ['gold', 'Quad']], tip: '1–2 Sek oben halten. 3 Sek negativ. Kein Schwingen.', ytq: 'leg extension isolation technique', repsMin: 12, repsMax: 15, startKg: 40 },
  ua4: { num: '04', name: 'Ausfallschritte LH', sets: 3, reps: '10/Seite', rest: '90s', tags: [['red', 'Compound'], ['blue', 'Stabilität']], tip: 'Großer Schritt, hinteres Knie fast den Boden berühren. Aufrecht bleiben.', ytq: 'barbell lunge technique', repsMin: 10, repsMax: 12, startKg: 40 },
  ua5: { num: '05', name: 'Liegender Beinbeuger', sets: 3, reps: '12–15', rest: '60s', tags: [['green', 'Hamstring']], tip: 'Zehen anziehen für maximale Aktivierung. Langsam zur Dehnung zurück.', ytq: 'lying leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  ua6: { num: '06', name: 'Calf Raise (Maschine)', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden']], tip: 'Volle Bewegung. 2 Sek oben halten, langsam runter. Keine halben Wiederholungen.', ytq: 'calf raise machine technique', repsMin: 15, repsMax: 20, startKg: 60 },

  // ── OBERKÖRPER B ─────────────────────────────────────────────────────────────
  ob1: { num: '01', name: 'Klimmzüge (weiter Griff)', sets: 4, reps: '8–12', rest: '90s', tags: [['blue', 'Latissimus'], ['red', 'Compound']], tip: 'Schulterblätter zuerst nach unten ziehen, dann Ellenbogen. Kontrolliert.', ytq: 'wide grip pull up technique', repsMin: 8, repsMax: 12, startKg: 0 },
  ob2: { num: '02', name: 'Lat Pulldown (weiter Griff)', sets: 3, reps: '12–15', rest: '75s', tags: [['blue', 'Latissimus']], tip: 'Brust leicht nach vorne. Ellenbogen zur Hüfte ziehen, nicht zum Körper.', ytq: 'lat pulldown wide grip technique', repsMin: 12, repsMax: 15, startKg: 50 },
  ob3: { num: '03', name: 'Sitzrudern (enger Griff)', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Rückendicke']], tip: 'Schulterblätter am Ende maximal zusammendrücken. 1 Sek halten.', ytq: 'seated cable row technique', repsMin: 10, repsMax: 12, startKg: 50 },
  ob4: { num: '04', name: 'T-Bar Rudern', sets: 3, reps: '10–12', rest: '90s', tags: [['red', 'Rückendicke'], ['red', 'Compound']], tip: 'Ellenbogen eng am Körper. Brust auf Pad, Schulterblätter zusammen.', ytq: 'T bar row technique', repsMin: 10, repsMax: 12, startKg: 40 },
  ob5: { num: '05', name: 'Face Pull (Kabel)', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Hintere Schulter'], ['gold', 'Gesundheit']], tip: 'Seil auf Augenhöhe. Außenrotation am Ende 2 Sek halten. Schultergesundheit!', ytq: 'face pull technique Jeff Nippard', repsMin: 12, repsMax: 15, startKg: 15 },
  ob6: { num: '06', name: 'Preacher Curl EZ-Stange', sets: 3, reps: '10–12', rest: '60s', tags: [['purple', 'Bizeps']], tip: 'Volle Dehnung unten, volle Kontraktion oben. Langsam runter (3 Sek).', ytq: 'preacher curl EZ bar technique', repsMin: 10, repsMax: 12, startKg: 20 },
  ob7: { num: '07', name: 'Hammer Curl KH', sets: 3, reps: '12', rest: '60s', tags: [['purple', 'Bizeps'], ['blue', 'Brachialis']], tip: 'Neutraler Griff. Trifft Brachialis und den langen Bizeps-Kopf.', ytq: 'hammer curl technique', repsMin: 10, repsMax: 12, startKg: 14 },

  // ── UNTERKÖRPER B ─────────────────────────────────────────────────────────────
  ub1: { num: '01', name: 'Romanian Deadlift (RDL)', sets: 4, reps: '8–10', rest: '90s', tags: [['red', 'Compound'], ['green', 'Hamstring']], tip: 'Rücken immer gerade. Hüfte weit nach hinten schieben. Dehnung unten 1 Sek halten.', ytq: 'romanian deadlift technique', repsMin: 8, repsMax: 10, startKg: 60 },
  ub2: { num: '02', name: 'Liegender Beinbeuger', sets: 4, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation'], ['green', 'Hamstring']], tip: 'Zehen anziehen. Volle Kontraktion oben. 3 Sek negativ runter.', ytq: 'lying leg curl machine technique', repsMin: 12, repsMax: 15, startKg: 35 },
  ub3: { num: '03', name: 'Sitzender Beinbeuger', sets: 3, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation']], tip: 'Anderer Winkel = andere Fasern. Volle Dehnung, volle Kontraktion.', ytq: 'seated leg curl technique', repsMin: 12, repsMax: 15, startKg: 30 },
  ub4: { num: '04', name: 'Beinpresse (hoher Fußstand)', sets: 3, reps: '12–15', rest: '90s', tags: [['red', 'Compound'], ['green', 'Gesäß']], tip: 'Füße hoch auf der Platte → aktiviert Gesäß und Hamstring stärker als normal.', ytq: 'leg press high foot placement glutes', repsMin: 12, repsMax: 15, startKg: 80 },
  ub5: { num: '05', name: 'Sumo Kniebeugen (Smith Machine)', sets: 3, reps: '12–15', rest: '75s', tags: [['green', 'Gesäß'], ['red', 'Compound']], tip: 'Breiter Stand, Zehen weit nach außen. Gesäß tief runterdrücken, Knie über Zehen.', ytq: 'sumo squat smith machine glutes', repsMin: 12, repsMax: 15, startKg: 50 },
  ub6: { num: '06', name: 'Calf Raise (Maschine)', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden']], tip: 'Volle Bewegung. 2 Sek oben halten. Waden brauchen viel Volumen.', ytq: 'calf raise machine technique', repsMin: 15, repsMax: 20, startKg: 60 },

  // ── BIBLIOTHEK ───────────────────────────────────────────────────────────────
  // Brust
  lib_c1: { num: '', name: 'Flachbankdrücken LH', sets: 4, reps: '8–10', rest: '90s', tags: [['red', 'Brust Mitte'], ['red', 'Compound']], tip: 'Stange auf Brustbein-Höhe absenken. Schulterblätter fest zusammendrücken.', ytq: 'flat barbell bench press technique', repsMin: 8, repsMax: 10, startKg: 60 },
  lib_c2: { num: '', name: 'Kabelzug Fly (Mitte)', sets: 3, reps: '13–15', rest: '60s', tags: [['gold', 'Isolation'], ['gold', 'Brust Mitte']], tip: 'Arme leicht gebeugt halten. Volle Kontraktion 2 Sek halten.', ytq: 'cable fly middle chest', repsMin: 13, repsMax: 15, startKg: 15 },
  lib_c3: { num: '', name: 'Dips (Brust-Fokus)', sets: 3, reps: '10–12', rest: '90s', tags: [['red', 'Untere Brust'], ['red', 'Compound']], tip: 'Leicht nach vorne lehnen für mehr Brustanteil. Tief runter, volle Dehnung.', ytq: 'chest dips technique', repsMin: 10, repsMax: 12, startKg: 0 },
  lib_c4: { num: '', name: 'Schrägbank Maschine', sets: 4, reps: '12–15', rest: '75s', tags: [['red', 'Obere Brust'], ['gold', 'Maschine']], tip: 'Konstante Spannung durch die gesamte Bewegung. Schulterblätter fixiert halten.', ytq: 'incline chest press machine technique', repsMin: 12, repsMax: 15, startKg: 40 },
  lib_c5: { num: '', name: 'Kabelzug Crossover (oben)', sets: 3, reps: '13–15', rest: '60s', tags: [['gold', 'Isolation'], ['red', 'Untere Brust']], tip: 'Arme von oben nach unten kreuzen. Innere Brust maximal anspannen.', ytq: 'cable crossover upper pulley technique', repsMin: 13, repsMax: 15, startKg: 15 },
  lib_c6: { num: '', name: 'Liegestütz (gewichtet)', sets: 3, reps: '12–15', rest: '60s', tags: [['red', 'Brust'], ['gold', 'Körpergewicht']], tip: 'Gewichtsplatte auf den Rücken legen. Volle Bewegung, Brust den Boden berühren.', ytq: 'weighted push ups technique', repsMin: 12, repsMax: 15, startKg: 0 },
  // Schulter
  lib_s1: { num: '', name: 'Arnold Press', sets: 4, reps: '10–12', rest: '75s', tags: [['blue', 'Schulter'], ['gold', 'Rotation']], tip: 'Hanteln vor dem Gesicht mit Palmen nach innen starten. Bei der Drehung auspressen.', ytq: 'arnold press technique', repsMin: 10, repsMax: 12, startKg: 14 },
  lib_s2: { num: '', name: 'Frontales Heben KH', sets: 3, reps: '12–15', rest: '60s', tags: [['blue', 'Vordere Schulter']], tip: 'Daumen leicht nach oben. Arme auf Schulterhöhe anheben — nicht höher.', ytq: 'front raise dumbbell technique', repsMin: 12, repsMax: 15, startKg: 10 },
  lib_s3: { num: '', name: 'Upright Row LH', sets: 3, reps: '12–15', rest: '60s', tags: [['blue', 'Schulter'], ['blue', 'Trapez']], tip: 'Stange nah am Körper hochführen. Ellenbogen über Schulterniveau.', ytq: 'upright row barbell technique', repsMin: 12, repsMax: 15, startKg: 30 },
  lib_s4: { num: '', name: 'Schulterdrücken Maschine', sets: 4, reps: '12–15', rest: '75s', tags: [['blue', 'Schulter'], ['gold', 'Maschine']], tip: 'Kontrollierte Bewegung ohne Schwung. Vollständige Kontraktion oben.', ytq: 'shoulder press machine technique', repsMin: 12, repsMax: 15, startKg: 30 },
  lib_s5: { num: '', name: 'Kabelzug Seitliches Heben', sets: 4, reps: '15', rest: '60s', tags: [['blue', 'Mittlere Schulter'], ['gold', 'Isolation']], tip: 'Konstante Spannung durch Kabel. Kleinen Finger leicht oben halten.', ytq: 'cable lateral raise technique', repsMin: 12, repsMax: 15, startKg: 8 },
  // Trizeps
  lib_t1: { num: '', name: 'Dips (Trizeps-Fokus)', sets: 4, reps: '10–12', rest: '90s', tags: [['green', 'Trizeps'], ['red', 'Compound']], tip: 'Aufrecht bleiben für mehr Trizeps-Anteil. Ellenbogen eng am Körper.', ytq: 'tricep dips technique', repsMin: 10, repsMax: 12, startKg: 0 },
  lib_t2: { num: '', name: 'Skullcrusher EZ-Stange', sets: 3, reps: '10–12', rest: '75s', tags: [['green', 'Trizeps'], ['red', 'Langer Kopf']], tip: 'Stange langsam zur Stirn senken. Ellenbogen zeigen nach oben, nicht nach außen.', ytq: 'skull crusher EZ bar technique', repsMin: 10, repsMax: 12, startKg: 20 },
  lib_t3: { num: '', name: 'Enges Bankdrücken', sets: 4, reps: '10–12', rest: '90s', tags: [['green', 'Trizeps'], ['red', 'Compound']], tip: 'Griffbreite schulterbreit — nicht zu eng. Ellenbogen leicht nach innen.', ytq: 'close grip bench press technique', repsMin: 10, repsMax: 12, startKg: 50 },
  lib_t4: { num: '', name: 'French Press KH (sitzend)', sets: 3, reps: '12–15', rest: '60s', tags: [['green', 'Trizeps'], ['red', 'Langer Kopf']], tip: 'KH hinter den Kopf senken. Nur die Unterarme bewegen — Oberarme fixiert.', ytq: 'dumbbell french press technique', repsMin: 12, repsMax: 15, startKg: 15 },
  lib_t5: { num: '', name: 'Reverse Grip Pushdown', sets: 3, reps: '12–15', rest: '60s', tags: [['green', 'Trizeps'], ['gold', 'Lateraler Kopf']], tip: 'Untergriff trifft den lateralen Trizepskopf besonders gut. Volle Streckung.', ytq: 'reverse grip tricep pushdown', repsMin: 12, repsMax: 15, startKg: 15 },
  // Rücken Breite
  lib_rb1: { num: '', name: 'Einarmiges KH Rudern', sets: 4, reps: '10–12/Seite', rest: '75s', tags: [['blue', 'Latissimus'], ['red', 'Einarmig']], tip: 'Freie Hand und Knie auf der Bank. Ellenbogen hoch ziehen, Lat einpressen.', ytq: 'one arm dumbbell row technique', repsMin: 10, repsMax: 12, startKg: 25 },
  lib_rb2: { num: '', name: 'Assisted Pull-Up Maschine', sets: 4, reps: '10–12', rest: '75s', tags: [['blue', 'Latissimus'], ['gold', 'Assisted']], tip: 'Schulterblätter zuerst nach unten. Ellenbogen zur Hüfte. Langsam runter.', ytq: 'assisted pull up machine technique', repsMin: 10, repsMax: 12, startKg: 0 },
  lib_rb3: { num: '', name: 'Neutralgriff Pulldown', sets: 3, reps: '12–15', rest: '75s', tags: [['blue', 'Latissimus'], ['blue', 'Neutralgriff']], tip: 'Neutraler Griff = weniger Bizeps-Beteiligung. Lat komplett einpressen.', ytq: 'neutral grip lat pulldown technique', repsMin: 12, repsMax: 15, startKg: 45 },
  lib_rb4: { num: '', name: 'Straight Arm Pulldown', sets: 3, reps: '12–15', rest: '60s', tags: [['blue', 'Latissimus'], ['gold', 'Isolation']], tip: 'Arme gestreckt. Nur der Lat zieht — kein Bizeps. Volle Dehnung oben.', ytq: 'straight arm pulldown technique', repsMin: 12, repsMax: 15, startKg: 25 },
  lib_rb5: { num: '', name: 'Pull-Over (Kabelzug)', sets: 3, reps: '12–15', rest: '60s', tags: [['blue', 'Latissimus'], ['gold', 'Dehnung']], tip: 'Maximale Dehnung oben. Lat zieht — nicht die Arme. Konstante Spannung.', ytq: 'cable pullover technique', repsMin: 12, repsMax: 15, startKg: 25 },
  // Rücken Dicke
  lib_rd1: { num: '', name: 'LH Rudern (vorgebeugt)', sets: 4, reps: '8–10', rest: '90s', tags: [['red', 'Rückendicke'], ['red', 'Compound']], tip: 'Rumpf 45° vorgebeugt. Ellenbogen eng am Körper. Stange zur Hüfte, nicht zur Brust.', ytq: 'barbell bent over row technique', repsMin: 8, repsMax: 10, startKg: 60 },
  lib_rd2: { num: '', name: 'Chest Supported Row', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Rückendicke'], ['gold', 'Isoliert']], tip: 'Brust liegt auf der Pad → kein Körperschwung möglich. Reines Rückentraining.', ytq: 'chest supported row technique', repsMin: 10, repsMax: 12, startKg: 20 },
  lib_rd3: { num: '', name: 'Low Cable Row (weiter Griff)', sets: 3, reps: '12–15', rest: '75s', tags: [['red', 'Rückendicke']], tip: 'Weiter Griff betont mehr den Latissimus. Vollständige Streckung am Ende.', ytq: 'wide grip seated cable row', repsMin: 12, repsMax: 15, startKg: 40 },
  lib_rd4: { num: '', name: 'KH Rudern (zweiarmig)', sets: 3, reps: '10–12', rest: '90s', tags: [['red', 'Rückendicke'], ['gold', 'KH']], tip: 'Auf einer Bank abstützen. Beide Ellenbogen gleichzeitig hochziehen.', ytq: 'dumbbell row technique', repsMin: 10, repsMax: 12, startKg: 20 },
  // Hintere Schulter
  lib_hs1: { num: '', name: 'Reverse Fly KH (vorgebeugt)', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Hintere Schulter'], ['gold', 'KH']], tip: 'Oberkörper fast waagerecht. Arme leicht gebeugt. Schulterblätter zusammen am Ende.', ytq: 'bent over dumbbell reverse fly', repsMin: 12, repsMax: 15, startKg: 8 },
  lib_hs2: { num: '', name: 'Reverse Pec Deck', sets: 3, reps: '15', rest: '60s', tags: [['blue', 'Hintere Schulter'], ['gold', 'Maschine']], tip: 'Maschine umgekehrt benutzen. Arme auf Schulterhöhe. 2 Sek halten.', ytq: 'reverse pec deck rear delt', repsMin: 12, repsMax: 15, startKg: 20 },
  lib_hs3: { num: '', name: 'Band Pull Apart', sets: 3, reps: '20', rest: '45s', tags: [['blue', 'Hintere Schulter'], ['gold', 'Außenrotation']], tip: 'Band auf Schulterhöhe auseinanderziehen. Schulterblätter vollständig zusammendrücken.', ytq: 'band pull apart technique', repsMin: 15, repsMax: 20, startKg: 0 },
  // Bizeps
  lib_bz1: { num: '', name: 'Langhantel Curl', sets: 4, reps: '10–12', rest: '75s', tags: [['purple', 'Bizeps'], ['red', 'Compound']], tip: 'Ellenbogen fixiert an den Seiten. Volle Streckung unten. Kontrolliert senken.', ytq: 'barbell curl technique', repsMin: 10, repsMax: 12, startKg: 30 },
  lib_bz2: { num: '', name: 'Schrägsitz Curl (40°)', sets: 3, reps: '10–12', rest: '75s', tags: [['purple', 'Bizeps'], ['red', 'Langer Kopf']], tip: 'Schrägsitz maximiert die Dehnung des langen Bizepskopfes. Langsam runter.', ytq: 'incline dumbbell curl technique', repsMin: 10, repsMax: 12, startKg: 12 },
  lib_bz3: { num: '', name: 'Kabelzug Curl', sets: 3, reps: '12–15', rest: '60s', tags: [['purple', 'Bizeps'], ['gold', 'Spannung']], tip: 'Konstante Spannung durch den Kabelzug — auch unten. Volle Kontraktion oben.', ytq: 'cable bicep curl technique', repsMin: 12, repsMax: 15, startKg: 20 },
  lib_bz4: { num: '', name: 'Concentration Curl', sets: 3, reps: '12/Seite', rest: '60s', tags: [['purple', 'Bizeps'], ['gold', 'Isolation']], tip: 'Ellenbogen ans Knie. Nur Unterarm bewegt sich. Volle Kontraktion oben halten.', ytq: 'concentration curl technique', repsMin: 10, repsMax: 12, startKg: 12 },
  lib_bz5: { num: '', name: 'Bizeps Maschine', sets: 3, reps: '12–15', rest: '60s', tags: [['purple', 'Bizeps'], ['gold', 'Maschine']], tip: 'Ellenbogen auf der Polsterung. Volle Dehnung, volle Kontraktion. Kein Schwung.', ytq: 'bicep curl machine technique', repsMin: 12, repsMax: 15, startKg: 30 },
  // Quadrizeps
  lib_q1: { num: '', name: 'Goblet Squat (KH)', sets: 4, reps: '12–15', rest: '75s', tags: [['red', 'Quad'], ['gold', 'Technik']], tip: 'KH vor der Brust halten. Sehr aufrechter Oberkörper. Tief runter.', ytq: 'goblet squat technique', repsMin: 12, repsMax: 15, startKg: 24 },
  lib_q2: { num: '', name: 'Hack Squat Maschine', sets: 4, reps: '10–12', rest: '90s', tags: [['red', 'Quad'], ['red', 'Compound']], tip: 'Füße tief auf der Plattform. Sehr tiefer Winkel möglich. Quad-Fokus.', ytq: 'hack squat machine technique', repsMin: 10, repsMax: 12, startKg: 60 },
  lib_q3: { num: '', name: 'Bulgarian Split Squat', sets: 3, reps: '10/Seite', rest: '90s', tags: [['red', 'Quad'], ['blue', 'Einseitig']], tip: 'Hinterer Fuß auf der Bank. Knie der vorderen Seite über den Zehen. Tief runter.', ytq: 'bulgarian split squat technique', repsMin: 10, repsMax: 12, startKg: 20 },
  lib_q4: { num: '', name: 'Step-Ups mit KH', sets: 3, reps: '12/Seite', rest: '75s', tags: [['red', 'Quad'], ['green', 'Gesäß']], tip: 'Box-Höhe so wählen, dass Oberschenkel waagerecht ist. Nur das vordere Bein drückt.', ytq: 'dumbbell step ups technique', repsMin: 10, repsMax: 12, startKg: 16 },
  lib_q5: { num: '', name: 'Sissy Squat', sets: 3, reps: '12–15', rest: '60s', tags: [['gold', 'Isolation'], ['red', 'Quad']], tip: 'Fersen erhöht, Knie weit nach vorne schieben. Maximale Quad-Dehnung unten.', ytq: 'sissy squat technique', repsMin: 12, repsMax: 15, startKg: 0 },
  // Hamstrings
  lib_h1: { num: '', name: 'Good Morning', sets: 3, reps: '10–12', rest: '90s', tags: [['green', 'Hamstring'], ['red', 'Compound']], tip: 'LH auf den Schultern. Hüfte weit nach hinten — Rücken gerade. Hamstring-Dehnung spüren.', ytq: 'good morning barbell technique', repsMin: 10, repsMax: 12, startKg: 30 },
  lib_h2: { num: '', name: 'Nordic Hamstring Curl', sets: 3, reps: '6–10', rest: '90s', tags: [['green', 'Hamstring'], ['red', 'Exzentrisch']], tip: 'Exzentrisch so langsam wie möglich runter. Eine der besten Hamstring-Übungen.', ytq: 'nordic hamstring curl technique', repsMin: 6, repsMax: 10, startKg: 0 },
  lib_h3: { num: '', name: 'Sumo Deadlift', sets: 4, reps: '8–10', rest: '120s', tags: [['red', 'Compound'], ['green', 'Hamstring']], tip: 'Breiter Stand, Zehen nach außen. Rücken gerade. Mehr Adduktoren und Gesäß als KDL.', ytq: 'sumo deadlift technique', repsMin: 8, repsMax: 10, startKg: 70 },
  lib_h4: { num: '', name: 'Kabelzug Curl (liegend)', sets: 3, reps: '12–15', rest: '60s', tags: [['green', 'Hamstring'], ['gold', 'Spannung']], tip: 'Auf dem Boden liegend, Kabel am Knöchel. Konstante Spannung durch den Kabel.', ytq: 'lying cable hamstring curl', repsMin: 12, repsMax: 15, startKg: 20 },
  // Gesäß
  lib_g1: { num: '', name: 'Hip Thrust (LH + Bank)', sets: 4, reps: '10–12', rest: '90s', tags: [['green', 'Gesäß'], ['red', 'Compound']], tip: 'Schultern auf der Bank, LH auf der Hüfte. Gesäß maximal oben anspannen und halten.', ytq: 'hip thrust barbell technique', repsMin: 10, repsMax: 12, startKg: 60 },
  lib_g2: { num: '', name: 'Cable Kickback (Kabelzug)', sets: 3, reps: '15/Seite', rest: '60s', tags: [['green', 'Gesäß'], ['gold', 'Isolation']], tip: 'Kabel am Knöchel. Bein nach hinten-oben. Gesäß am Ende maximal anspannen.', ytq: 'cable kickback glutes technique', repsMin: 12, repsMax: 15, startKg: 15 },
  lib_g3: { num: '', name: 'Glute Bridge (LH)', sets: 4, reps: '12–15', rest: '75s', tags: [['green', 'Gesäß'], ['gold', 'Boden']], tip: 'Schultern und Füße am Boden. LH auf der Hüfte. Gesäß maximal anspannen.', ytq: 'weighted glute bridge technique', repsMin: 12, repsMax: 15, startKg: 40 },
  lib_g4: { num: '', name: 'Step-Ups (hohe Box)', sets: 3, reps: '12/Seite', rest: '75s', tags: [['green', 'Gesäß'], ['red', 'Compound']], tip: 'Hohe Box = mehr Gesäß. Nur das vordere Bein drückt. Hinteres Bein passiv.', ytq: 'high box step up glutes technique', repsMin: 10, repsMax: 12, startKg: 20 },
  // Waden
  lib_w1: { num: '', name: 'Seated Calf Raise', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden'], ['red', 'Soleus']], tip: 'Sitzend trainiert mehr den Soleus. Volle Bewegung. 2 Sek oben halten.', ytq: 'seated calf raise technique', repsMin: 15, repsMax: 20, startKg: 40 },
  lib_w2: { num: '', name: 'Einbeiniges Calf Raise', sets: 3, reps: '15/Seite', rest: '45s', tags: [['green', 'Waden'], ['blue', 'Einseitig']], tip: 'Auf einer Treppenstufe. Volle Dehnung unten. 2 Sek oben. Maximale Intensität.', ytq: 'single leg calf raise technique', repsMin: 15, repsMax: 20, startKg: 0 },
  lib_w3: { num: '', name: 'Donkey Calf Raise', sets: 4, reps: '15–20', rest: '45s', tags: [['green', 'Waden'], ['red', 'Klassisch']], tip: 'Klassisch für maximale Gastrocnemius-Aktivierung. Volle Dehnung ist entscheidend.', ytq: 'donkey calf raise technique', repsMin: 15, repsMax: 20, startKg: 0 },
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
      { title: 'Brust',   badge: 'Chest',   ids: ['oa1','oa2','oa3'] },
      { title: 'Schulter',badge: 'Delts',   ids: ['oa4','oa5'] },
      { title: 'Trizeps', badge: 'Triceps', ids: ['oa6','oa7'] },
    ],
  },
  mi: {
    note: 'Quad-Fokus. Kein Bouncing unten. Jede Wiederholung kontrolliert senken — explosiv hoch.',
    sections: [
      { title: 'Quadrizeps', badge: 'Quad',      ids: ['ua1','ua2','ua3','ua4'] },
      { title: 'Hamstrings', badge: 'Posterior', ids: ['ua5'] },
      { title: 'Waden',      badge: 'Calves',    ids: ['ua6'] },
    ],
  },
  fr: {
    note: 'Rücken + Bizeps. Mit den Ellenbogen ziehen, nicht mit den Händen. Schulterblätter zuerst runterziehen.',
    sections: [
      { title: 'Rückenbreite',    badge: 'Latissimus', ids: ['ob1','ob2'] },
      { title: 'Rückendicke',     badge: 'Thickness',  ids: ['ob3','ob4'] },
      { title: 'Hintere Schulter',badge: 'Rear Delt',  ids: ['ob5'] },
      { title: 'Bizeps',          badge: 'Biceps',     ids: ['ob6','ob7'] },
    ],
  },
  so: {
    note: 'Hamstring + Gesäß Fokus. Rücken immer gerade halten. Dehnung unten maximieren. Kontrolliert senken.',
    sections: [
      { title: 'Hamstrings', badge: 'Posterior Chain', ids: ['ub1','ub2','ub3'] },
      { title: 'Gesäß',      badge: 'Glutes',          ids: ['ub4','ub5'] },
      { title: 'Waden',      badge: 'Calves',          ids: ['ub6'] },
    ],
  },
};

// ── EXERCISE LIBRARY ──────────────────────────────────────────────────────────

export interface LibraryGroup {
  label: string;
  ids: string[];
}

export const LIBRARY_GROUPS: Record<string, LibraryGroup> = {
  brust:           { label: 'Brust',         ids: ['lib_c1','lib_c2','lib_c3','lib_c4','lib_c5','lib_c6'] },
  schulter:        { label: 'Schulter',       ids: ['lib_s1','lib_s2','lib_s3','lib_s4','lib_s5'] },
  trizeps:         { label: 'Trizeps',        ids: ['lib_t1','lib_t2','lib_t3','lib_t4','lib_t5'] },
  rueckenbreite:   { label: 'Rücken Breite',  ids: ['lib_rb1','lib_rb2','lib_rb3','lib_rb4','lib_rb5'] },
  rueckendicke:    { label: 'Rücken Dicke',   ids: ['lib_rd1','lib_rd2','lib_rd3','lib_rd4'] },
  hintere_schulter:{ label: 'Hint. Schulter', ids: ['lib_hs1','lib_hs2','lib_hs3'] },
  bizeps:          { label: 'Bizeps',         ids: ['lib_bz1','lib_bz2','lib_bz3','lib_bz4','lib_bz5'] },
  quad:            { label: 'Quadrizeps',     ids: ['lib_q1','lib_q2','lib_q3','lib_q4','lib_q5'] },
  hamstrings:      { label: 'Hamstrings',     ids: ['lib_h1','lib_h2','lib_h3','lib_h4'] },
  gesaess:         { label: 'Gesäß',          ids: ['lib_g1','lib_g2','lib_g3','lib_g4'] },
  waden:           { label: 'Waden',          ids: ['lib_w1','lib_w2','lib_w3'] },
};

// Maps section titles (from DAY_SECTIONS) → LIBRARY_GROUPS key
export const SECTION_TO_GROUP: Record<string, string> = {
  'Brust':           'brust',
  'Schulter':        'schulter',
  'Trizeps':         'trizeps',
  'Rückenbreite':    'rueckenbreite',
  'Rückendicke':     'rueckendicke',
  'Hintere Schulter':'hintere_schulter',
  'Bizeps':          'bizeps',
  'Quadrizeps':      'quad',
  'Hamstrings':      'hamstrings',
  'Gesäß':           'gesaess',
  'Waden':           'waden',
};

export const DAYS = ['mo','mi','fr','so','stats'];

export const DAY_LABELS: Record<string, { short: string; name: string; type: string }> = {
  mo:    { short: 'Mo',  name: 'Oben A',  type: 'BRUST · SCHULTER · TRI' },
  mi:    { short: 'Mi',  name: 'Unten A', type: 'QUAD · HAMSTRING · WADEN' },
  fr:    { short: 'Fr',  name: 'Oben B',  type: 'RÜCKEN · BIZEPS' },
  so:    { short: 'So',  name: 'Unten B', type: 'HAMS · GESÄSS · WADEN' },
  stats: { short: '📊',  name: 'Stats',   type: 'ZIELE & FORTSCHRITT' },
};

export interface SetData { weight: string; reps: string; done: boolean }
export interface ExerciseData { [setNum: number]: SetData }
export interface WeekData { [exerciseId: string]: ExerciseData }
export interface AppData { [week: number]: WeekData }
export interface GoalData { kg: number; repsTarget: number; repsMin: number; repsMax: number; auto?: boolean; bumped?: boolean }

export interface AppState {
  week: number;
  data: AppData;
  goals: Record<string, GoalData>;
  hidden: string[];
  swaps: Record<string, string>;
}
