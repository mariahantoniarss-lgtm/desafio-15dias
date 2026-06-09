import React from 'react';
import { START_DATE, TOTAL_DIAS } from '../data/constants';

const Hero = () => {
  const startDate = new Date(START_DATE);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + TOTAL_DIAS - 1);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <header className="hero premium-gradient">
      <div className="hero-inner animate-fade-up">
        <span className="hero-tag glass-pill">Time Friends × Ybera Paris</span>
        <h1 className="hero-titulo">DESAFIO FRIENDS</h1>
        <div className="hero-num">15</div>
        <div className="hero-subtitulo">Menos Perfeição. Mais Execução.</div>
        <p className="hero-desc">
          Durante os próximos 15 dias, nosso compromisso não é ser perfeita.<br />
          É <strong style={{ color: 'white' }}>aparecer</strong>.<br />
          Pequenas ações repetidas constroem grandes resultados.
        </p>
        <div className="hero-frase">
          "Você não precisa acreditar que vai dar certo para começar.<br />
          Você só precisa começar."
        </div>
        <div className="hero-datas">
          <div className="data-pill">{formatDate(startDate)}</div>
          <span className="data-sep">→</span>
          <div className="data-pill">{formatDate(endDate)}</div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 24px 80px;
          position: relative;
          overflow: hidden;
          color: white;
        }
        .hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          border: 1px solid rgba(216, 160, 180, 0.15);
          top: -200px;
          right: -200px;
        }
        .hero::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          border: 1px solid rgba(216, 160, 180, 0.10);
          bottom: -150px;
          left: -150px;
        }
        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 600px;
        }
        .hero-tag {
          display: inline-block;
          font-family: var(--font-secondary);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-rose);
          margin-bottom: 28px;
        }
        .hero-grape {
          font-size: 3.8rem;
          margin-bottom: 16px;
          display: block;
        }
        .hero-titulo {
          font-size: clamp(2.4rem, 8vw, 4rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }
        .hero-num {
          font-family: var(--font-secondary);
          font-size: clamp(4rem, 14vw, 7rem);
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 2px rgba(216, 160, 180, 0.6);
          line-height: 1;
          margin-bottom: 4px;
        }
        .hero-subtitulo {
          font-size: clamp(0.95rem, 3vw, 1.15rem);
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-rose);
          margin-bottom: 32px;
        }
        .hero-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.75;
          max-width: 460px;
          margin: 0 auto 28px;
        }
        .hero-frase {
          display: inline-block;
          font-family: var(--font-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          border-left: 3px solid var(--color-rose);
          padding: 12px 20px;
          border-radius: 0 8px 8px 0;
          font-style: italic;
        }
        .hero-datas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 36px;
        }
        .data-pill {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          padding: 8px 20px;
          font-family: var(--font-secondary);
          font-size: 0.82rem;
          font-weight: 600;
        }
        .data-sep {
          color: rgba(255, 255, 255, 0.3);
          font-size: 1.2rem;
        }
      ` }} />
    </header>
  );
};

export default Hero;
