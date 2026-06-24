import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEY } from '../data/constants';

const ChallengeContext = createContext();

export const useChallenge = () => useContext(ChallengeContext);

export const ChallengeProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('desafio_friends_v2');
    return saved ? JSON.parse(saved) : {};
  });

  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    localStorage.setItem('desafio_friends_v2', JSON.stringify(state));
  }, [state]);

  const toggleCheck = (dayIdx, itemId) => {
    const dayKey = `dia_${dayIdx}`;
    setState(prev => ({
      ...prev,
      [dayKey]: {
        ...(prev[dayKey] || {}),
        [itemId]: !(prev[dayKey]?.[itemId])
      }
    }));
  };

  const toggleWeeklyCheck = (goalId, itemId) => {
    const goalKey = `weekly_${goalId}`;
    setState(prev => ({
      ...prev,
      [goalKey]: {
        ...(prev[goalKey] || {}),
        [itemId]: !(prev[goalKey]?.[itemId])
      }
    }));
  };

  const saveNotes = (dayIdx, notes) => {
    const key = `anot_dia_${dayIdx}`;
    localStorage.setItem(key, JSON.stringify(notes));
  };

  const getNotes = (dayIdx) => {
    const saved = localStorage.getItem(`anot_dia_${dayIdx}`);
    return saved ? JSON.parse(saved) : {};
  };

  const resetChallenge = () => {
    localStorage.removeItem(STORAGE_KEY);
    for (let i = 0; i < 15; i++) {
      localStorage.removeItem(`anot_dia_${i}`);
    }
    setState({});
    setActiveDay(0);
  };

  return (
    <ChallengeContext.Provider value={{
      state,
      activeDay,
      setActiveDay,
      toggleCheck,
      toggleWeeklyCheck,
      saveNotes,
      getNotes,
      resetChallenge
    }}>
      {children}
    </ChallengeContext.Provider>
  );
};
