import React from 'react';

const TabsNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'diario', label: 'DIÁRIO', emoji: '📅' },
    { id: 'quinzenal', label: 'QUINZENAL', emoji: '🎯' },
    { id: 'produtos', label: 'PRODUTOS', emoji: '🧴' },
  ];

  return (
    <nav className="tabs-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-emoji">{tab.emoji}</span>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        .tabs-nav {
          display: flex;
          position: sticky;
          top: 38px; /* espaço para o fixed cache warning no topo */
          z-index: 100;
          background: #FDF6EE;
          border-bottom: 2px solid #E8D5A3;
          margin: 0 -20px 32px;
          justify-content: center;
          gap: 0px;
        }

        .tab-item {
          flex: 1;
          max-width: 200px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          color: #A08088;
          font-family: var(--font-subtitle);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 14px 20px;
          border: none;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-item:hover {
          color: #6B2737;
        }

        .tab-item.active {
          color: #6B2737;
          border-bottom: 3px solid #C9A96E;
          font-weight: 600;
        }

        .tab-emoji {
          font-size: 1.1rem;
        }

        .tab-label {
          font-weight: inherit;
        }

        @media (max-width: 640px) {
          .tabs-nav {
            margin: 0 -16px 24px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 100vw;
            left: 0;
            top: 36px;
          }
          .tab-item {
            max-width: 100%;
            padding: 12px 6px;
            font-size: 11px;
            gap: 4px;
            flex-direction: column;
          }
          .tab-emoji {
            font-size: 1rem;
          }
        }
      ` }} />
    </nav>
  );
};

export default TabsNav;
