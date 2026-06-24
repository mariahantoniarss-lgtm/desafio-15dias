import React from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { METAS_QUINZENAIS } from '../data/constants';

const WeeklyGoals = () => {
  const { state, toggleWeeklyCheck } = useChallenge();

  return (
    <div className="weekly-goals animate-fade-in">
      <div className="section-header" style={{ marginBottom: '24px' }}>
        <h2 className="section-title">Metas Quinzenais</h2>
        <p className="section-subtitle">Realize estas metas ao longo dos 15 dias no seu ritmo.</p>
      </div>

      {METAS_QUINZENAIS.map((bloco) => {
        const goalKey = `weekly_${bloco.id}`;
        const blockData = state[goalKey] || {};
        const completedCount = bloco.items.filter(item => blockData[item.id]).length;
        const totalCount = bloco.items.length;
        const percentage = Math.round((completedCount / totalCount) * 100) || 0;

        return (
          <div key={bloco.id} className="goal-card" style={{ marginBottom: '28px' }}>
            <div className="goal-card-header">
              <div className="goal-header-top">
                <h3 className="goal-title">{bloco.title}</h3>
                <div className="goal-count-display">
                  <span className="completed-num">{completedCount}</span>
                  <span className="total-num">/{totalCount}</span>
                </div>
              </div>
              
              <p className="goal-subtitle">{bloco.subtitle}</p>
              {bloco.rule && <div className="goal-rule">{bloco.rule}</div>}
              
              <div className="mini-progress-wrap">
                <div className="mini-progress-fill" style={{ width: `${percentage}%` }}></div>
              </div>
            </div>

            <div className="goal-items-grid">
              {bloco.items.map((item) => {
                const isChecked = blockData[item.id] || false;
                return (
                  <label key={item.id} className={`goal-item ${isChecked ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleWeeklyCheck(bloco.id, item.id)}
                    />
                    <div className="checkbox-custom">
                      {isChecked && <span className="check-icon">✓</span>}
                    </div>
                    <span className="goal-item-label">{item.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      <style dangerouslySetInnerHTML={{ __html: `
        .goal-card {
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-top: 4px solid #C9A96E;
          border-radius: 16px;
          padding: 22px 20px;
          box-shadow: var(--shadow-soft);
        }
        .goal-header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 8px;
        }
        .goal-title {
          font-family: var(--font-subtitle);
          color: #6B2737;
          font-size: 1.15rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
        }
        .goal-count-display {
          font-family: var(--font-title);
          color: #6B2737;
          line-height: 1;
          display: flex;
          align-items: baseline;
          flex-shrink: 0;
        }
        .completed-num {
          font-size: 28px;
          font-weight: 600;
        }
        .total-num {
          font-size: 18px;
          opacity: 0.7;
          font-weight: 400;
        }
        .goal-subtitle {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: #6B4A52;
          margin-bottom: 10px;
          line-height: 1.5;
        }
        .goal-rule {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: #A08088;
          background: #FDF6EE;
          border: 1px dashed #E8D5A3;
          padding: 6px 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          display: inline-block;
        }
        .mini-progress-wrap {
          background: #E8D5A3;
          border-radius: 40px;
          height: 6px;
          overflow: hidden;
          margin-bottom: 8px;
          width: 100%;
        }
        .mini-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6B2737, #C9A96E);
          border-radius: 40px;
          transition: width 0.3s ease;
        }
        .goal-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 10px;
          margin-top: 18px;
        }
        .goal-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .goal-item:hover {
          border-color: #C9A96E;
          transform: translateY(-1px);
        }
        .goal-item.checked {
          background: #FDF6EE;
          border-color: #E8D5A3;
        }
        .goal-item input { display: none; }
        .checkbox-custom {
          width: 18px;
          height: 18px;
          border: 2px solid #C9A96E;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .goal-item.checked .checkbox-custom {
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          border-color: #6B2737;
          animation: checkPop 0.3s ease;
        }
        .check-icon {
          color: white;
          font-size: 11px;
          font-weight: bold;
        }
        .goal-item-label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: #2C1A20;
        }
        .goal-item.checked .goal-item-label {
          color: #A08088;
          text-decoration: line-through;
        }
      ` }} />
    </div>
  );
};

export default WeeklyGoals;
