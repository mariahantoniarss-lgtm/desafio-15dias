import React, { useState, useEffect, useRef } from 'react';
import DialogPortal from './DialogPortal';
import { useChallenge, getSPDateInfo } from '../context/ChallengeContext';
import { getDadosMesAtual } from '../data/frases';
import { ITENS_CHECKLIST } from '../data/constants';

const FinalSection = () => {
  const { getMonthData } = useChallenge();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const triggerBtnRef = useRef(null);
  const closeBtnRef = useRef(null);

  const todayInfo = getSPDateInfo();
  const todayKey = todayInfo.dateKey;
  const todayMonthKey = todayKey.substring(0, 7);
  
  const { totalDias } = getDadosMesAtual();
  const monthData = getMonthData(todayMonthKey);

  // Calcular constância do mês atual
  let diasCompletos = 0;
  const yearStr = todayKey.substring(0, 4);
  const monthStr = todayKey.substring(5, 7);

  for (let d = 1; d <= totalDias; d++) {
    const dateStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
    const dayData = monthData.tarefasPorData[dateStr] || {};
    if (ITENS_CHECKLIST.every(item => dayData[item.id])) {
      diasCompletos++;
    }
  }
  
  const percentage = Math.round((diasCompletos / totalDias) * 100);

  const handleShare = () => {
    const emoji = percentage >= 80 ? '🔥' : percentage >= 50 ? '💪' : '🍷';
    const text = `${emoji} Rotina Friends\n\nMinha constância: ${diasCompletos} de ${totalDias} dias completos neste mês!\n${percentage}% do mês concluído 🍷\n\nMenos perfeição. Mais execução.\n\n#TimeFriends #YberaFriends #RotinaFriends #Constancia`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
      });
    }
  };

  const openShareModal = (e) => {
    triggerBtnRef.current = e.currentTarget;
    setShowShareModal(true);
    // Body scroll lock handled by DialogPortal
  };

  const closeShareModal = () => {
    setShowShareModal(false);
    // Body scroll lock handled by DialogPortal
    if (triggerBtnRef.current) {
      triggerBtnRef.current.focus();
    }
  };

  // Close with Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showShareModal) {
        closeShareModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showShareModal]);

  // Focus trap for share modal
  const handleTabTrap = (e) => {
    if (!showShareModal) return;
    const modalEl = document.querySelector('.share-box');
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

  useEffect(() => {
    if (showShareModal && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [showShareModal]);

  return (
    <section>
      <div className="final-section animate-fade-up">
        <div className="final-titulo">Para lembrar nos dias difíceis</div>
        <h2 className="final-h2">Você está construindo<br />algo maior</h2>
        <p className="final-texto">
          Você não está competindo com outras afiliadas.<br />
          Você não precisa ter o melhor celular.<br />
          Não precisa ter todos os produtos.<br />
          Não precisa saber tudo.<br /><br />
          Seu único compromisso é <strong>continuar caminhando</strong>.<br /><br />
          O Time Friends cresce quando cada menina dá um pequeno passo.<br />
          E pequenos passos, repetidos todos os dias, <strong>mudam histórias</strong>.
        </p>
        
        <div className="btn-row">
          <button className="btn-primary" onClick={openShareModal}>📲 Compartilhar meu progresso</button>
        </div>
      </div>

      {showShareModal && (
        <DialogPortal isOpen={true} onClose={closeShareModal} titleId="share-title-id">
          <button 
            ref={closeBtnRef}
            className="modal-close" 
            onClick={closeShareModal} 
            aria-label="Fechar compartilhamento"
          >
            ✕
          </button>
          <h3 id="share-title-id" className="share-modal-title">📲 Compartilhar progresso</h3>
          <p className="share-modal-subtitle">
            Copie o texto abaixo e cole nos seus Stories marcando o Time Friends!
          </p>
          
          <div className="share-text-box">
            {percentage >= 80 ? '🔥' : percentage >= 50 ? '💪' : '🍷'} Rotina Friends<br /><br />
            Minha constância: {diasCompletos} de {totalDias} dias completos neste mês!<br />
            {percentage}% do mês concluído 🍷<br /><br />
            Menos perfeição. Mais execução.<br /><br />
            #TimeFriends #YberaFriends #RotinaFriends #Constancia
          </div>

          <div className="btn-row" style={{ marginTop: '20px' }}>
            <button className="btn-salvar-share" style={{ width: '100%' }} onClick={handleShare}>
              {copySuccess ? 'Copiado! 🍷' : 'Copiar texto'}
            </button>
          </div>
        </DialogPortal>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .final-section {
          background: linear-gradient(160deg, #4A1A24 0%, #6B2737 60%, #9B4A5A 100%);
          border-radius: 20px;
          padding: 48px 28px;
          color: #FFFFFF;
          text-align: center;
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
        }
        .final-section::before {
          content: '🍷';
          font-size: 120px;
          position: absolute;
          top: -20px;
          right: -20px;
          opacity: 0.05;
          pointer-events: none;
          aria-hidden: true;
        }
        .final-titulo {
          font-family: var(--font-subtitle);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--dourado-claro);
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .final-h2 {
          font-family: var(--font-title);
          font-size: 32px;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .final-texto {
          font-family: var(--font-body);
          font-size: 15px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.85;
          max-width: 480px;
          margin: 0 auto 32px;
        }
        
        .btn-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
          justify-content: center;
        }
        .btn-primary {
          background: #FFFFFF;
          color: #6B2737;
          font-family: var(--font-subtitle);
          font-size: 0.88rem;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 40px;
          transition: all 0.2s;
          border: none;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .btn-primary:focus-visible {
          outline: 3px solid #C9A96E;
          outline-offset: 2px;
        }

        .share-modal-title {
          font-family: var(--font-title);
          font-size: 1.5rem;
          font-weight: 700;
          color: #6B2737;
          margin-bottom: 6px;
        }
        .share-modal-subtitle {
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: #6B4A52;
          margin-bottom: 16px;
        }
        
        .share-text-box {
          background: #FDF6EE;
          border: 1px solid #E8D5A3;
          border-radius: 12px;
          padding: 16px;
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: #2C1A20;
          line-height: 1.7;
          text-align: left;
          white-space: pre-wrap;
        }

        .btn-salvar-share {
          background: #6B2737;
          color: #FFFFFF;
          border-radius: 40px;
          border: none;
          font-family: var(--font-subtitle);
          font-weight: 600;
          padding: 12px 28px;
          font-size: 0.9rem;
          transition: all 0.2s;
          cursor: pointer;
        }
        .btn-salvar-share:hover {
          background: #4A1A24;
        }
        .btn-salvar-share:focus-visible {
          outline: 3px solid #C9A96E;
          outline-offset: 2px;
        }

        @media (max-width: 640px) {
          .final-section {
            padding: 36px 16px;
          }
          .final-h2 {
            font-size: 26px;
          }
          .final-texto {
            font-size: 14px;
          }
          .btn-primary {
            width: 100%;
            padding: 12px 20px;
          }
        }
      ` }} />
    </section>
  );
};

export default FinalSection;
