import React, { useState } from 'react';
import { IDEIAS_CONTEUDO } from '../data/constants';

const InspirationGrid = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);

  return (
    <section className="animate-fade-up">
      <div className="section-eyebrow" style={{ color: 'var(--color-rose)' }}>Inspirações diárias</div>
      <h2 className="section-title">Como vender sem parecer propaganda</h2>
      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-soft)', marginBottom: '20px' }}>
        Toque nos cards com borda rosa para ver o roteiro de stories completo da Thaís 👇
      </p>

      <div className="ideias-grid">
        {IDEIAS_CONTEUDO.map((ideia, idx) => (
          <div
            key={idx}
            className={`ideia-card ${ideia.hasModal ? 'has-modal' : ''}`}
            onClick={() => ideia.hasModal && setSelectedIdea(ideia)}
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
        .section-title {
          font-family: var(--font-secondary);
          font-size: clamp(1.4rem, 4vw, 1.9rem);
          font-weight: 700;
          color: var(--color-vinho);
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .ideias-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }
        .ideia-card {
          background: white;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          cursor: default;
          transition: all 0.2s;
        }
        .ideia-card.has-modal {
          cursor: pointer;
          border-bottom: 3px solid var(--color-rose);
        }
        .ideia-card.has-modal:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
          border-color: var(--color-rose);
        }
        .ideia-emoji { font-size: 1.5rem; }
        .ideia-titulo {
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-vinho);
          line-height: 1.3;
        }
        .ideia-desc {
          font-size: 0.78rem;
          color: var(--color-text-soft);
          line-height: 1.45;
        }
        .ideia-tap {
          font-size: 0.7rem;
          color: var(--color-rose);
          font-weight: 600;
          margin-top: 8px;
        }
        
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(74, 19, 40, 0.6);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .modal-box {
          background: white;
          border-radius: var(--radius-lg);
          max-width: 500px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          padding: 32px 24px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--color-rose-light);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-vinho);
          font-weight: 700;
        }
        .modal-emoji { font-size: 2.5rem; margin-bottom: 8px; }
        .modal-titulo {
          font-family: var(--font-secondary);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-vinho);
          margin-bottom: 4px;
        }
        .modal-tag {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-rose);
          margin-bottom: 20px;
        }
        .modal-body {
          font-size: 0.9rem;
          color: var(--color-text-soft);
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .modal-body p { margin-bottom: 12px; }
        .story-block {
          background: var(--color-rose-light);
          border-left: 3px solid var(--color-rose);
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
          margin-bottom: 12px;
          font-size: 0.85rem;
          font-style: italic;
          color: var(--color-text);
        }
        .story-label {
          font-style: normal;
          font-weight: 700;
          color: var(--color-vinho);
          font-size: 0.78rem;
          margin-bottom: 4px;
          display: block;
        }
        .modal-dica {
          background: linear-gradient(135deg, var(--color-vinho), #9B3060);
          color: white;
          border-radius: var(--radius-md);
          padding: 14px 16px;
          margin-top: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          line-height: 1.5;
        }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
      ` }} />
    </section>
  );
};

export default InspirationGrid;
