import React, { useState } from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { TOTAL_DIAS, ITENS_CHECKLIST, METAS_QUINZENAIS } from '../data/constants';

const FinalSection = () => {
  const { state, resetChallenge } = useChallenge();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const calculateProgress = () => {
    // Diários: 90 checks
    // Quinzenais: 36 checks
    let totalChecks = 126;
    let completedChecks = 0;
    let completedDays = 0;

    for (let i = 0; i < TOTAL_DIAS; i++) {
      const dayData = state[`dia_${i}`] || {};
      const completedInDay = Object.values(dayData).filter(Boolean).length;
      completedChecks += completedInDay;
      if (completedInDay === ITENS_CHECKLIST.length) completedDays++;
    }

    METAS_QUINZENAIS.forEach(bloco => {
      const goalData = state[`weekly_${bloco.id}`] || {};
      completedChecks += Object.values(goalData).filter(Boolean).length;
    });

    const percentage = Math.round((completedChecks / totalChecks) * 100);
    return { percentage, completedDays };
  };

  const { percentage, completedDays } = calculateProgress();

  const handleShare = () => {
    const emoji = percentage >= 80 ? '🔥' : percentage >= 50 ? '💪' : '🌱';
    const text = `${emoji} Desafio Friends — Nível 2\n\nJá completei ${completedDays} de ${TOTAL_DIAS} dias!\n${percentage}% do desafio concluído 🍷\n\nMenos perfeição. Mais execução.\n\n#TimeFriends #YberaFriends #DesafioFriends #AçãoGeraResultado`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
      });
    }
  };

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
          <button className="btn-primary" onClick={() => setShowShareModal(true)}>📲 Compartilhar meu progresso</button>
          <button className="btn-ghost" onClick={() => {
            if (window.confirm('Tem certeza que quer reiniciar o desafio? Todo progresso será apagado.')) {
              resetChallenge();
            }
          }}>↺ Reiniciar desafio</button>
        </div>
      </div>

      {showShareModal && (
        <div className="modal-overlay open" onClick={() => setShowShareModal(false)}>
          <div className="modal-box share-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowShareModal(false)}>✕</button>
            <h3 className="share-modal-title">📲 Compartilhar progresso</h3>
            <p className="share-modal-subtitle">
              Copie o texto abaixo e cole nos seus Stories marcando o Time Friends!
            </p>
            
            <div className="share-text-box">
              {percentage >= 80 ? '🔥' : percentage >= 50 ? '💪' : '🌱'} Desafio Friends — Nível 2<br /><br />
              Já completei {completedDays} de {TOTAL_DIAS} dias!<br />
              {percentage}% do desafio concluído 🍷<br /><br />
              Menos perfeição. Mais execução.<br /><br />
              #TimeFriends #YberaFriends #DesafioFriends #AçãoGeraResultado
            </div>

            <div className="btn-row" style={{ marginTop: '20px' }}>
              <button className="btn-salvar-share" style={{ width: '100%' }} onClick={handleShare}>
                {copySuccess ? 'Copiado! 🍷' : 'Copiar texto'}
              </button>
            </div>
          </div>
        </div>
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
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .btn-ghost {
          background: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.25);
          font-family: var(--font-subtitle);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: 40px;
          transition: all 0.2s;
        }
        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.2);
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
          font-family: var(--font-subtitle);
          font-weight: 600;
          padding: 12px 28px;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        .btn-salvar-share:hover {
          background: #4A1A24;
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
          .btn-primary, .btn-ghost {
            width: 100%;
            padding: 12px 20px;
          }
        }
      ` }} />
    </section>
  );
};

export default FinalSection;
