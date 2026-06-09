import React from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { TOTAL_DIAS, ITENS_CHECKLIST } from '../data/constants';

const ProgressCard = () => {
  const { state } = useChallenge();

  const calculateProgress = () => {
    let totalItems = TOTAL_DIAS * ITENS_CHECKLIST.length;
    let completedItems = 0;
    let completedDays = 0;

    for (let i = 0; i < TOTAL_DIAS; i++) {
      const dayData = state[`dia_${i}`] || {};
      const completedInDay = Object.values(dayData).filter(Boolean).length;
      completedItems += completedInDay;
      if (completedInDay === ITENS_CHECKLIST.length) {
        completedDays++;
      }
    }

    const percentage = Math.round((completedItems / totalItems) * 100);
    return { percentage, completedDays };
  };

  const { percentage, completedDays } = calculateProgress();

  return (
    <div className="card animate-fade-up" style={{ marginBottom: '16px' }}>
      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="progress-stats">
        <div>
          <span className="progress-pct">{percentage}%</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-soft)', marginLeft: '4px' }}>concluído</span>
        </div>
        <div className="progress-dias">{completedDays} de {TOTAL_DIAS} dias completos</div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .progress-bar-wrap {
          background: var(--color-rose-light);
          border-radius: var(--radius-full);
          height: 14px;
          overflow: hidden;
          margin-bottom: 8px;
          border: 1px solid rgba(216, 160, 180, 0.3);
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-vinho), var(--color-rose));
          border-radius: var(--radius-full);
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .progress-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .progress-pct {
          font-family: var(--font-secondary);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-vinho);
        }
        .progress-dias {
          font-size: 0.82rem;
          color: var(--color-text-soft);
        }
      ` }} />
    </div>
  );
};

export default ProgressCard;
