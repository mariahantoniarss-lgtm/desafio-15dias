import React, { useState } from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { getFraseDoDia, getDadosMesAtual } from '../data/frases';
import { ITENS_CHECKLIST } from '../data/constants';

const Hero = ({ onNavigate }) => {
  const [warningAberto, setWarningAberto] = useState(true);
  const { state, setActiveDay } = useChallenge();
  
  const { mesNome, ano, totalDias, diaAtual, textoMesAno } = getDadosMesAtual();
  const fraseDoDia = getFraseDoDia();
  
  // Calcular constância
  let diasCompletos = 0;
  for (let i = 0; i < totalDias; i++) {
    const dayData = state[`dia_${i}`];
    if (dayData && ITENS_CHECKLIST.every(item => dayData[item.id])) {
      diasCompletos++;
    }
  }
  
  let progressoPorcento = Math.round((diasCompletos / totalDias) * 100);
  if (progressoPorcento > 100) progressoPorcento = 100;
  
  // Situação de hoje
  const hojeIndex = diaAtual - 1;
  const hojeData = state[`dia_${hojeIndex}`] || {};
  const tarefasHojeConcluidas = ITENS_CHECKLIST.filter(item => hojeData[item.id]).length;
  const isHojeCompleto = tarefasHojeConcluidas === 6;
  
  let mensagemHoje = "";
  if (tarefasHojeConcluidas === 0) mensagemHoje = "Seu dia ainda não foi iniciado.";
  else if (tarefasHojeConcluidas < 6) mensagemHoje = "Você já começou. Continue no seu ritmo.";
  else mensagemHoje = "Dia concluído. Você cumpriu seus compromissos de hoje.";

  const handleBotaoPrincipal = () => {
    if (isHojeCompleto) {
      if(onNavigate) onNavigate('quinzenal');
    } else {
      if(onNavigate) onNavigate('diario');
      if(setActiveDay) setActiveDay(hojeIndex);
    }
  };

  const handleLinkSecundario = () => {
    if(onNavigate) onNavigate('orientacoes');
    setTimeout(() => {
      const el = document.getElementById('entenda-o-metodo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <div className={`cache-warning-compact ${warningAberto ? 'aberto' : 'fechado'}`}>
        {warningAberto ? (
          <>
            <span className="warning-icon" aria-hidden="true">⚠️</span>
            <span className="warning-text">Seu progresso fica salvo neste navegador. Se você limpar os dados do site ou trocar de aparelho ou navegador, ele não será transferido.</span>
            <button className="warning-close-btn" onClick={() => setWarningAberto(false)} aria-label="Recolher aviso">✕</button>
          </>
        ) : (
          <button className="warning-info-btn" onClick={() => setWarningAberto(true)} aria-label="Expandir aviso de armazenamento">
            ℹ️
          </button>
        )}
      </div>
      
      <header className="hero">
        <div className="hero-content">
          <div className="hero-tagline">PRESENÇA → CONFIANÇA → VENDAS</div>
          
          <h1 className="hero-title">ROTINA FRIENDS</h1>
          
          <p className="hero-main-phrase">
            Constância para ser vista. Relacionamento para ser lembrada. Confiança para vender.
          </p>

          <p className="hero-support-text">
            Acompanhe suas tarefas diárias, cumpra as metas da semana e desenvolva uma rotina de conteúdo que ajude você a crescer, criar relacionamento e gerar oportunidades de venda.
          </p>

          <div className="hero-motivation-card">
            <h3 className="card-title">PARA HOJE 💜</h3>
            <p className="card-quote">“{fraseDoDia}”</p>
          </div>

          <div className="hero-month">{textoMesAno}</div>

          <div className="hero-stats">
            <h3 className="stats-title">MINHA CONSTÂNCIA</h3>
            <div className="stats-info">{diasCompletos} de {totalDias} dias completos</div>
            
            <div className="progress-bar-container" role="progressbar" aria-valuenow={progressoPorcento} aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar-fill" style={{ width: `${progressoPorcento}%` }}></div>
            </div>
            <div className="stats-percentage">{progressoPorcento}% do mês concluído</div>
          </div>

          <div className="hero-today">
            <h3 className="today-title">HOJE</h3>
            <div className="today-info">{tarefasHojeConcluidas} de 6 tarefas concluídas</div>
            <div className="today-message">{mensagemHoje}</div>
          </div>

          <div className="hero-actions">
            <button className="btn-main" onClick={handleBotaoPrincipal}>
              {isHojeCompleto ? 'Ver minha semana' : 'Ver tarefas de hoje'}
            </button>
            <button className="btn-link" onClick={handleLinkSecundario}>
              Entender o Método PONTE
            </button>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .cache-warning-compact {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #FDF6EE;
            border-bottom: 1px solid #E8D5A3;
            color: #6B4A52;
            font-family: var(--font-body);
            font-size: 12px;
            z-index: 1000;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
          }
          .cache-warning-compact.aberto {
            padding: 8px 16px;
            justify-content: center;
            gap: 8px;
          }
          .cache-warning-compact.fechado {
            width: fit-content;
            left: auto;
            right: 16px;
            top: 16px;
            border-bottom: none;
            border: 1px solid #E8D5A3;
            border-radius: 50%;
            background: #FFFBF7;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }
          .warning-text { flex: 1; text-align: center; line-height: 1.4; max-width: 600px; }
          .warning-close-btn, .warning-info-btn {
            background: none; border: none; cursor: pointer; color: #6B2737;
            font-size: 14px; padding: 4px; display: flex; align-items: center; justify-content: center;
          }
          .warning-info-btn {
            width: 36px; height: 36px; font-size: 18px; border-radius: 50%;
          }
          
          .hero {
            padding: 100px 20px 60px;
            text-align: center;
            background: linear-gradient(135deg, #4A1A24 0%, #6B2737 100%), 
                        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
            background-blend-mode: overlay;
            color: var(--branco);
            position: relative;
            border-bottom: 2px solid var(--dourado-claro);
          }
          
          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 700px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-tagline {
            font-family: var(--font-subtitle);
            font-weight: 500;
            font-size: 0.8rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--dourado-claro);
            margin-bottom: 12px;
          }
          
          .hero-title {
            font-family: var(--font-title);
            font-size: 52px;
            font-weight: 700;
            color: var(--branco);
            line-height: 1.1;
            margin-bottom: 24px;
            letter-spacing: -0.02em;
          }
          
          .hero-main-phrase {
            font-family: var(--font-title);
            font-size: 1.25rem;
            color: #FDF6EE;
            line-height: 1.4;
            margin-bottom: 16px;
            font-weight: 500;
          }
          
          .hero-support-text {
            color: rgba(255, 255, 255, 0.85);
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 32px;
            max-width: 580px;
          }
          
          .hero-motivation-card {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(232, 213, 163, 0.3);
            border-radius: 16px;
            padding: 24px 32px;
            margin-bottom: 40px;
            width: 100%;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(8px);
            transition: all 0.3s ease;
          }
          
          .card-title {
            font-family: var(--font-subtitle);
            font-size: 0.8rem;
            letter-spacing: 0.1em;
            color: var(--dourado-claro);
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          
          .card-quote {
            font-family: var(--font-title);
            font-size: 1.15rem;
            font-style: italic;
            color: #FFFFFF;
            line-height: 1.5;
            font-weight: 400;
          }
          
          .hero-month {
            font-family: var(--font-subtitle);
            font-weight: 700;
            font-size: 0.9rem;
            letter-spacing: 0.15em;
            color: var(--dourado);
            margin-bottom: 20px;
          }
          
          .hero-stats {
            width: 100%;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            padding: 20px 24px;
            margin-bottom: 24px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .stats-title, .today-title {
            font-family: var(--font-subtitle);
            font-size: 0.75rem;
            letter-spacing: 0.1em;
            color: rgba(255,255,255,0.6);
            margin-bottom: 8px;
            text-transform: uppercase;
          }
          
          .stats-info {
            font-family: var(--font-body);
            font-size: 1rem;
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 12px;
          }
          
          .progress-bar-container {
            width: 100%;
            height: 8px;
            background: rgba(255,255,255,0.1);
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 8px;
          }
          
          .progress-bar-fill {
            height: 100%;
            background: var(--dourado-claro);
            border-radius: 4px;
            transition: width 0.8s ease;
          }
          
          .stats-percentage {
            font-size: 0.85rem;
            color: rgba(255,255,255,0.7);
          }
          
          .hero-today {
            width: 100%;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            padding: 20px 24px;
            margin-bottom: 32px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .today-info {
            font-family: var(--font-body);
            font-size: 1rem;
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 6px;
          }
          
          .today-message {
            font-size: 0.9rem;
            color: rgba(255,255,255,0.8);
          }
          
          .hero-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            width: 100%;
          }
          
          .btn-main {
            background: var(--dourado-claro);
            color: #4A1A24;
            border: none;
            border-radius: 12px;
            padding: 16px 32px;
            font-family: var(--font-subtitle);
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            width: 100%;
            max-width: 320px;
            transition: transform 0.2s, background 0.2s;
            box-shadow: 0 4px 12px rgba(201, 169, 110, 0.3);
          }
          
          .btn-main:hover {
            transform: translateY(-2px);
            background: #D9B97E;
          }
          
          .btn-main:focus-visible {
            outline: 3px solid #FFF;
            outline-offset: 2px;
          }
          
          .btn-link {
            background: none;
            border: none;
            color: rgba(255,255,255,0.7);
            font-family: var(--font-body);
            font-size: 0.9rem;
            text-decoration: underline;
            cursor: pointer;
            padding: 8px;
            transition: color 0.2s;
          }
          
          .btn-link:hover {
            color: #FFFFFF;
          }
          
          @media (max-width: 768px) {
            .hero { padding: 90px 16px 40px; }
            .hero-title { font-size: 40px; margin-bottom: 16px; }
            .hero-main-phrase { font-size: 1.1rem; }
            .card-quote { font-size: 1.05rem; }
            .hero-motivation-card { padding: 20px; }
            .btn-main { padding: 14px 24px; font-size: 0.95rem; }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .progress-bar-fill, .btn-main, .hero-motivation-card, .cache-warning-compact {
              transition: none !important;
              animation: none !important;
            }
          }
        ` }} />
      </header>
    </>
  );
};

export default Hero;
