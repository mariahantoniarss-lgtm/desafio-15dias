import React, { useState, useEffect } from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { START_DATE } from '../data/constants';

const DailyNotes = () => {
  const { activeDay, saveNotes, getNotes } = useChallenge();
  const [consegui, setConsegui] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const [amanha, setAmanha] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const notes = getNotes(activeDay);
    setConsegui(notes.consegui || '');
    setDificuldade(notes.dificuldade || '');
    setAmanha(notes.amanha || '');
    setIsSaved(false);
  }, [activeDay]);

  const handleSave = () => {
    saveNotes(activeDay, { consegui, dificuldade, amanha });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const getDayLabel = (dayIdx) => {
    const date = new Date(START_DATE);
    date.setDate(date.getDate() + dayIdx);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  return (
    <div className="daily-notes-card animate-fade-up">
      <div style={{ marginBottom: '20px' }}>
        <div className="section-eyebrow" style={{ color: '#6B2737' }}>Reflexão do dia</div>
        <h3 className="notes-subtitle">Espaço para anotações</h3>
        <div className="day-label">Dia {activeDay + 1} — {getDayLabel(activeDay)}</div>
      </div>

      <div className="anot-grid">
        <div className="anot-item">
          <label className="anot-label">✅ Hoje eu consegui:</label>
          <textarea
            className="anot-input"
            value={consegui}
            onChange={(e) => setConsegui(e.target.value)}
            placeholder="Escreva suas conquistas..."
          />
        </div>
        <div className="anot-item">
          <label className="anot-label">🧩 Minha maior dificuldade foi:</label>
          <textarea
            className="anot-input"
            value={dificuldade}
            onChange={(e) => setDificuldade(e.target.value)}
            placeholder="Seja honesta consigo..."
          />
        </div>
        <div className="anot-item">
          <label className="anot-label">🚀 Amanhã vou melhorar em:</label>
          <textarea
            className="anot-input"
            value={amanha}
            onChange={(e) => setAmanha(e.target.value)}
            placeholder="Um pequeno ajuste..."
          />
        </div>
      </div>

      <div className="anot-footer">
        <button className="btn-salvar" onClick={handleSave}>Salvar anotações 💜</button>
        {isSaved && <div className="anot-salvo visible">✓ Anotações salvas com sucesso!</div>}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .daily-notes-card {
          background: #FDF6EE;
          border: 1px solid #E8D5A3;
          border-radius: 16px;
          padding: 22px 18px;
          margin-bottom: 24px;
        }
        .notes-subtitle {
          font-family: var(--font-subtitle);
          font-size: 1.1rem;
          font-weight: 600;
          color: #6B2737;
        }
        .day-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: #A08088;
          margin-top: 4px;
        }
        
        .anot-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .anot-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .anot-label {
          font-family: var(--font-subtitle);
          font-size: 0.85rem;
          font-weight: 600;
          color: #6B2737;
        }
        .anot-input {
          width: 100%;
          min-height: 90px;
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 14px;
          color: #2C1A20;
          padding: 10px 12px;
          resize: vertical;
          outline: none;
          transition: all 0.25s;
        }
        .anot-input:focus {
          border-color: #C9A96E;
          outline: none;
          box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.15);
        }
        
        .anot-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .btn-salvar {
          background: #6B2737;
          color: #FFFFFF;
          border-radius: 40px;
          font-family: var(--font-subtitle);
          font-weight: 600;
          padding: 11px 28px;
          font-size: 0.88rem;
          transition: all 0.2s;
        }
        .btn-salvar:hover {
          background: #4A1A24;
          transform: translateY(-1px);
        }
        .anot-salvo {
          font-family: var(--font-subtitle);
          font-size: 0.82rem;
          color: #6B2737;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .anot-salvo.visible {
          opacity: 1;
        }

        @media (min-width: 600px) {
          .anot-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      ` }} />
    </div>
  );
};

export default DailyNotes;
