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
          <div className="dia-titulo">Dia {activeDay + 1}</div>
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
          <div className="motivacional">
            {FRASES_MOTIVACIONAIS[activeDay % FRASES_MOTIVACIONAIS.length]}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dias-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }
        .dia-tab {
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 40px;
          color: #A08088;
          font-family: var(--font-subtitle);
          font-size: 12px;
          font-weight: 600;
          padding: 6px 14px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dia-tab:hover {
          border-color: #C9A96E;
          color: #6B2737;
          transform: translateY(-1px);
        }
        .dia-tab.active {
          background: #6B2737;
          color: #FFFFFF;
          border-color: #6B2737;
          box-shadow: 0 4px 12px rgba(107, 39, 55, 0.25);
        }
        .dia-tab.done {
          background: #FDF6EE;
          border-color: #C9A96E;
          color: #6B2737;
        }
        
        .checklist-content {
          margin-top: 24px;
        }
        .dia-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .dia-titulo {
          font-family: var(--font-title);
          font-size: 1.8rem;
          font-weight: 700;
          color: #6B2737;
        }
        .dia-data-badge {
          font-family: var(--font-subtitle);
          font-size: 0.78rem;
          font-weight: 600;
          color: #6B2737;
          background: #E8D5A3;
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }
        
        .check-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 10px;
          padding: 13px 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .check-item:hover {
          border-color: #C9A96E;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(107, 39, 55, 0.05);
        }

        .check-box {
          width: 22px;
          height: 22px;
          border: 2px solid #C9A96E;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .check-item.checked {
          background: #FDF6EE;
          border-color: #E8D5A3;
        }

        .check-item.checked .check-box {
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          border-color: #6B2737;
          animation: checkPop 0.3s ease;
        }

        .check-item.checked .check-box::after {
          content: '✓';
          color: #FFFFFF;
          font-size: 12px;
          font-weight: bold;
        }

        .check-label {
          font-family: var(--font-body);
          font-size: 14px;
          color: #2C1A20;
          line-height: 1.5;
          transition: all 0.2s;
        }

        .check-item.checked .check-label {
          color: #A08088;
          text-decoration: line-through;
        }
        
        .motivacional {
          background: linear-gradient(135deg, #4A1A24, #6B2737);
          border-radius: 14px;
          padding: 18px 20px;
          border-left: 3px solid #C9A96E;
          font-family: var(--font-subtitle);
          font-size: 15px;
          font-weight: 500;
          font-style: italic;
          color: #FFFFFF;
          margin-top: 24px;
          box-shadow: 0 4px 16px rgba(74, 26, 36, 0.25);
          animation: fadeUp 0.4s ease;
          text-align: center;
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
