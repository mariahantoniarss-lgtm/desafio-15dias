import React, { useState } from 'react';
import { useChallenge, getSPDateInfo } from '../context/ChallengeContext';

const WeeklyGoals = () => {
  const { state, toggleWeeklyCheck, setWeeklyCount, saveFechamentoAprendizados, getMonthData, activeDate } = useChallenge();
  const [selectedSemana, setSelectedSemana] = useState('1'); // '1' | '2' | '3' | '4' | 'fechamento'
  
  const monthKey = activeDate.substring(0, 7); // YYYY-MM
  const monthData = getMonthData(monthKey);

  // Mapeamento das chaves
  const itensSemanais = [
    { id: 'demonstracao', label: '1 demonstração de produto' },
    { id: 'provaSocial', label: '1 prova social' },
    { id: 'objecao', label: '1 conteúdo respondendo uma objeção' },
    { id: 'coragem', label: '1 ação de coragem' },
    { id: 'analise', label: '1 análise dos resultados' }
  ];

  // Calcular progresso de uma semana específica
  const getSemanaProgresso = (semId) => {
    const semKey = `semana_${semId}`;
    const semData = monthData.metasPorSemana[semKey] || {};
    
    const reelsVal = semData.reelsCount || 0;
    const convitesVal = semData.convitesCount || 0;
    
    let checksConcluidos = 0;
    itensSemanais.forEach(item => {
      if (semData[item.id]) {
        checksConcluidos++;
      }
    });

    const totalConcluido = reelsVal + convitesVal + checksConcluidos;
    const porcentagem = Math.round((totalConcluido / 14) * 100);
    return {
      totalConcluido,
      porcentagem,
      reelsVal,
      convitesVal,
      semData
    };
  };

  // Calcular totais do mês acumulados
  const getTotaisMensais = () => {
    let totalReels = 0;
    let totalConvites = 0;
    let totalDemo = 0;
    let totalProvas = 0;
    let totalObjecoes = 0;
    let totalCoragem = 0;
    let totalAnalises = 0;

    ['1', '2', '3', '4'].forEach(id => {
      const data = getSemanaProgresso(id);
      totalReels += data.reelsVal;
      totalConvites += data.convitesVal;
      if (data.semData.demonstracao) totalDemo++;
      if (data.semData.provaSocial) totalProvas++;
      if (data.semData.objecao) totalObjecoes++;
      if (data.semData.coragem) totalCoragem++;
      if (data.semData.analise) totalAnalises++;
    });

    return {
      totalReels,
      totalConvites,
      totalDemo,
      totalProvas,
      totalObjecoes,
      totalCoragem,
      totalAnalises
    };
  };

  const totais = getTotaisMensais();

  return (
    <div className="weekly-goals animate-fade-in">
      <div className="section-header" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h2 className="section-title">Metas de Conteúdo (Semanas)</h2>
        <p className="section-subtitle">Acompanhe as suas metas semanais para impulsionar sua constância e vendas.</p>
      </div>

      {/* Navegação entre semanas */}
      <div className="weeks-nav" role="tablist">
        {['1', '2', '3', '4', 'fechamento'].map((id) => (
          <button
            key={id}
            role="tab"
            aria-selected={selectedSemana === id}
            className={`week-nav-btn ${selectedSemana === id ? 'active' : ''}`}
            onClick={() => setSelectedSemana(id)}
          >
            {id === 'fechamento' ? 'Fechamento' : `Semana ${id}`}
          </button>
        ))}
      </div>

      {/* Conteúdo da Semana Ativa */}
      {selectedSemana !== 'fechamento' ? (() => {
        const { totalConcluido, porcentagem, reelsVal, convitesVal, semData } = getSemanaProgresso(selectedSemana);
        return (
          <div className="semana-content-card scale-in">
            <div className="semana-header">
              <h3 className="semana-title">Semana {selectedSemana}</h3>
              <div className="semana-progresso-txt">
                Progresso da semana: <strong>{totalConcluido} de 14 ações</strong> ({porcentagem}%)
              </div>
              <div className="progress-bar-container" style={{ height: '6px', background: '#E8D5A3', borderRadius: '4px', overflow: 'hidden', marginTop: '10px' }}>
                <div className="progress-bar-fill" style={{ width: `${porcentagem}%`, height: '100%', background: '#6B2737' }}></div>
              </div>
            </div>

            {/* Contadores */}
            <div className="counters-container">
              <div className="counter-box">
                <span className="counter-emoji">🎬</span>
                <div className="counter-info">
                  <div className="counter-label">Reels Publicados</div>
                  <div className="counter-value">{reelsVal} / 4</div>
                </div>
                <div className="counter-actions">
                  <button onClick={() => setWeeklyCount(selectedSemana, 'reelsCount', reelsVal - 1)} className="counter-btn" aria-label="Diminuir Reels">-</button>
                  <button onClick={() => setWeeklyCount(selectedSemana, 'reelsCount', reelsVal + 1)} className="counter-btn" aria-label="Aumentar Reels">+</button>
                </div>
              </div>

              <div className="counter-box">
                <span className="counter-emoji">💬</span>
                <div className="counter-info">
                  <div className="counter-label">Convites para Conversa</div>
                  <div className="counter-value">{convitesVal} / 5</div>
                </div>
                <div className="counter-actions">
                  <button onClick={() => setWeeklyCount(selectedSemana, 'convitesCount', convitesVal - 1)} className="counter-btn" aria-label="Diminuir convites">-</button>
                  <button onClick={() => setWeeklyCount(selectedSemana, 'convitesCount', convitesVal + 1)} className="counter-btn" aria-label="Aumentar convites">+</button>
                </div>
              </div>
            </div>

            {/* Checkboxes de Metas Semanais */}
            <div className="checklist-weekly-box">
              <h4 className="checklist-box-title">Outras Ações</h4>
              <div className="weekly-checklist-grid">
                {itensSemanais.map(item => {
                  const isChecked = semData[item.id] || false;
                  return (
                    <label key={item.id} className={`weekly-check-item ${isChecked ? 'checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleWeeklyCheck(selectedSemana, item.id)}
                      />
                      <div className="checkbox-custom-weekly">
                        {isChecked && <span className="check-icon">✓</span>}
                      </div>
                      <span className="weekly-item-label">{item.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })() : (
        /* Seção de Fechamento do Mês */
        <div className="semana-content-card scale-in">
          <div className="semana-header">
            <h3 className="semana-title">Fechamento do Mês</h3>
            <p className="semana-subtitle">Espaço para fechar pendências, revisar seu desempenho e documentar aprendizados.</p>
          </div>

          <div className="fechamento-layout">
            <div className="fechamento-checks">
              <label className={`weekly-check-item ${monthData.fechamento.concluirPendencias ? 'checked' : ''}`}>
                <input
                  type="checkbox"
                  checked={monthData.fechamento.concluirPendencias || false}
                  onChange={() => toggleWeeklyCheck('fechamento', 'concluirPendencias')}
                />
                <div className="checkbox-custom-weekly">
                  {monthData.fechamento.concluirPendencias && <span className="check-icon">✓</span>}
                </div>
                <span className="weekly-item-label">Concluir pendências gerais do mês</span>
              </label>

              <label className={`weekly-check-item ${monthData.fechamento.analiseFinal ? 'checked' : ''}`}>
                <input
                  type="checkbox"
                  checked={monthData.fechamento.analiseFinal || false}
                  onChange={() => toggleWeeklyCheck('fechamento', 'analiseFinal')}
                />
                <div className="checkbox-custom-weekly">
                  {monthData.fechamento.analiseFinal && <span className="check-icon">✓</span>}
                </div>
                <span className="weekly-item-label">Fazer a análise final do mês</span>
              </label>
            </div>

            <div className="aprendizados-box" style={{ marginTop: '20px' }}>
              <label htmlFor="aprendizados-input" className="aprendizados-label">Registrar aprendizados e observações:</label>
              <textarea
                id="aprendizados-input"
                className="aprendizados-textarea"
                rows="4"
                placeholder="Escreva aqui o que funcionou melhor, o que pode ser melhorado e seus principais aprendizados..."
                value={monthData.fechamento.aprendizados || ""}
                onChange={(e) => saveFechamentoAprendizados(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Seção de Resumo Acumulado Mensal */}
      <div className="monthly-summary-card" style={{ marginTop: '32px' }}>
        <h3 className="summary-title">Acumulado Mensal (Realizado)</h3>
        <div className="summary-grid">
          <div className="summary-stat">
            <span className="stat-label">Reels Publicados</span>
            <span className="stat-num">{totais.totalReels} <small>/ 16</small></span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Convites para Conversa</span>
            <span className="stat-num">{totais.totalConvites} <small>/ 20</small></span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Demonstrações de Produto</span>
            <span className="stat-num">{totais.totalDemo} <small>/ 4</small></span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Provas Sociais</span>
            <span className="stat-num">{totais.totalProvas} <small>/ 4</small></span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Respostas a Objeções</span>
            <span className="stat-num">{totais.totalObjecoes} <small>/ 4</small></span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Ações de Coragem</span>
            <span className="stat-num">{totais.totalCoragem} <small>/ 4</small></span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Análises Semanais</span>
            <span className="stat-num">{totais.totalAnalises} <small>/ 4</small></span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .weeks-nav {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .week-nav-btn {
          padding: 10px 16px;
          border-radius: 40px;
          border: 1px solid #E8D5A3;
          background: #FFFFFF;
          color: #A08088;
          font-family: var(--font-subtitle);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .week-nav-btn:hover {
          color: #6B2737;
          border-color: #C9A96E;
        }
        .week-nav-btn.active {
          background: #6B2737;
          color: #FFFFFF;
          border-color: #6B2737;
          box-shadow: 0 4px 12px rgba(107,39,55,0.15);
        }
        .semana-content-card {
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow-soft);
        }
        .semana-header {
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(232, 213, 163, 0.5);
          padding-bottom: 16px;
        }
        .semana-title {
          font-family: var(--font-title);
          font-size: 1.5rem;
          font-weight: 700;
          color: #6B2737;
          margin-bottom: 4px;
        }
        .semana-progresso-txt {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #6B4A52;
        }
        .counters-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        .counter-box {
          background: #FFFBF7;
          border: 1px solid #E8D5A3;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .counter-emoji {
          font-size: 1.8rem;
        }
        .counter-info {
          flex: 1;
        }
        .counter-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: #A08088;
          font-weight: 500;
        }
        .counter-value {
          font-family: var(--font-title);
          font-size: 1.3rem;
          font-weight: 700;
          color: #6B2737;
        }
        .counter-actions {
          display: flex;
          gap: 6px;
        }
        .counter-btn {
          width: 32px;
          height: 32px;
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          color: #6B2737;
          border-radius: 50%;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .counter-btn:hover {
          background: #6B2737;
          color: #FFFFFF;
          border-color: #6B2737;
        }
        
        .checklist-weekly-box {
          border-top: 1px solid rgba(232, 213, 163, 0.5);
          padding-top: 20px;
        }
        .checklist-box-title {
          font-family: var(--font-subtitle);
          font-size: 0.95rem;
          color: #6B2737;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .weekly-checklist-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        .weekly-check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .weekly-check-item input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }
        .checkbox-custom-weekly {
          width: 20px;
          height: 20px;
          border: 2px solid #C9A96E;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: #FFFFFF;
        }
        .weekly-check-item.checked {
          background: #FDF6EE;
        }
        .weekly-check-item.checked .checkbox-custom-weekly {
          background: linear-gradient(135deg, #6B2737, #9B4A5A);
          border-color: #6B2737;
        }
        .weekly-item-label {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: #2C1A20;
          line-height: 1.4;
        }
        .weekly-check-item.checked .weekly-item-label {
          color: #A08088;
          text-decoration: line-through;
        }

        .aprendizados-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .aprendizados-label {
          font-family: var(--font-subtitle);
          font-size: 0.9rem;
          font-weight: 600;
          color: #6B2737;
        }
        .aprendizados-textarea {
          width: 100%;
          border: 1px solid #E8D5A3;
          border-radius: 10px;
          padding: 12px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          resize: vertical;
          background: #FFFFFF;
        }
        .aprendizados-textarea:focus {
          outline: 2px solid #6B2737;
        }

        .monthly-summary-card {
          background: #FFFBF7;
          border: 1.5px solid #E8D5A3;
          border-radius: 20px;
          padding: 24px;
        }
        .summary-title {
          font-family: var(--font-subtitle);
          font-size: 1.1rem;
          color: #6B2737;
          font-weight: 700;
          margin-bottom: 16px;
          text-align: center;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }
        .summary-stat {
          background: #FFFFFF;
          border: 1px solid rgba(232, 213, 163, 0.5);
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .stat-label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: #6B4A52;
        }
        .stat-num {
          font-family: var(--font-title);
          font-size: 1.15rem;
          font-weight: 700;
          color: #6B2737;
        }
        .stat-num small {
          font-size: 0.8rem;
          color: #A08088;
          font-weight: 400;
        }

        @media (max-width: 640px) {
          .counters-container {
            grid-template-columns: 1fr;
          }
          .summary-grid {
            grid-template-columns: 1fr;
          }
        }
      ` }} />
    </div>
  );
};

export default WeeklyGoals;
