import React, { useState } from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { TOTAL_DIAS, ITENS_CHECKLIST } from '../data/constants';

const FinalSection = () => {
  const { state, resetChallenge } = useChallenge();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const calculateProgress = () => {
    let totalItems = TOTAL_DIAS * ITENS_CHECKLIST.length;
    let completedItems = 0;
    let completedDays = 0;

    for (let i = 0; i < TOTAL_DIAS; i++) {
      const dayData = state[`dia_${i}`] || {};
      const completedInDay = Object.values(dayData).filter(Boolean).length;
      completedItems += completedInDay;
      if (completedInDay === ITENS_CHECKLIST.length) completedDays++;
    }

    const percentage = Math.round((completedItems / totalItems) * 100);
    return { percentage, completedDays };
  };

  const { percentage, completedDays } = calculateProgress();

  const handleShare = () => {
    const emoji = percentage >= 80 ? '🔥' : percentage >= 50 ? '💪' : '🌱';
    const text = `${emoji} Desafio Friends — Quinzena 2026\n\nJá completei ${completedDays} de ${TOTAL_DIAS} dias!\n${percentage}% do desafio concluído 💜\n\nMenos perfeição. Mais execução.\n\n#TimeFriends #YberaFriends #DesafioFriends #AçãoGeraResultado`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
      });
    }
  };

  return (
    <section>
      <div className="final-section premium-gradient animate-fade-up">
        <div className="final-titulo">Para lembrar nos dias difíceis</div>
        <h2 className="final-h2">Você está construindo<br />algo maior 🍷</h2>
        <p className="final-texto">
          Você não está competindo com outras afiliadas.<br />
          Você não precisa ter o melhor celular.<br />
          Não precisa ter todos os produtos.<br />
          Não precisa saber tudo.<br /><br />
          Seu único compromisso é <strong>continuar caminhando</strong>.<br /><br />
          O Time Friends cresce quando cada menina dá um pequeno passo.<br />
          E pequenos passos, repetidos todos os dias, <strong>mudam histórias</strong>.
        </p>
        <div className="final-frase">🍷 Juntas somos mais fortes.</div>
        
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
            <h3 className="modal-titulo">📲 Compartilhar progresso</h3>
            <p className="modal-body" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>
              Copie o texto abaixo e cole nos seus Stories marcando o Time Friends!
            </p>
            
            <div className="share-text-box">
              {percentage >= 80 ? '🔥' : percentage >= 50 ? '💪' : '🌱'} Desafio Friends — Quinzena 2026<br /><br />
              Já completei {completedDays} de {TOTAL_DIAS} dias!<br />
              {percentage}% do desafio concluído 💜<br /><br />
              Menos perfeição. Mais execução.<br /><br />
              #TimeFriends #YberaFriends #DesafioFriends #AçãoGeraResultado
            </div>

            <div className="btn-row" style={{ marginTop: '16px' }}>
              <button className="btn-salvar" style={{ width: '100%' }} onClick={handleShare}>
                {copySuccess ? 'Copiado! 💜' : 'Copiar texto'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .final-section {
          border-radius: var(--radius-lg);
          padding: 52px 36px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
        }
        .final-section::before {
          content: '🍷';
          font-size: 8rem;
          position: absolute;
          top: -20px;
          right: -20px;
          opacity: 0.06;
        }
        .final-titulo {
          font-family: var(--font-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--color-rose);
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .final-h2 {
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .final-texto {
          font-size: 0.97rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.85;
          max-width: 480px;
          margin: 0 auto 32px;
        }
        .final-frase {
          font-family: var(--font-secondary);
          font-size: 1.05rem;
          font-weight: 600;
          font-style: italic;
          border-top: 1px solid rgba(216, 160, 180, 0.3);
          padding-top: 24px;
          max-width: 480px;
          margin: 0 auto;
        }
        
        .btn-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
          justify-content: center;
        }
        .btn-primary {
          background: white;
          color: var(--color-vinho);
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: var(--radius-full);
          transition: all 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .btn-ghost {
          background: rgba(255, 255, 255, 0.12);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.25);
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: var(--radius-full);
          transition: all 0.2s;
        }
        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .share-text-box {
          background: var(--color-rose-light);
          border: 1px solid rgba(216, 160, 180, 0.4);
          border-radius: var(--radius-md);
          padding: 16px;
          font-size: 0.88rem;
          color: var(--color-text);
          line-height: 1.7;
          text-align: left;
          white-space: pre-wrap;
        }
      ` }} />
    </section>
  );
};

export default FinalSection;
