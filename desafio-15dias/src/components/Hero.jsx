import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="cache-warning">
        <span className="warning-icon">⚠️</span>
        Seu progresso é salvo automaticamente neste navegador. Para não perder nenhum check: não limpe o histórico, os dados do site nem o cache do Chrome. Se trocar de aparelho ou navegador, o progresso não será transferido.
      </div>
      
      <header className="hero animate-fade-in">
        {/* Elementos decorativos de fundo */}
        <div className="hero-circle circle-1"></div>
        <div className="hero-circle circle-2"></div>

        <div className="hero-content">
          <div className="hero-tagline">Presença → Confiança → Vendas</div>
          
          <h1 className="hero-title">
            DESAFIO FRIENDS <span className="hero-level">Nível 2</span>
          </h1>
          
          <div className="hero-quote-box">
            <p className="hero-quote">
              "Vender não é empurrar produto. É ajudar alguém a resolver um problema que ela já tem. Quando você indica algo que funciona, você está fazendo um favor — não para você. Um favor para ela."
            </p>
          </div>

          <p className="hero-intro">
            Nível 2 chegou. Agora o jogo muda. Aqui você vai aprender a transformar seguidores em pessoas que lembram de você, confiam em você, pedem sua opinião e compram através de você. Porque vendas são consequência de relacionamento.
          </p>

          <div className="hero-dates">
            <span className="date-pill">23 de junho a 06 de julho de 2026</span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .cache-warning {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(90deg, #4A1A24, #6B2737);
            color: #E8D5A3;
            font-family: var(--font-body);
            font-size: 12px;
            padding: 10px 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            z-index: 1000;
            box-shadow: 0 2px 12px rgba(0,0,0,0.15);
            font-weight: 500;
            text-align: center;
          }
          .warning-icon {
            color: #C9A96E;
            font-size: 14px;
          }
          .hero {
            padding: 140px 20px 80px;
            text-align: center;
            background: linear-gradient(135deg, #4A1A24 0%, #6B2737 100%), 
                        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
            background-blend-mode: overlay;
            color: var(--branco);
            position: relative;
            overflow: hidden;
            border-bottom: 2px solid var(--dourado-claro);
          }
          .hero-circle {
            position: absolute;
            border: 1px solid rgba(201, 169, 110, 0.12);
            border-radius: 50%;
            z-index: 1;
            pointer-events: none;
          }
          .circle-1 {
            width: 450px;
            height: 450px;
            top: -100px;
            right: -100px;
          }
          .circle-2 {
            width: 300px;
            height: 300px;
            bottom: -50px;
            left: -80px;
          }
          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
          }
          .hero-tagline {
            font-family: var(--font-subtitle);
            font-weight: 500;
            font-size: 0.85rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--dourado-claro);
            margin-bottom: 16px;
          }
          .hero-title {
            font-family: var(--font-title);
            font-size: 80px;
            font-weight: 700;
            color: var(--branco);
            line-height: 1.1;
            margin-bottom: 32px;
          }
          .hero-level {
            color: var(--dourado);
            font-weight: 300;
            font-style: italic;
            display: inline-block;
            margin-left: 8px;
          }
          .hero-quote-box {
            max-width: 700px;
            margin: 0 auto 32px;
            padding: 24px 32px;
            background: rgba(255, 255, 255, 0.08);
            border-left: 3px solid var(--dourado);
            border-radius: 0 16px 16px 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          .hero-quote {
            font-size: 1.15rem;
            font-style: italic;
            color: var(--branco);
            line-height: 1.5;
            font-weight: 400;
          }
          .hero-intro {
            max-width: 600px;
            margin: 0 auto 36px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.05rem;
            line-height: 1.7;
          }
          .hero-dates {
            margin-top: 24px;
          }
          .date-pill {
            padding: 8px 24px;
            background: rgba(201, 169, 110, 0.2);
            border: 1px solid var(--dourado);
            border-radius: 40px;
            color: var(--dourado-claro);
            font-family: var(--font-subtitle);
            font-weight: 600;
            font-size: 0.88rem;
            letter-spacing: 0.5px;
          }
          @media (max-width: 768px) {
            .hero {
              padding: 120px 20px 60px;
            }
            .hero-title {
              font-size: 56px;
            }
            .hero-quote {
              font-size: 1rem;
            }
            .cache-warning {
              font-size: 11px;
              padding: 8px 12px;
            }
            .circle-1 {
              width: 300px;
              height: 300px;
            }
            .circle-2 {
              width: 200px;
              height: 200px;
            }
          }
        ` }} />
      </header>
    </>
  );
};

export default Hero;
