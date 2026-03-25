import { useState, useEffect, useCallback } from 'react';
import type { AppState, GoalData, SetData, ExerciseData } from '../data/gymData';
import { EX } from '../data/gymData';

const STORAGE_KEY = 'neph_gymplan_v1';

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { week: 1, data: {}, goals: {} };
}

function saveState(state: AppState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

function calcAutoGoal(id: string, w: number, state: AppState): GoalData {
  const ex = EX[id];
  if (!ex) return { kg: 0, repsTarget: 10, repsMin: 10, repsMax: 12 };
  if (w <= 1) return { kg: ex.startKg, repsTarget: ex.repsMin, repsMin: ex.repsMin, repsMax: ex.repsMax, auto: true };

  const prevWD = state.data[w - 1] || {};
  const prevExd = prevWD[id] || {};
  const prevGoalKey = `${id}_w${w - 1}`;
  const prevGoal: GoalData = state.goals[prevGoalKey] || calcAutoGoal(id, w - 1, state);

  let totalReps = 0, totalSets = 0, lastKg = 0;
  for (let s = 1; s <= ex.sets; s++) {
    const sd = prevExd[s] as SetData | undefined;
    if (sd?.done) {
      totalReps += parseFloat(sd.reps) || 0;
      lastKg = parseFloat(sd.weight) || 0;
      totalSets++;
    }
  }

  if (totalSets === 0) {
    return { kg: prevGoal.kg, repsTarget: prevGoal.repsTarget || ex.repsMin, repsMin: ex.repsMin, repsMax: ex.repsMax, auto: true };
  }

  const avgReps = totalReps / totalSets;
  if (avgReps >= ex.repsMax && lastKg > 0) {
    const bump = ex.startKg >= 40 ? 2.5 : 1.25;
    return { kg: lastKg + bump, repsTarget: ex.repsMin, repsMin: ex.repsMin, repsMax: ex.repsMax, auto: true, bumped: true };
  } else {
    const nextReps = Math.min(ex.repsMax, Math.max(ex.repsMin, avgReps > 0 ? Math.round(avgReps) + 1 : ex.repsMin));
    return { kg: lastKg || prevGoal.kg, repsTarget: nextReps, repsMin: ex.repsMin, repsMax: ex.repsMax, auto: true };
  }
}

export function useGymState() {
  const [state, setState] = useState<AppState>(() => loadState());

  const persistState = useCallback((newState: AppState) => {
    saveState(newState);
    setState(newState);
  }, []);

  const setWeek = useCallback((w: number) => {
    setState(prev => {
      const next = { ...prev, week: w };
      saveState(next);
      return next;
    });
  }, []);

  const getSetData = useCallback((week: number, exId: string, setNum: number): SetData => {
    return state.data[week]?.[exId]?.[setNum] || { weight: '', reps: '', done: false };
  }, [state]);

  const updateSetData = useCallback((week: number, exId: string, setNum: number, field: keyof SetData, value: string | boolean) => {
    setState(prev => {
      const weekData = { ...(prev.data[week] || {}) };
      const exData = { ...(weekData[exId] || {}) } as ExerciseData;
      const setData = { ...(exData[setNum] || { weight: '', reps: '', done: false }) };
      (setData as Record<string, unknown>)[field] = value;
      exData[setNum] = setData;
      weekData[exId] = exData;
      const next = { ...prev, data: { ...prev.data, [week]: weekData } };
      saveState(next);
      return next;
    });
  }, []);

  const clearExercise = useCallback((week: number, exId: string) => {
    setState(prev => {
      const weekData = { ...(prev.data[week] || {}) };
      delete weekData[exId];
      const next = { ...prev, data: { ...prev.data, [week]: weekData } };
      saveState(next);
      return next;
    });
  }, []);

  const getGoal = useCallback((id: string, w: number): GoalData => {
    const key = `${id}_w${w}`;
    if (state.goals[key]) return state.goals[key];
    return calcAutoGoal(id, w, state);
  }, [state]);

  const setGoal = useCallback((id: string, w: number, goal: GoalData) => {
    const key = `${id}_w${w}`;
    setState(prev => {
      const next = { ...prev, goals: { ...prev.goals, [key]: goal } };
      saveState(next);
      return next;
    });
  }, []);

  const exportData = useCallback((): string => {
    return btoa(JSON.stringify(state));
  }, [state]);

  const importData = useCallback((encoded: string): boolean => {
    try {
      const decoded = JSON.parse(atob(encoded));
      if (decoded && typeof decoded === 'object') {
        persistState(decoded);
        return true;
      }
    } catch {}
    return false;
  }, [persistState]);

  const getWeeksWithData = useCallback((): number[] => {
    return Object.keys(state.data)
      .map(Number)
      .filter(w => Object.keys(state.data[w] || {}).length > 0);
  }, [state]);

  const getDayProgress = useCallback((week: number, day: string, exIds: string[]): { done: number; total: number } => {
    let done = 0, total = 0;
    for (const id of exIds) {
      const ex = EX[id];
      if (!ex) continue;
      for (let s = 1; s <= ex.sets; s++) {
        total++;
        const sd = state.data[week]?.[id]?.[s];
        if (sd?.done) done++;
      }
    }
    return { done, total };
  }, [state]);

  return {
    state,
    setWeek,
    getSetData,
    updateSetData,
    clearExercise,
    getGoal,
    setGoal,
    exportData,
    importData,
    getWeeksWithData,
    getDayProgress,
  };
}
