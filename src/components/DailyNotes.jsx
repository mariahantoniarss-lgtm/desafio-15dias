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
    <div className="card card-rose animate-fade-up">
      <div style={{ marginBottom: '16px' }}>
        <div className="section-eyebrow" style={{ color: 'var(--color-vinho)' }}>Reflexão do dia</div>
        <div className="section-subtitle">Espaço para anotações</div>
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
        .card-rose {
          background: var(--color-rose-light);
          border-color: rgba(216, 160, 180, 0.25);
        }
        .section-eyebrow {
          font-family: var(--font-secondary);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .section-eyebrow::before {
          content: '';
          width: 20px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
        }
        .section-subtitle {
          font-family: var(--font-secondary);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-vinho);
        }
        .day-label {
          font-size: 0.8rem;
          color: var(--color-text-soft);
          margin-top: 4px;
        }
        
        .anot-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin-bottom: 16px;
        }
        .anot-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .anot-label {
          font-family: var(--font-secondary);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-vinho);
        }
        .anot-input {
          width: 100%;
          min-height: 80px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          font-family: var(--font-primary);
          font-size: 0.85rem;
          color: var(--color-text);
          background: var(--color-white);
          resize: vertical;
          outline: none;
          transition: border-color 0.2s;
        }
        .anot-input:focus {
          border-color: var(--color-rose);
        }
        
        .anot-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 20px;
        }
        .btn-salvar {
          background: var(--color-vinho);
          color: white;
          padding: 11px 28px;
          border-radius: var(--radius-full);
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        .btn-salvar:hover {
          background: var(--color-vinho-light);
          transform: translateY(-1px);
        }
        .anot-salvo {
          font-size: 0.78rem;
          color: var(--color-vinho);
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .anot-salvo.visible {
          opacity: 1;
        }
      ` }} />
    </div>
  );
};

export default DailyNotes;
