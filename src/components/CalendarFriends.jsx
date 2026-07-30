import React, { useState } from 'react';
import { useCalendarEvents } from '../hooks/useCalendarEvents';
import AgendaView from './AgendaView';
import MonthView from './MonthView';

const CalendarFriends = () => {
  const { events, loading, error, fetchEvents } = useCalendarEvents();
  const [view, setView] = useState('agenda'); // 'agenda' | 'month'

  return (
    <div className="calendar-friends animate-fade-in">
      <div className="calendar-header">
        <h2 className="section-title">Calendário Friends</h2>
        <p className="section-subtitle">
          Acompanhe todos os eventos, reuniões e missões!
        </p>
      </div>

      <div className="calendar-controls">
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${view === 'agenda' ? 'active' : ''}`}
            onClick={() => setView('agenda')}
          >
            Agenda
          </button>
          <button 
            className={`toggle-btn ${view === 'month' ? 'active' : ''}`}
            onClick={() => setView('month')}
          >
            Mês
          </button>
        </div>
        
        <button className="refresh-btn" onClick={fetchEvents} disabled={loading}>
          {loading ? 'Atualizando...' : '🔄 Atualizar'}
        </button>
      </div>

      {error && (
        <div className="calendar-error">
          <p>⚠️ Não foi possível carregar a agenda.</p>
          <button onClick={fetchEvents}>Tentar novamente</button>
        </div>
      )}

      {!error && (
        <div className="calendar-content">
          {view === 'agenda' ? (
            <AgendaView events={events} loading={loading} />
          ) : (
            <MonthView events={events} loading={loading} />
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .calendar-friends {
          background: #FFFBF7;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(107, 39, 55, 0.05);
          border: 1px solid rgba(232, 213, 163, 0.5);
        }
        .calendar-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .calendar-header .section-subtitle {
          color: #A08088;
          font-size: 14px;
          margin-top: 4px;
        }
        .calendar-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .view-toggle {
          display: flex;
          background: #FDF6EE;
          border-radius: 12px;
          padding: 4px;
          border: 1px solid #E8D5A3;
        }
        .toggle-btn {
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: #A08088;
          font-family: var(--font-subtitle);
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .toggle-btn.active {
          background: #6B2737;
          color: #FFF;
        }
        .refresh-btn {
          background: #FFF;
          border: 1px solid #E8D5A3;
          color: #6B2737;
          padding: 8px 16px;
          border-radius: 12px;
          font-family: var(--font-subtitle);
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .refresh-btn:hover:not(:disabled) {
          background: #FDF6EE;
        }
        .refresh-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .calendar-error {
          text-align: center;
          padding: 24px;
          background: #FFF0F0;
          border-radius: 12px;
          color: #D32F2F;
        }
        .calendar-error button {
          margin-top: 12px;
          padding: 8px 16px;
          background: #D32F2F;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        @media (max-width: 640px) {
          .calendar-friends {
            padding: 16px;
          }
          .calendar-controls {
            flex-direction: column;
            align-items: stretch;
          }
          .view-toggle {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }
      ` }} />
    </div>
  );
};

export default CalendarFriends;
