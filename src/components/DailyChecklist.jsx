import React, { useState } from 'react';
import { useChallenge, getSPDateInfo } from '../context/ChallengeContext';
import { ITENS_CHECKLIST } from '../data/constants';

const DailyChecklist = () => {
  const { state, activeDate, setActiveDate, toggleCheck, getMonthData } = useChallenge();
  
  // Data atual do sistema
  const todayInfo = getSPDateInfo();
  
  // Data de controle da navegação do calendário (inicia no mês da activeDate)
  const [navDate, setNavDate] = useState(() => {
    const parts = activeDate.split('-');
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    return new Date(y, m - 1, 1);
  });

  const year = navDate.getFullYear();
  const month = navDate.getMonth(); // 0 a 11

  const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const monthName = nomesMeses[month];
  
  const totalDays = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Domingo

  const prevMonth = () => {
    setNavDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setNavDate(new Date(year, month + 1, 1));
  };

  const getDayKey = (dayNum) => {
    const mm = String(month + 1).padStart(2, '0');
    const dd = String(dayNum).padStart(2, '0');
    return `${year}-${mm}-${dd}`;
  };

  // Funções de verificação de datas
  const isDateToday = (dayNum) => getDayKey(dayNum) === todayInfo.dateKey;
  const isDateFuture = (dayNum) => getDayKey(dayNum) > todayInfo.dateKey;
  const isDateSelected = (dayNum) => getDayKey(dayNum) === activeDate;

  // Obter quantidade de tarefas concluídas no dia
  const getCompletedCountForDay = (dayNum) => {
    const dayKey = getDayKey(dayNum);
    const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
    const monthData = getMonthData(monthKey);
    const dayData = monthData.tarefasPorData[dayKey] || {};
    return ITENS_CHECKLIST.filter(item => dayData[item.id]).length;
  };

  // Rótulo descritivo para leitores de tela
  const getAriaLabel = (dayNum) => {
    const dayKey = getDayKey(dayNum);
    const count = getCompletedCountForDay(dayNum);
    const dateFormatted = `${dayNum} de ${monthName} de ${year}`;
    
    if (dayKey > todayInfo.dateKey) {
      return `${dateFormatted}, data futura, indisponível.`;
    }
    
    let statusText = "não iniciado";
    if (count === 6) {
      statusText = "concluído";
    } else if (count > 0) {
      statusText = `parcialmente concluído, ${count} de 6 tarefas.`;
    }
    
    const todayMarker = dayKey === todayInfo.dateKey ? " (Hoje)" : "";
    return `${dateFormatted}${todayMarker}, status: ${statusText}`;
  };

  // Renderizar o dia selecionado atualmente
  const selectedParts = activeDate.split('-');
  const selectedDayLabel = `${parseInt(selectedParts[2], 10)} de ${nomesMeses[parseInt(selectedParts[1], 10) - 1]} de ${selectedParts[0]}`;
  
  const monthKeyOfActiveDate = activeDate.substring(0, 7);
  const activeMonthData = getMonthData(monthKeyOfActiveDate);
  const currentDayData = activeMonthData.tarefasPorData[activeDate] || {};
  const completedCount = ITENS_CHECKLIST.filter(item => currentDayData[item.id]).length;

  return (
    <div className="checklist-container animate-fade-up">
      {/* Calendário Mensal */}
      <div className="calendar-card">
        <div className="calendar-nav">
          <button onClick={prevMonth} aria-label="Mês anterior" className="nav-arrow">◀</button>
          <span className="calendar-month-title">{monthName} {year}</span>
          <button onClick={nextMonth} aria-label="Próximo mês" className="nav-arrow">▶</button>
        </div>

        <div className="calendar-grid-header">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
            <div key={i} className="grid-header-cell" aria-hidden="true">{d}</div>
          ))}
        </div>

        <div className="calendar-grid-body">
          {/* Espaços vazios antes do 1º dia */}
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={`empty-${i}`} className="grid-cell empty" />
          ))}

          {/* Dias reais do mês */}
          {Array.from({ length: totalDays }).map((_, i) => {
            const dayNum = i + 1;
            const key = getDayKey(dayNum);
            const future = isDateFuture(dayNum);
            const selected = isDateSelected(dayNum);
            const today = isDateToday(dayNum);
            const completed = getCompletedCountForDay(dayNum);

            let dayClass = "day-cell";
            if (future) dayClass += " future disabled";
            else if (selected) dayClass += " selected";
            else if (completed === 6) dayClass += " all-done";
            else if (completed > 0) dayClass += " partial";
            else dayClass += " empty-tasks";

            if (today) dayClass += " today";

            return (
              <button
                key={dayNum}
                className={dayClass}
                disabled={future}
                onClick={() => setActiveDate(key)}
                aria-label={getAriaLabel(dayNum)}
                aria-pressed={selected}
              >
                <span className="day-number">{dayNum}</span>
              </button>
            );
          })}
        </div>

        {/* Legenda do Calendário */}
        <div className="calendar-legend" aria-hidden="true">
          <div className="legend-item"><span className="legend-color color-empty"></span> Vazio</div>
          <div className="legend-item"><span className="legend-color color-partial"></span> Parcial</div>
          <div className="legend-item"><span className="legend-color color-done"></span> Completo</div>
          <div className="legend-item"><span className="legend-color color-selected"></span> Selecionado</div>
          <div className="legend-item"><span className="legend-color color-today"></span> Hoje</div>
        </div>
      </div>

      {/* Checklist da Data Selecionada */}
      <div className="checklist-content scale-in" style={{ marginTop: '32px' }}>
        <div className="dia-header">
          <h2 className="dia-titulo">{selectedDayLabel}</h2>
          <div className="dia-data-badge">
            {completedCount === 6 
              ? "Completo 💜" 
              : `${completedCount} de 6`}
          </div>
        </div>

        <div className="check-items" role="group" aria-label={`Lista de tarefas para ${selectedDayLabel}`}>
          {ITENS_CHECKLIST.map(item => {
            const isChecked = currentDayData[item.id] || false;
            return (
              <label 
                key={item.id} 
                className={`check-item ${isChecked ? 'checked' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <input
                  type="checkbox"
                  className="real-checkbox"
                  checked={isChecked}
                  onChange={() => toggleCheck(activeDate, item.id)}
                  aria-label={item.label}
                />
                <div className="check-box" aria-hidden="true">
                  {isChecked && <span className="check-symbol">✓</span>}
                </div>
                <span className="check-label">{item.label}</span>
              </label>
            );
          })}
        </div>

        <div className="checklist-summary-msg" style={{ marginTop: '24px', textAlign: 'center' }}>
          {completedCount === 6 ? (
            <div className="status-msg-box done animate-fade-in">
              Dia completo 💜 Você cumpriu seus compromissos de hoje.
            </div>
          ) : (
            <div className="status-msg-box partial">
              Hoje: {completedCount} de 6 tarefas concluídas.
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .calendar-card {
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 20px;
          padding: 20px;
          box-shadow: var(--shadow-soft);
        }
        .calendar-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .calendar-month-title {
          font-family: var(--font-subtitle);
          font-size: 1.15rem;
          font-weight: 700;
          color: #6B2737;
        }
        .nav-arrow {
          background: none;
          border: none;
          color: #6B2737;
          cursor: pointer;
          font-size: 1.1rem;
          padding: 8px 12px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .nav-arrow:hover {
          background: #FDF6EE;
        }
        .calendar-grid-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          font-weight: 600;
          font-family: var(--font-subtitle);
          color: #A08088;
          margin-bottom: 8px;
          font-size: 0.85rem;
        }
        .calendar-grid-body {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
        }
        .grid-cell.empty {
          aspect-ratio: 1;
        }
        .day-cell {
          aspect-ratio: 1;
          border-radius: 50%;
          border: 2px solid transparent;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          background: none;
          position: relative;
        }
        .day-cell.empty-tasks {
          background: #F5F5F5;
          color: #6B4A52;
        }
        .day-cell.partial {
          background: #FFF9E6;
          color: #8C6B00;
          border-color: #E8D5A3;
        }
        .day-cell.all-done {
          background: #E8F5E9;
          color: #2E7D32;
        }
        .day-cell.selected {
          background: #6B2737 !important;
          color: #FFFFFF !important;
        }
        .day-cell.today {
          border: 2px dashed #C9A96E;
        }
        .day-cell.disabled {
          background: #FAFAFA;
          color: #D0D0D0;
          cursor: not-allowed;
        }
        .day-cell:hover:not(.disabled):not(.selected) {
          transform: scale(1.08);
          background: #FDF6EE;
        }
        .day-cell:focus-visible {
          outline: 3px solid #C9A96E;
          outline-offset: 1px;
        }
        
        .calendar-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
          justify-content: center;
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: #A08088;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }
        .color-empty { background: #F5F5F5; }
        .color-partial { background: #FFF9E6; border: 1px solid #E8D5A3; }
        .color-done { background: #E8F5E9; }
        .color-selected { background: #6B2737; }
        .color-today { border: 1.5px dashed #C9A96E; }

        .real-checkbox {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
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
          background: #FFFFFF;
          transition: all 0.2s;
        }
        .real-checkbox:focus-visible + .check-box {
          outline: 3px solid #6B2737;
          outline-offset: 2px;
        }
        .check-item.checked .check-box {
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          border-color: #6B2737;
        }
        .check-symbol {
          color: white;
          font-size: 13px;
          font-weight: bold;
        }

        .status-msg-box {
          padding: 14px 20px;
          border-radius: 12px;
          font-family: var(--font-subtitle);
          font-size: 0.95rem;
          font-weight: 600;
        }
        .status-msg-box.partial {
          background: #FDF6EE;
          color: #6B2737;
          border: 1px dashed #E8D5A3;
        }
        .status-msg-box.done {
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          color: white;
          box-shadow: 0 4px 12px rgba(107,39,55,0.15);
        }
      ` }} />
    </div>
  );
};

export default DailyChecklist;
