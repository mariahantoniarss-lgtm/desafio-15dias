import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, parseISO, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const MonthView = ({ events, loading }) => {
  const [date, setDate] = useState(new Date());

  if (loading) {
    return <div className="loading-state">Carregando calendário...</div>;
  }

  // Get events for the selected day
  const selectedDayEvents = events.filter(event => 
    isSameDay(parseISO(event.start), date)
  ).sort((a, b) => new Date(a.start) - new Date(b.start));

  // Function to add a dot if there is an event on a date
  const tileContent = ({ date: tileDate, view }) => {
    if (view === 'month') {
      const dayEvents = events.filter(event => isSameDay(parseISO(event.start), tileDate));
      if (dayEvents.length > 0) {
        return (
          <div className="calendar-dots">
            {dayEvents.slice(0, 3).map((ev, i) => (
              <span key={i} className={`dot category-${ev.category}`}></span>
            ))}
            {dayEvents.length > 3 && <span className="dot-more">+</span>}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="month-view">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          locale="pt-BR"
          tileContent={tileContent}
          className="custom-calendar"
        />
      </div>
      
      <div className="selected-day-events">
        <h3>{format(date, "d 'de' MMMM", { locale: ptBR })}</h3>
        
        {selectedDayEvents.length === 0 ? (
          <p className="no-events">Nenhum evento neste dia.</p>
        ) : (
          <div className="events-list">
            {selectedDayEvents.map(event => (
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
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .month-view {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .calendar-container {
          background: #FFF;
          padding: 16px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(107, 39, 55, 0.04);
          border: 1px solid rgba(232, 213, 163, 0.3);
        }
        
        /* Custom react-calendar styling */
        .custom-calendar {
          width: 100%;
          border: none !important;
          font-family: inherit;
        }
        .custom-calendar .react-calendar__navigation button {
          color: #6B2737;
          font-family: var(--font-title);
          font-size: 16px;
          border-radius: 8px;
        }
        .custom-calendar .react-calendar__navigation button:hover,
        .custom-calendar .react-calendar__navigation button:focus {
          background-color: #FDF6EE !important;
        }
        .custom-calendar .react-calendar__month-view__weekdays {
          text-transform: uppercase;
          font-family: var(--font-subtitle);
          font-size: 11px;
          color: #A08088;
        }
        .custom-calendar .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none;
        }
        .custom-calendar .react-calendar__tile {
          padding: 12px 6px;
          border-radius: 8px;
          position: relative;
          color: #333;
        }
        .custom-calendar .react-calendar__tile:enabled:hover,
        .custom-calendar .react-calendar__tile:enabled:focus {
          background-color: #FDF6EE !important;
          color: #6B2737;
        }
        .custom-calendar .react-calendar__tile--now {
          background-color: rgba(232, 213, 163, 0.3) !important;
          color: #6B2737;
        }
        .custom-calendar .react-calendar__tile--active {
          background-color: #6B2737 !important;
          color: white !important;
        }
        
        /* Dots */
        .calendar-dots {
          position: absolute;
          bottom: 4px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
        }
        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #C9A96E;
        }
        .dot.category-reuniao { background: #6B2737; }
        .dot.category-ybera { background: #A08088; }
        .dot-more {
          font-size: 8px;
          line-height: 4px;
          color: #A08088;
        }

        .selected-day-events h3 {
          font-family: var(--font-title);
          font-size: 18px;
          color: #6B2737;
          margin-bottom: 16px;
          text-align: center;
        }
        .no-events {
          text-align: center;
          color: #A08088;
          font-family: var(--font-subtitle);
          font-style: italic;
        }
        .events-list {
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
          border-left: 4px solid #C9A96E;
          box-shadow: 0 2px 8px rgba(107, 39, 55, 0.04);
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
      ` }} />
    </div>
  );
};

export default MonthView;
