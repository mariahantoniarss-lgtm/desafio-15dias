import React from 'react';

const MissionsSection = () => {
  return (
    <section className="animate-fade-up">
      <div className="section-eyebrow">As missões</div>
      <h2 className="section-title">Seus compromissos dos 15 dias</h2>
      <div className="missoes-grid">
        <div className="missao-card">
          <div className="missao-num">Missão 01 — Bora Agir</div>
          <div className="missao-titulo">Presença diária</div>
          <ul className="missao-items">
            <li><div className="check-icon">✓</div><span>15 stories por dia</span></li>
            <li><div className="check-icon">✓</div><span>2 interações por dia (enquete, caixinha, pergunta, reação)</span></li>
            <li><div className="check-icon">✓</div><span>1 ação de venda por dia (indicação de produto capilar ou Ybera)</span></li>
          </ul>
        </div>
        <div className="missao-card">
          <div className="missao-num">Missão 02 — Minha Voz Importa</div>
          <div className="missao-titulo">Voz dentro do grupo</div>
          <ul className="missao-items">
            <li><div className="check-icon">✓</div><span>Fazer pelo menos 1 pergunta no grupo</span></li>
            <li><div className="check-icon">✓</div><span>Compartilhar pelo menos 1 dificuldade real</span></li>
            <li><div className="check-icon">✓</div><span>Compartilhar pelo menos 1 pequena vitória</span></li>
            <li><div className="check-icon">✓</div><span>Incentivar 2 colegas por dia (curtir, comentar, compartilhar, salvar)</span></li>
          </ul>
        </div>
        <div className="missao-card missao-wide">
          <div className="missao-num">Missão 03 — Execução Acima da Motivação</div>
          <div className="missao-titulo">Enfrentar o que te trava</div>
          <p style={{ fontSize: '0.88rem', color: '#6B4A52', marginBottom: '14px', lineHeight: '1.6', fontFamily: 'var(--font-body)' }}>
            Escolha uma atividade que normalmente te trava. Execute pelo menos <strong style={{ color: '#6B2737' }}>3 vezes durante a quinzena</strong>.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Gravar falando', 'Aparecer nos stories', 'Mostrar produto', 'Fazer CTA', 'Postar reels'].map(txt => (
              <span key={txt} className="missao-tag">{txt}</span>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .missoes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }
        .missao-card {
          background: white;
          border: 1px solid #E8D5A3;
          border-radius: var(--radius-lg);
          padding: 24px 20px;
          box-shadow: var(--shadow-soft);
          position: relative;
          overflow: hidden;
        }
        .missao-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6B2737, #C9A96E);
        }
        .missao-num {
          font-family: var(--font-subtitle);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 8px;
        }
        .missao-titulo {
          font-family: var(--font-subtitle);
          font-size: 1.15rem;
          font-weight: 700;
          color: #6B2737;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .missao-items li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid #E8D5A3;
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: #6B4A52;
          line-height: 1.45;
        }
        .missao-items li:last-child { border-bottom: none; }
        .check-icon {
          width: 20px; height: 20px;
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: white;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .missao-wide { grid-column: 1 / -1; }
        .missao-tag {
          background: #FDF6EE;
          border: 1px solid #E8D5A3;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-subtitle);
          font-size: 0.8rem;
          color: #6B2737;
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .missao-wide { grid-column: auto; }
        }
      ` }} />
    </section>
  );
};

export default MissionsSection;
