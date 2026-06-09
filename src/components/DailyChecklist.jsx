import React from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { TOTAL_DIAS, ITENS_CHECKLIST, FRASES_MOTIVACIONAIS, START_DATE } from '../data/constants';

const DailyChecklist = () => {
  const { state, activeDay, setActiveDay, toggleCheck } = useChallenge();

  const isDayDone = (dayIdx) => {
    const dayData = state[`dia_${dayIdx}`] || {};
    return ITENS_CHECKLIST.every(item => dayData[item.id]);
  };

  const getDayLabel = (dayIdx) => {
    const date = new Date(START_DATE);
    date.setDate(date.getDate() + dayIdx);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  const currentDayData = state[`dia_${activeDay}`] || {};
  const showMotivacional = isDayDone(activeDay);

  return (
    <div className="checklist-container animate-fade-up">
      <div className="dias-tabs">
        {Array.from({ length: TOTAL_DIAS }).map((_, i) => (
          <button
            key={i}
            className={`dia-tab ${activeDay === i ? 'active' : ''} ${isDayDone(i) ? 'done' : ''}`}
            onClick={() => setActiveDay(i)}
          >
            Dia {i + 1}
            {isDayDone(i) && ' ✓'}
          </button>
        ))}
      </div>

      <div className="checklist-content scale-in">
        <div className="dia-header">
          <div className="dia-titulo">🍷 Dia {activeDay + 1}</div>
          <div className="dia-data-badge">{getDayLabel(activeDay)}</div>
        </div>

        <div className="check-items">
          {ITENS_CHECKLIST.map(item => (
            <div
              key={item.id}
              className={`check-item ${currentDayData[item.id] ? 'checked' : ''}`}
              onClick={() => toggleCheck(activeDay, item.id)}
            >
              <div className="check-box"></div>
              <span className="check-label">{item.label}</span>
            </div>
          ))}
        </div>

        {showMotivacional && (
          <div className="motivacional animate-fade-up">
            {FRASES_MOTIVACIONAIS[activeDay % FRASES_MOTIVACIONAIS.length]}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dias-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .dia-tab {
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-light);
          background: var(--color-white);
          font-family: var(--font-secondary);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-soft);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dia-tab:hover {
          border-color: var(--color-rose);
          color: var(--color-vinho);
          transform: translateY(-1px);
        }
        .dia-tab.active {
          background: var(--color-vinho);
          color: white;
          border-color: var(--color-vinho);
          box-shadow: 0 4px 12px rgba(109, 33, 60, 0.2);
        }
        .dia-tab.done {
          background: var(--color-rose-light);
          border-color: var(--color-rose);
          color: var(--color-vinho);
        }
        
        .checklist-content {
          margin-top: 24px;
        }
        .dia-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .dia-titulo {
          font-family: var(--font-secondary);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-vinho);
        }
        .dia-data-badge {
          font-size: 0.78rem;
          color: var(--color-text-soft);
          background: var(--color-rose-light);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }
        
        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 12px 8px;
          border-bottom: 1px solid var(--color-rose-light);
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }
        .check-item:last-child {
          border-bottom: none;
        }
        .check-item:hover {
          background: var(--color-rose-soft);
        }
        .check-box {
          width: 22px;
          height: 22px;
          border: 2px solid var(--color-rose);
          border-radius: 6px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          margin-top: 1px;
        }
        .check-item.checked .check-box {
          background: var(--color-vinho);
          border-color: var(--color-vinho);
        }
        .check-item.checked .check-box::after {
          content: '✓';
          color: white;
          font-size: 12px;
          font-weight: 700;
        }
        .check-label {
          font-size: 0.9rem;
          color: var(--color-text);
          line-height: 1.5;
          transition: all 0.2s;
        }
        .check-item.checked .check-label {
          color: var(--color-text-soft);
          text-decoration: line-through;
          opacity: 0.7;
        }
        
        .motivacional {
          background: linear-gradient(135deg, var(--color-vinho), #9B3060);
          color: white;
          border-radius: var(--radius-md);
          padding: 18px 20px;
          margin-top: 20px;
          font-family: var(--font-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          font-style: italic;
          text-align: center;
          box-shadow: 0 4px 16px rgba(109, 33, 60, 0.2);
        }

        .scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      ` }} />
    </div>
  );
};

export default DailyChecklist;
