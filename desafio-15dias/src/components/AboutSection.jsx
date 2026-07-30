import React from 'react';

const AboutSection = () => {
  return (
    <section className="animate-fade-up" style={{ marginTop: '48px' }}>
      <div className="section-eyebrow">A origem do desafio</div>
      <h2 className="section-title">Por que esse desafio existe?</h2>
      <div className="card" style={{ background: '#FFFFFF', border: '1px solid #E8D5A3' }}>
        <p style={{ fontSize: '0.95rem', color: '#6B4A52', marginBottom: '20px', lineHeight: '1.75', fontFamily: 'var(--font-body)' }}>
          Muitas vezes esperamos para agir. Esperamos ter o momento certo, o conteúdo perfeito, a motivação necessária. Mas quem cresce aprende uma coisa:
        </p>
        <div className="porq-grid">
          <div className="porq-item"><div className="porq-x">✕</div>Ter a ideia perfeita</div>
          <div className="porq-item"><div className="porq-x">✕</div>Ter o vídeo perfeito</div>
          <div className="porq-item"><div className="porq-x">✕</div>Ter o dia perfeito</div>
          <div className="porq-item"><div className="porq-x">✕</div>Ter coragem suficiente</div>
        </div>
        <div className="reveal-text">
          🔥 A ação vem antes da motivação.<br />
          <span style={{ fontSize: '0.9rem', fontWeight: 400, opacity: 0.85 }}>Durante 15 dias, queremos apenas criar movimento. Cada pequena ação conta.</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .porq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin-bottom: 24px;
        }
        .porq-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
          background: #FDF6EE;
          border: 1px solid #E8D5A3;
          border-radius: var(--radius-md);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: #6B4A52;
        }
        .porq-x {
          width: 22px;
          height: 22px;
          background: rgba(107, 39, 55, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
          color: #6B2737;
          font-weight: 700;
        }
        .reveal-text {
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          color: white;
          border-radius: 14px;
          padding: 20px 22px;
          font-family: var(--font-subtitle);
          font-size: 1rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.5;
          box-shadow: 0 10px 30px rgba(107, 39, 55, 0.2);
        }
      ` }} />
    </section>
  );
};

export default AboutSection;
