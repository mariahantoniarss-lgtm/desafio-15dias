import React from 'react';

const AboutSection = () => {
  return (
    <section id="entenda-o-metodo" className="orientacoes-section animate-fade-up">
      <div className="section-header" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h2 className="section-title">Orientações & Método</h2>
        <p className="section-subtitle">O seu manual de consulta diária para planejar conteúdos e criar relacionamento que vende.</p>
      </div>

      {/* Método PONTE */}
      <div className="metodo-ponte-card">
        <h3 className="metodo-title">O Método PONTE</h3>
        <p className="metodo-intro">
          Uma metodologia para estruturar suas ações no Instagram e construir uma presença sólida que converte em vendas.
        </p>

        <div className="ponte-letters">
          <div className="ponte-item">
            <div className="ponte-letter">P</div>
            <div className="ponte-detail">
              <strong>Presença</strong>
              <p>Aparecer com frequência para ser vista e lembrada.</p>
            </div>
          </div>

          <div className="ponte-item">
            <div className="ponte-letter">O</div>
            <div className="ponte-detail">
              <strong>Originalidade</strong>
              <p>Mostrar personalidade, experiências e opiniões reais.</p>
            </div>
          </div>

          <div className="ponte-item">
            <div className="ponte-letter">N</div>
            <div className="ponte-detail">
              <strong>Nutrição</strong>
              <p>Entregar conteúdo útil, ensinar e ajudar a audiência.</p>
            </div>
          </div>

          <div className="ponte-item">
            <div className="ponte-letter">T</div>
            <div className="ponte-detail">
              <strong>Troca</strong>
              <p>Responder, conversar, ouvir e criar relacionamento.</p>
            </div>
          </div>

          <div className="ponte-item">
            <div className="ponte-letter">E</div>
            <div className="ponte-detail">
              <strong>Evidência e encaminhamento</strong>
              <p>Mostrar experiências, resultados e provas sociais e orientar a pessoa para o próximo passo.</p>
            </div>
          </div>
        </div>

        <div className="ponte-footer-summary">
          <p>✨ <strong>Presença</strong> gera reconhecimento.</p>
          <p>✨ <strong>Troca</strong> gera relacionamento.</p>
          <p>✨ <strong>Evidência</strong> gera confiança.</p>
          <p>✨ <strong>Confiança</strong> facilita a venda.</p>
        </div>
      </div>

      {/* Manual de Consulta Recolhível */}
      <div className="manual-accordion" style={{ marginTop: '32px' }}>
        <h3 className="accordion-main-title">Manual de Consulta Diária</h3>

        <details className="accordion-details">
          <summary className="accordion-summary">📱 Organização & Distribuição de Stories</summary>
          <div className="accordion-content">
            <p><strong>Divisão sugerida de Stories ao longo do dia:</strong></p>
            <ul>
              <li><strong>Manhã:</strong> 4 Stories (inicie o dia, mostre rotina ou faça perguntas).</li>
              <li><strong>Almoço/Tarde:</strong> 3 Stories (bastidores, conteúdo educativo ou demonstração).</li>
              <li><strong>Noite:</strong> 3 Stories (ação comercial, CTA ou reflexão final).</li>
            </ul>
            <p className="note-text">
              * A divisão é apenas uma orientação. A participante não precisa publicar exatamente nesses horários, desde que evite publicar tudo de uma vez.
            </p>
          </div>
        </details>

        <details className="accordion-details">
          <summary className="accordion-summary">💡 Sugestões de Conteúdo para Stories</summary>
          <div className="accordion-content">
            <ul>
              <li>Mostrar um produto ou bastidores.</li>
              <li>Explicar um benefício ou demonstrar como usar.</li>
              <li>Apresentar uma dificuldade capilar comum e responder a essa objeção.</li>
              <li>Compartilhar uma experiência própria ou mostrar um resultado/antes e depois.</li>
              <li>Convidar alguém para conversar (fazer perguntas abertas ou enquetes).</li>
              <li>Fazer um CTA (chamada para ação) claro direcionando para o Direct.</li>
            </ul>
          </div>
        </details>

        <details className="accordion-details">
          <summary className="accordion-summary">🎬 Planejamento Semanal de Reels (Meta: 4 Reels)</summary>
          <div className="accordion-content">
            <p>A meta é publicar quatro Reels por semana. Aqui está uma sugestão de distribuição estratégica:</p>
            <ul>
              <li><strong>Reel 1: Alcance ou Identificação</strong> (focar em problemas que seu público tem para atrair novas seguidoras).</li>
              <li><strong>Reel 2: Conteúdo Educativo</strong> (ensinar uma dica rápida ou desmistificar um mito).</li>
              <li><strong>Reel 3: Demonstração, Produto ou Rotina</strong> (mostrar o uso prático de um produto Ybera).</li>
              <li><strong>Reel 4: Prova Social, Objeção ou Convite para Conversar</strong> (mostrar antes e depois ou depoimento e fazer chamada para o Direct).</li>
            </ul>
          </div>
        </details>

        <details className="accordion-details">
          <summary className="accordion-summary">⚡ Ganchos & CTAs Poderosos para Conteúdo</summary>
          <div className="accordion-content">
            <p><strong>Exemplos de Ganchos para prender a atenção:</strong></p>
            <ul>
              <li>"Se o seu cabelo está quebrando, pare de fazer isso agora..."</li>
              <li>"O erro que você provavelmente comete ao tentar hidratar as pontas..."</li>
              <li>"3 coisas que ninguém te conta sobre alisamento capilar..."</li>
            </ul>
            <p><strong>Exemplos de CTAs (Chamada para Ação):</strong></p>
            <ul>
              <li>"Me manda um Direct com a palavra ROTINA que eu te ajudo a escolher o melhor produto."</li>
              <li>"Ficou com alguma dúvida? Responda a esse Story e conversamos!"</li>
              <li>"Clique no link da minha bio para garantir o seu frete grátis hoje."</li>
            </ul>
          </div>
        </details>

        <details className="accordion-details">
          <summary className="accordion-summary">📈 Como analisar resultados & buscar referências</summary>
          <div className="accordion-content">
            <p><strong>Como analisar os resultados:</strong></p>
            <ul>
              <li>Preste atenção nas perguntas que chegam na caixinha ou no Direct. Cada dúvida é uma oportunidade de venda.</li>
              <li>Veja quais posts geraram mais salvamentos ou compartilhamentos: esse é o conteúdo que mais agregou valor.</li>
            </ul>
            <p><strong>Como buscar referências sem copiar:</strong></p>
            <ul>
              <li>Pegue uma ideia de outro nicho (ex: organização, culinária) e adapte o formato para o nicho capilar.</li>
              <li>Use suas próprias palavras, mostre seus próprios resultados e dê a sua opinião sincera sobre a técnica ou produto.</li>
            </ul>
          </div>
        </details>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .orientacoes-section {
          margin-bottom: 48px;
        }
        .metodo-ponte-card {
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 20px;
          padding: 28px;
          box-shadow: var(--shadow-soft);
        }
        .metodo-title {
          font-family: var(--font-title);
          font-size: 1.5rem;
          color: #6B2737;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .metodo-intro {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #6B4A52;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .ponte-letters {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }
        .ponte-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .ponte-letter {
          width: 38px;
          height: 38px;
          background: #6B2737;
          color: #FFFFFF;
          font-family: var(--font-title);
          font-size: 1.3rem;
          font-weight: 700;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ponte-detail strong {
          font-family: var(--font-subtitle);
          font-size: 0.98rem;
          color: #6B2737;
          display: block;
          margin-bottom: 2px;
        }
        .ponte-detail p {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: #6B4A52;
          margin: 0;
          line-height: 1.4;
        }
        .ponte-footer-summary {
          border-top: 1px dashed #E8D5A3;
          padding-top: 18px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 10px;
        }
        .ponte-footer-summary p {
          font-family: var(--font-subtitle);
          font-size: 0.88rem;
          color: #6B2737;
          margin: 0;
          font-weight: 500;
        }

        .accordion-main-title {
          font-family: var(--font-title);
          font-size: 1.3rem;
          color: #6B2737;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .accordion-details {
          background: #FFFFFF;
          border: 1px solid #E8D5A3;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .accordion-summary {
          padding: 16px 20px;
          font-family: var(--font-subtitle);
          font-size: 0.95rem;
          font-weight: 600;
          color: #6B2737;
          cursor: pointer;
          user-select: none;
          outline: none;
        }
        .accordion-summary:focus-visible {
          outline: 2px solid #C9A96E;
          background: #FDF6EE;
        }
        .accordion-details[open] {
          border-color: #C9A96E;
        }
        .accordion-details[open] .accordion-summary {
          border-bottom: 1px solid #E8D5A3;
          background: #FDF6EE;
        }
        .accordion-content {
          padding: 20px;
          font-family: var(--font-body);
          font-size: 0.92rem;
          color: #6B4A52;
          line-height: 1.6;
        }
        .accordion-content ul {
          margin: 0;
          padding-left: 20px;
        }
        .accordion-content li {
          margin-bottom: 8px;
        }
        .accordion-content li:last-child {
          margin-bottom: 0;
        }
        .note-text {
          font-size: 0.8rem;
          color: #A08088;
          font-style: italic;
          margin-top: 12px;
        }
      ` }} />
    </section>
  );
};

export default AboutSection;
