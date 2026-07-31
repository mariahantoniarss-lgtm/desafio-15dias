/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useChallenge } from '../context/ChallengeContext';
const DailyNotes = () => {
  const { activeDate, state, getMonthData } = useChallenge();
  const [consegui, setConsegui] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const [amanha, setAmanha] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const monthKey = activeDate.substring(0, 7);

  // Carregar anotações quando a data mudar
  useEffect(() => {
    const monthData = getMonthData(monthKey);
    const notesForDate = (monthData.tarefasPorData[activeDate] || {})._notes || {};
    setConsegui(notesForDate.consegui || '');
    setDificuldade(notesForDate.dificuldade || '');
    setAmanha(notesForDate.amanha || '');
    setIsSaved(false);
  }, [activeDate]);

  const handleSave = () => {
    // Salvar as anotações no localStorage diretamente para não depender de um método separado
    const savedData = JSON.parse(localStorage.getItem('rotina_friends_v3') || '{"versao":"3.0","meses":{}}');
    if (!savedData.meses[monthKey]) {
      savedData.meses[monthKey] = { tarefasPorData: {}, metasPorSemana: {}, fechamento: {} };
    }
    if (!savedData.meses[monthKey].tarefasPorData[activeDate]) {
      savedData.meses[monthKey].tarefasPorData[activeDate] = {};
    }
    savedData.meses[monthKey].tarefasPorData[activeDate]._notes = { consegui, dificuldade, amanha };
    localStorage.setItem('rotina_friends_v3', JSON.stringify(savedData));

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  // Formatar data legível
  const parts = activeDate.split('-');
  const nomesMeses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const dayLabel = `${parseInt(parts[2], 10)} de ${nomesMeses[parseInt(parts[1], 10) - 1]} de ${parts[0]}`;

  return (
    <div className="daily-notes-card animate-fade-up">
      <div style={{ marginBottom: '20px' }}>
        <div className="section-eyebrow" style={{ color: '#6B2737' }}>Reflexão do dia</div>
        <h3 className="notes-subtitle">Espaço para anotações</h3>
        <div className="day-label">{dayLabel}</div>
      </div>

      <div className="anot-grid">
        <div className="anot-item">
          <label className="anot-label" htmlFor="nota-consegui">✅ Hoje eu consegui:</label>
          <textarea
            id="nota-consegui"
            className="anot-input"
            value={consegui}
            onChange={(e) => setConsegui(e.target.value)}
            placeholder="Escreva suas conquistas..."
          />
        </div>
        <div className="anot-item">
          <label className="anot-label" htmlFor="nota-dificuldade">🧩 Minha maior dificuldade foi:</label>
          <textarea
            id="nota-dificuldade"
            className="anot-input"
            value={dificuldade}
            onChange={(e) => setDificuldade(e.target.value)}
            placeholder="Seja honesta consigo..."
          />
        </div>
        <div className="anot-item">
          <label className="anot-label" htmlFor="nota-amanha">🚀 Amanhã vou melhorar em:</label>
          <textarea
            id="nota-amanha"
            className="anot-input"
            value={amanha}
            onChange={(e) => setAmanha(e.target.value)}
            placeholder="Um pequeno ajuste..."
          />
        </div>
      </div>

      <div className="anot-footer">
        <button className="btn-salvar" onClick={handleSave}>Salvar anotações 💜</button>
        {isSaved && <div className="anot-salvo visible" role="status">✓ Anotações salvas com sucesso!</div>}
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
          border: none;
          font-family: var(--font-subtitle);
          font-weight: 600;
          padding: 11px 28px;
          font-size: 0.88rem;
          transition: all 0.2s;
          cursor: pointer;
        }
        .btn-salvar:hover {
          background: #4A1A24;
          transform: translateY(-1px);
        }
        .btn-salvar:focus-visible {
          outline: 3px solid #C9A96E;
          outline-offset: 2px;
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
