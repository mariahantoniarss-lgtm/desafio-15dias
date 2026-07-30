import React from 'react';
import { format, parseISO, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const AgendaView = ({ events, loading }) => {
  if (loading) {
    return <div className="loading-state">Carregando agenda...</div>;
  }

  if (!events || events.length === 0) {
    return <div className="empty-state">Nenhum evento programado.</div>;
  }

  // Sort events chronologically
  const sortedEvents = [...events].sort((a, b) => new Date(a.start) - new Date(b.start));

  // Group by day
  const grouped = sortedEvents.reduce((acc, event) => {
    const day = format(parseISO(event.start), 'yyyy-MM-dd');
    if (!acc[day]) acc[day] = [];
    acc[day].push(event);
    return acc;
  }, {});

  return (
    <div className="agenda-view">
      {Object.keys(grouped).map(day => (
        <div key={day} className="agenda-day">
          <div className="day-header">
            <h3>{format(parseISO(day), "EEEE, d 'de' MMMM", { locale: ptBR })}</h3>
          </div>
          <div className="day-events">
            {grouped[day].map(event => (
              <div key={event.id} className={`event-card category-${event.category}`}>
                <div className="event-time">
                  {format(parseISO(event.start), 'HH:mm')}
                </div>
                <div className="event-details">
                  <h4>{event.summary}</h4>
                  {event.location && <p className="event-location">📍 {event.location}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        .agenda-view {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .loading-state, .empty-state {
          text-align: center;
          padding: 48px 0;
          color: #A08088;
          font-family: var(--font-subtitle);
          font-style: italic;
        }
        .day-header h3 {
          font-family: var(--font-title);
          font-size: 18px;
          color: #6B2737;
          margin-bottom: 12px;
          text-transform: capitalize;
          border-bottom: 1px solid rgba(232, 213, 163, 0.5);
          padding-bottom: 8px;
        }
        .day-events {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .event-card {
          display: flex;
          gap: 16px;
          background: #FFF;
          padding: 16px;
          border-radius: 12px;
          border-left: 4px solid #C9A96E; /* default */
          box-shadow: 0 2px 8px rgba(107, 39, 55, 0.04);
          transition: transform 0.2s ease;
        }
        .event-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(107, 39, 55, 0.08);
        }
        .category-reuniao { border-left-color: #6B2737; }
        .category-ybera { border-left-color: #A08088; }
        
        .event-time {
          font-family: var(--font-subtitle);
          font-weight: 600;
          color: #6B2737;
          min-width: 50px;
          font-size: 14px;
        }
        .event-details h4 {
          margin: 0 0 4px;
          font-size: 15px;
          color: #333;
          line-height: 1.4;
        }
        .event-location {
          margin: 0;
          font-size: 13px;
          color: #888;
        }
        @media (max-width: 640px) {
          .event-card {
            padding: 12px;
            gap: 12px;
          }
          .event-time {
            font-size: 13px;
            min-width: 45px;
          }
          .event-details h4 {
            font-size: 14px;
          }
        }
      ` }} />
    </div>
  );
};

export default AgendaView;
