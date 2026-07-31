import React from 'react';

const MissionsSection = () => {
  return (
    <section className="animate-fade-up" style={{ marginBottom: '48px' }}>
      <div className="card-final">
        <h2 className="final-title">Você não precisa fazer tudo perfeitamente</h2>
        <p className="final-intro">
          Você precisa continuar aparecendo, aprendendo, conversando e melhorando.
        </p>
        
        <ul className="final-list">
          <li>Cada Story fortalece sua presença.</li>
          <li>Cada Reel pode apresentar você para alguém novo.</li>
          <li>Cada conversa aumenta a confiança.</li>
          <li>Cada indicação pode se transformar em uma venda.</li>
        </ul>
        
        <div className="final-highlight">
          Seu compromisso não é com a perfeição. É com a constância.
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .card-final {
          background: linear-gradient(135deg, #FDF6EE 0%, #FFFBF7 100%);
          border: 1px solid #E8D5A3;
          border-radius: var(--radius-lg);
          padding: 40px 32px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(107, 39, 55, 0.05);
        }
        .final-title {
          font-family: var(--font-title);
          font-size: 2rem;
          font-weight: 700;
          color: #6B2737;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .final-intro {
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: #6B4A52;
          margin-bottom: 24px;
        }
        .final-list {
          list-style: none;
          padding: 0;
          margin: 0 auto 32px;
          max-width: 480px;
          text-align: left;
        }
        .final-list li {
          font-family: var(--font-body);
          font-size: 1rem;
          color: #6B4A52;
          padding: 10px 0;
          border-bottom: 1px solid rgba(232, 213, 163, 0.5);
          position: relative;
          padding-left: 28px;
        }
        .final-list li:last-child {
          border-bottom: none;
        }
        .final-list li::before {
          content: '✨';
          position: absolute;
          left: 0;
          top: 10px;
          font-size: 14px;
        }
        .final-highlight {
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          color: white;
          border-radius: 12px;
          padding: 18px 24px;
          font-family: var(--font-subtitle);
          font-size: 1.05rem;
          font-weight: 600;
          display: inline-block;
          box-shadow: 0 8px 24px rgba(107, 39, 55, 0.2);
        }
        @media (max-width: 640px) {
          .card-final { padding: 32px 20px; }
          .final-title { font-size: 1.6rem; }
          .final-highlight { font-size: 0.95rem; }
        }
      ` }} />
    </section>
  );
};

export default MissionsSection;
