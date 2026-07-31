import React, { useState, useEffect, useRef } from 'react';
import { IDEIAS_CONTEUDO } from '../data/constants';
import DialogPortal from './DialogPortal';

const InspirationGrid = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const openModal = (ideia, event) => {
    // Salvar o elemento que disparou a abertura do modal
    triggerRef.current = event.currentTarget;
    setSelectedIdea(ideia);
    // Body scroll lock is handled by DialogPortal
  };

  const closeModal = () => {
    setSelectedIdea(null);
    // Body scroll lock is handled by DialogPortal
    // Retornar o foco ao card de origem
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  // Escuta Esc para fechar o modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedIdea) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdea]);

  // Foco inicial no botão de fechar quando o modal abrir
  useEffect(() => {
    if (selectedIdea && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [selectedIdea]);

  // Focus trap básico: manter o foco dentro do modal se tentar navegar com Tab
  const handleTabTrap = (e) => {
    if (!selectedIdea) return;
    const modalEl = document.querySelector('.modal-box');
    if (!modalEl) return;
    
    const focusableEls = modalEl.querySelectorAll('button, [tabindex="0"]');
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    }
  };

  return (
    <section className="animate-fade-up">
      <div className="section-eyebrow" style={{ color: '#C9A96E' }}>Inspirações diárias</div>
      <h2 className="section-title">Roteiros e inspirações de produtos</h2>
      <p style={{ fontSize: '0.88rem', color: '#6B4A52', marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
        Toque nos cards com borda inferior dourada para ver o roteiro de stories completo 👇
      </p>

      <div className="ideias-grid">
        {IDEIAS_CONTEUDO.map((ideia, idx) => {
          const handleKeyDown = (e) => {
            if ((e.key === ' ' || e.key === 'Enter') && ideia.hasModal) {
              e.preventDefault();
              openModal(ideia, e);
            }
          };

          return (
            <div
              key={idx}
              className={`ideia-card ${ideia.hasModal ? 'has-modal' : ''}`}
              tabIndex={ideia.hasModal ? 0 : -1}
              onClick={(e) => ideia.hasModal && openModal(ideia, e)}
              onKeyDown={handleKeyDown}
              role={ideia.hasModal ? "button" : undefined}
              aria-haspopup={ideia.hasModal ? "dialog" : undefined}
            >
              <div className="ideia-emoji" aria-hidden="true">{ideia.emoji}</div>
              <div className="ideia-titulo">{ideia.titulo}</div>
              <div className="ideia-desc">{ideia.desc}</div>
              {ideia.hasModal && <div className="ideia-tap">👆 Toque para ver o roteiro</div>}
            </div>
          );
        })}
      </div>

      {selectedIdea && (
          <DialogPortal isOpen={true} onClose={closeModal} titleId="modal-title-id">
            <button 
              ref={closeButtonRef}
              className="modal-close" 
              onClick={closeModal} 
              aria-label="Fechar roteiro"
            >
              ✕
            </button>
            <div className="modal-emoji" aria-hidden="true">{selectedIdea.modalContent.emoji}</div>
            <div id="modal-title-id" className="modal-titulo">{selectedIdea.modalContent.titulo}</div>
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
          </DialogPortal>
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
          outline: none;
        }
        .ideia-card.has-modal {
          cursor: pointer;
          border-bottom: 3px solid #C9A96E;
        }
        .ideia-card.has-modal:hover, .ideia-card.has-modal:focus-visible {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(107, 39, 55, 0.16);
          border-color: #C9A96E;
        }
        .ideia-card:focus-visible {
          outline: 3px solid #6B2737;
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
          cursor: pointer;
        }
        .modal-close:hover, .modal-close:focus-visible {
          background: #E8D5A3;
          outline: none;
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
