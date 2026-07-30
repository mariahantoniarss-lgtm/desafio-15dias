import React from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { TOTAL_DIAS, ITENS_CHECKLIST, METAS_QUINZENAIS } from '../data/constants';

const ProgressCard = () => {
  const { state } = useChallenge();

  const calculateProgress = () => {
    // Diários: 6 itens * 15 dias = 90
    // Quinzenais: 36 itens
    // Total: 126
    
    let totalChecks = 126;
    let completedChecks = 0;
    let completedDays = 0;

    // Contagem diários
    for (let i = 0; i < TOTAL_DIAS; i++) {
      const dayData = state[`dia_${i}`] || {};
      const completedInDay = Object.values(dayData).filter(Boolean).length;
      completedChecks += completedInDay;
      if (completedInDay === ITENS_CHECKLIST.length) {
        completedDays++;
      }
    }

    // Contagem quinzenais
    METAS_QUINZENAIS.forEach(bloco => {
      const goalData = state[`weekly_${bloco.id}`] || {};
      completedChecks += Object.values(goalData).filter(Boolean).length;
    });

    const percentage = Math.round((completedChecks / totalChecks) * 100);
    return { percentage, completedDays };
  };

  const { percentage, completedDays } = calculateProgress();

  return (
    <div className="card animate-fade-up" style={{ marginBottom: '16px', background: '#FFFFFF' }}>
      <div className="progress-container">
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="progress-stats">
          <div className="pct-wrap">
            <span className="progress-pct">{percentage}%</span>
            <span className="pct-label">concluído</span>
          </div>
          <div className="progress-dias">{completedDays} de {TOTAL_DIAS} dias completos</div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .progress-bar-wrap {
          background: #E8D5A3;
          border-radius: 40px;
          height: 10px;
          overflow: hidden;
          margin-bottom: 12px;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #6B2737, #C9A96E);
          border-radius: 40px;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .progress-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pct-wrap {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .progress-pct {
          font-family: var(--font-title);
          font-size: 42px;
          font-weight: 700;
          color: #6B2737;
          line-height: 1;
        }
        .pct-label {
          font-family: var(--font-body);
          font-size: 13px;
          color: #A08088;
          font-weight: 500;
        }
        .progress-dias {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: #A08088;
        }
        @media (max-width: 640px) {
          .progress-pct {
            font-size: 36px;
          }
          .pct-label, .progress-dias {
            font-size: 12px;
          }
        }
      ` }} />
    </div>
  );
};

export default ProgressCard;
