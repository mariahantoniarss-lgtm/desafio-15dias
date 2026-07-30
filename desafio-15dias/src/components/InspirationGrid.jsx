import React, { useState } from 'react';
import { IDEIAS_CONTEUDO } from '../data/constants';

const InspirationGrid = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);

  const openModal = (ideia) => {
    setSelectedIdea(ideia);
    setTimeout(() => {
      const modalBox = document.querySelector('.modal-box');
      if (modalBox) modalBox.scrollTop = 0;
    }, 10);
  };

  return (
    <section className="animate-fade-up">
      <div className="section-eyebrow" style={{ color: '#C9A96E' }}>Inspirações diárias</div>
      <h2 className="section-title">Nível 2 — Do Relacionamento à Venda</h2>
      <p style={{ fontSize: '0.88rem', color: '#6B4A52', marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
        Toque nos cards com borda inferior dourada para ver o roteiro de stories completo 👇
      </p>

      <div className="ideias-grid">
        {IDEIAS_CONTEUDO.map((ideia, idx) => (
          <div
            key={idx}
            className={`ideia-card ${ideia.hasModal ? 'has-modal' : ''}`}
            onClick={() => ideia.hasModal && openModal(ideia)}
          >
            <div className="ideia-emoji">{ideia.emoji}</div>
            <div className="ideia-titulo">{ideia.titulo}</div>
            <div className="ideia-desc">{ideia.desc}</div>
            {ideia.hasModal && <div className="ideia-tap">👆 Toque para ver o roteiro</div>}
          </div>
        ))}
      </div>

      {selectedIdea && (
        <div className="modal-overlay open" onClick={() => setSelectedIdea(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedIdea(null)}>✕</button>
            <div className="modal-emoji">{selectedIdea.modalContent.emoji}</div>
            <div className="modal-titulo">{selectedIdea.modalContent.titulo}</div>
            <div className="modal-tag">{selectedIdea.modalContent.tag}</div>
            
            <div className="modal-body">
              {selectedIdea.modalContent.body.map((item, i) => {
                if (item.type === 'text') return <p key={i} dangerouslySetInnerHTML={{ __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
                if (item.type === 'story') return (
                  <div key={i} className="story-block">
                    <span className="story-label">{item.label}</span>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                );
                if (item.type === 'dica') return <div key={i} className="modal-dica">{item.content}</div>;
                return null;
              })}
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .ideias-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 12px;
        }
        .ideia-card {
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 16px;
          padding: 18px 16px;
          box-shadow: 0 2px 12px rgba(107, 39, 55, 0.08);
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ideia-card.has-modal {
          cursor: pointer;
          border-bottom: 3px solid #C9A96E;
        }
        .ideia-card.has-modal:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(107, 39, 55, 0.16);
          border-color: #C9A96E;
        }
        .ideia-emoji { font-size: 1.6rem; }
        .ideia-titulo {
          font-family: var(--font-subtitle);
          font-size: 0.9rem;
          font-weight: 600;
          color: #6B2737;
          line-height: 1.3;
        }
        .ideia-desc {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: #6B4A52;
          line-height: 1.45;
        }
        .ideia-tap {
          font-family: var(--font-subtitle);
          font-size: 11px;
          color: #C9A96E;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: auto;
          padding-top: 6px;
        }
        
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(74, 26, 36, 0.65);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .modal-box {
          background: #FFFFFF;
          border-radius: 20px;
          max-width: 520px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          padding: 28px 22px;
          position: relative;
          box-shadow: 0 20px 60px rgba(74, 26, 36, 0.3);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #FDF6EE;
          border: 1px solid #E8D5A3;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6B2737;
          font-weight: 700;
          transition: all 0.2s;
        }
        .modal-close:hover {
          background: #E8D5A3;
        }
        .modal-emoji { font-size: 2.5rem; margin-bottom: 8px; }
        .modal-titulo {
          font-family: var(--font-title);
          font-size: 1.6rem;
          font-weight: 700;
          color: #6B2737;
          margin-bottom: 4px;
          line-height: 1.2;
          border-bottom: 1px solid #E8D5A3;
          padding-bottom: 12px;
        }
        .modal-tag {
          font-family: var(--font-subtitle);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 20px;
        }
        .modal-body {
          font-family: var(--font-body);
          font-size: 0.92rem;
          color: #6B4A52;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .modal-body p { margin-bottom: 12px; }
        .story-block {
          background: #FDF6EE;
          border-left: 3px solid #C9A96E;
          border-radius: 0 8px 8px 0;
          padding: 10px 14px;
          margin-bottom: 12px;
          font-size: 14px;
          font-style: italic;
          color: #2C1A20;
        }
        .story-label {
          font-family: var(--font-subtitle);
          font-style: normal;
          font-weight: 600;
          color: #6B2737;
          font-size: 0.8rem;
          margin-bottom: 4px;
          display: block;
        }
        .modal-dica {
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          color: #FFFFFF;
          border-radius: 10px;
          padding: 14px 16px;
          margin-top: 20px;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.5;
        }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }

        /* Responsividade para Modal e Grid */
        @media (max-width: 640px) {
          .ideias-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .modal-overlay {
            padding: 0;
            align-items: flex-end;
          }
          .modal-box {
            border-radius: 20px 20px 0 0;
            max-height: 85vh;
            margin: 0;
            animation: slideUpMobile 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
        }
        
        @media (min-width: 601px) and (max-width: 860px) {
          .ideias-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 861px) {
          .ideias-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @keyframes slideUpMobile {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      ` }} />
    </section>
  );
};

export default InspirationGrid;
