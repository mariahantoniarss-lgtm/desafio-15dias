import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEY } from '../data/constants';

const ChallengeContext = createContext();

export const useChallenge = () => useContext(ChallengeContext);

// Função auxiliar para pegar data e mês correntes no fuso de SP
export function getSPDateInfo(dateObj = new Date()) {
  const dateStr = dateObj.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
  const d = new Date(dateStr);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const dateKey = `${yyyy}-${mm}-${dd}`;
  const monthKey = `${yyyy}-${mm}`;
  return { dateKey, monthKey, year: yyyy, month: d.getMonth() + 1, day: d.getDate() };
}

export const ChallengeProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initialStructure = {
      versao: "3.0",
      meses: {}
    };
    return saved ? JSON.parse(saved) : initialStructure;
  });

  // activeDate no formato YYYY-MM-DD
  const [activeDate, setActiveDate] = useState(() => {
    const { dateKey } = getSPDateInfo();
    return dateKey;
  });

  // Efeito para persistir o estado no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Função para obter ou criar a estrutura de um mês específico
  const getOrCreateMonth = (stateObj, monthKey) => {
    if (stateObj.meses[monthKey]) {
      return stateObj.meses[monthKey];
    }

    // Inicializar estrutura vazia do mês
    const newMonth = {
      tarefasPorData: {},
      metasPorSemana: {
        semana_1: { reelsCount: 0, convitesCount: 0, demonstracao: false, provaSocial: false, objecao: false, coragem: false, analise: false },
        semana_2: { reelsCount: 0, convitesCount: 0, demonstracao: false, provaSocial: false, objecao: false, coragem: false, analise: false },
        semana_3: { reelsCount: 0, convitesCount: 0, demonstracao: false, provaSocial: false, objecao: false, coragem: false, analise: false },
        semana_4: { reelsCount: 0, convitesCount: 0, demonstracao: false, provaSocial: false, objecao: false, coragem: false, analise: false }
      },
      fechamento: {
        concluirPendencias: false,
        analiseFinal: false,
        aprendizados: ""
      }
    };
    stateObj.meses[monthKey] = newMonth;
    return newMonth;
  };

  // Obter mês a partir de uma data YYYY-MM-DD
  const getMonthKeyFromDate = (dateStr) => {
    return dateStr.substring(0, 7); // YYYY-MM
  };

  // Toggle para tarefas diárias
  const toggleCheck = (dateStr, taskId) => {
    const monthKey = getMonthKeyFromDate(dateStr);
    setState(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const monthData = getOrCreateMonth(next, monthKey);
      if (!monthData.tarefasPorData[dateStr]) {
        monthData.tarefasPorData[dateStr] = {};
      }
      monthData.tarefasPorData[dateStr][taskId] = !monthData.tarefasPorData[dateStr][taskId];
      return next;
    });
  };

  // Toggle para metas semanais booleanas
  const toggleWeeklyCheck = (semanaId, itemId) => {
    const monthKey = activeDate.substring(0, 7);
    setState(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const monthData = getOrCreateMonth(next, monthKey);
      if (semanaId === 'fechamento') {
        monthData.fechamento[itemId] = !monthData.fechamento[itemId];
      } else {
        const semanaKey = `semana_${semanaId}`;
        if (!monthData.metasPorSemana[semanaKey]) {
          monthData.metasPorSemana[semanaKey] = {};
        }
        monthData.metasPorSemana[semanaKey][itemId] = !monthData.metasPorSemana[semanaKey][itemId];
      }
      return next;
    });
  };

  // Setar contadores das metas semanais
  const setWeeklyCount = (semanaId, counterId, valor) => {
    const monthKey = activeDate.substring(0, 7);
    setState(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const monthData = getOrCreateMonth(next, monthKey);
      const semanaKey = `semana_${semanaId}`;
      if (!monthData.metasPorSemana[semanaKey]) {
        monthData.metasPorSemana[semanaKey] = {};
      }
      
      // Limites: reelsCount max 4, convitesCount max 5
      let val = parseInt(valor, 10) || 0;
      if (val < 0) val = 0;
      if (counterId === 'reelsCount' && val > 4) val = 4;
      if (counterId === 'convitesCount' && val > 5) val = 5;

      monthData.metasPorSemana[semanaKey][counterId] = val;
      return next;
    });
  };

  // Salvar anotações/aprendizados de fechamento
  const saveFechamentoAprendizados = (text) => {
    const monthKey = activeDate.substring(0, 7);
    setState(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const monthData = getOrCreateMonth(next, monthKey);
      monthData.fechamento.aprendizados = text;
      return next;
    });
  };

  // Obter dados do mês ativo
  const getMonthData = (monthKey) => {
    const next = JSON.parse(JSON.stringify(state));
    return getOrCreateMonth(next, monthKey);
  };

  return (
    <ChallengeContext.Provider value={{
      state,
      activeDate,
      setActiveDate,
      toggleCheck,
      toggleWeeklyCheck,
      setWeeklyCount,
      saveFechamentoAprendizados,
      getMonthData,
      getOrCreateMonth
    }}>
      {children}
    </ChallengeContext.Provider>
  );
};
