import React from 'react';

const AboutSection = () => {
  return (
    <section id="entenda-o-metodo" className="animate-fade-up" style={{ marginTop: '48px' }}>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>Como a Rotina Friends funciona</h2>
      
      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">📝</div>
          <h3 className="about-subtitle">Tarefas diárias</h3>
          <p className="about-text">
            Os hábitos que ajudam você a manter presença, conversar com a audiência e criar oportunidades de venda.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🎯</div>
          <h3 className="about-subtitle">Metas semanais</h3>
          <p className="about-text">
            Quatro Reels por semana e outras ações importantes para gerar alcance, confiança e conversas.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">💡</div>
          <h3 className="about-subtitle">Orientações</h3>
          <p className="about-text">
            Um manual com ideias de Stories, tipos de Reels, ganchos, CTAs e exemplos para consultar quando precisar.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🧴</div>
          <h3 className="about-subtitle">Produtos</h3>
          <p className="about-text">
            Roteiros e inspirações para apresentar os produtos da Ybera com mais clareza e naturalidade.
          </p>
        </div>

        <div className="about-card" style={{ gridColumn: '1 / -1', maxWidth: '400px', margin: '0 auto' }}>
          <div className="about-icon">🗓️</div>
          <h3 className="about-subtitle">Agenda</h3>
          <p className="about-text">
            Campanhas, promoções, reuniões, prazos e compromissos do Time Friends.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .about-card {
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: var(--radius-lg);
          padding: 24px;
          text-align: center;
          box-shadow: var(--shadow-soft);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .about-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(107, 39, 55, 0.08);
          border-color: #C9A96E;
        }
        .about-icon {
          font-size: 2rem;
          margin-bottom: 16px;
        }
        .about-subtitle {
          font-family: var(--font-subtitle);
          font-size: 1.1rem;
          font-weight: 700;
          color: #6B2737;
          margin-bottom: 12px;
        }
        .about-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #6B4A52;
          line-height: 1.5;
        }
      ` }} />
    </section>
  );
};

export default AboutSection;
