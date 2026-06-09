export const TOTAL_DIAS = 15;
export const START_DATE = '2026-06-09T00:00:00';
export const STORAGE_KEY = 'desafio_friends_v2';

export const ITENS_CHECKLIST = [
  { id: 'stories', label: '15 stories publicados' },
  { id: 'interacao', label: '2 interações feitas (enquete, caixinha, pergunta ou reação)' },
  { id: 'venda', label: '1 ação de venda realizada' },
  { id: 'grupo', label: 'Participei do grupo (pergunta, vitória ou dificuldade)' },
  { id: 'colega', label: 'Incentivei 2 colegas hoje' },
];

export const FRASES_MOTIVACIONAIS = [
  "Você apareceu hoje. Isso já faz diferença. 💜",
  "Constância vence talento sem ação.",
  "Uma pequena ação hoje evita grandes arrependimentos amanhã.",
  "Você está construindo algo maior que você imagina.",
  "Feito é melhor do que perfeito.",
  "Cada story que você posta é uma semente. Confie no processo.",
  "Não é sobre ter disposição. É sobre aparecer mesmo sem ela.",
  "Você não precisa ser a melhor. Você precisa ser consistente.",
  "Orgulhe-se. Você fez mais do que 90% das pessoas hoje.",
  "Pequenos passos repetidos criam resultados que parecem milagres.",
  "A motivação segue a ação, não o contrário.",
  "Você está mais próxima do que parecia ontem.",
  "Cada checklist marcado é uma prova de que você é capaz.",
  "O dia difícil que você encarou hoje é o que te diferencia.",
  "Ninguém vê a construção. Todo mundo vai ver o resultado.",
  "Continue. Amanhã você agradece por não ter parado hoje.",
  "Você já chegou até aqui. Isso não é pouca coisa.",
  "O Time Friends te vê crescer. Nós nos orgulhamos de você. 🍷",
  "Ação gera resultado. Você provou isso hoje.",
  "Parabéns. Você é a prova de que comprometimento existe.",
];

export const IDEIAS_CONTEUDO = [
  {
    emoji: '💆', titulo: 'Cronograma Capilar: Hidratação',
    desc: 'Roteiro completo de stories para ensinar sobre hidratação capilar.',
    hasModal: true,
    modalContent: {
      emoji: '💧',
      titulo: 'Cronograma Capilar: Hidratação',
      tag: 'Roteiro de Stories — Thaís Cássia',
      body: [
        { type: 'text', content: 'A ideia é **ensinar as seguidoras a identificarem quando o cabelo está precisando de hidratação**. Conteúdo educativo que gera autoridade e venda.' },
        { type: 'story', label: 'Story 1 — Introdução', content: '"Agora deixa eu explicar uma das etapas do cronograma capilar: a hidratação."' },
        { type: 'story', label: 'Story 2 — Explicação simples', content: '"A hidratação serve para devolver água para o fio. Quando o cabelo perde água ele fica opaco, áspero e sem movimento."' },
        { type: 'story', label: 'Story 3 — Como identificar', content: '"Sinais de que seu cabelo está precisando de hidratação:<br>💧 Cabelo muito ressecado<br>💧 Sem brilho<br>💧 Aspecto opaco<br>💧 Embaraça com facilidade"' },
        { type: 'story', label: 'Story 4 — Conexão com o público', content: '"Se o seu cabelo está assim, provavelmente ele está pedindo hidratação."' },
        { type: 'story', label: 'Story 5 — Interação (coloca enquete)', content: '"Agora me conta aqui 👇 Você sente que seu cabelo está mais ressecado ultimamente?<br>▫️ Sim &nbsp; ▫️ Um pouco &nbsp; ▫️ Não"' },
        { type: 'dica', content: '💡 Conteúdo educativo + enquete = muito engajamento e abre conversa para oferecer o produto certo.' }
      ]
    }
  },
  {
    emoji: '🌿', titulo: 'Óleo de Mirra',
    desc: 'Como apresentar o óleo de mirra de forma simples e direta.',
    hasModal: true,
    modalContent: {
      emoji: '🌿',
      titulo: 'Óleo de Mirra',
      tag: 'Roteiro de Stories — Thaís Cássia',
      body: [
        { type: 'text', content: '**Importante:** 2 a 3 stories no máximo. Conteúdo direto funciona muito mais — o público pula quando tem stories demais.' },
        { type: 'story', label: 'Story 1', content: '"Vocês sabiam que o óleo de mirra não é só um óleo comum?"' },
        { type: 'story', label: 'Story 2', content: '"Ele tem ação cicatrizante e regeneradora, ajudando a recuperar áreas ressecadas e danificadas."' },
        { type: 'story', label: 'Story 3', content: '"No cabelo ele ajuda muito no frizz, dá brilho e melhora aquelas pontas ressecadas. E o mais interessante: também pode ser usado na pele, ajudando na hidratação e recuperação."' },
        { type: 'dica', content: '💡 Simples assim. Conteúdo direto funciona muito mais do que ficar enrolando 😉' }
      ]
    }
  },
  {
    emoji: '🌱', titulo: 'Tônico Antiqueda',
    desc: 'Roteiro completo para falar do tônico com autoridade e gerar vendas.',
    hasModal: true,
    modalContent: {
      emoji: '🌱',
      titulo: 'Tônico Antiqueda',
      tag: 'Roteiro Completo — Thaís Cássia',
      body: [
        { type: 'text', content: '**Primeiro, entendam isso:** O tônico antiqueda não é só pra "parar queda" — ele é um **tratamento para o couro cabeludo**.' },
        { type: 'text', content: '**✨ O que ele faz:**\n\n- Ajuda a reduzir a queda\n- Estimula o crescimento dos fios\n- Fortalece a raiz\n- Melhora a saúde do couro cabeludo' },
        { type: 'story', label: 'Destaque', content: '"Muitas vezes a queda não é só no fio, começa no couro cabeludo. Por isso tratar a raiz faz toda diferença."' },
        { type: 'text', content: '**🌱 Benefícios na prática:**\n\n- Fios mais fortes\n- Menos quebra\n- Crescimento mais saudável\n- Sensação de couro cabeludo mais equilibrado' },
        { type: 'story', label: 'Como usar', content: '"Aplica direto no couro cabeludo e massageia. O uso contínuo é o que traz resultado."' },
        { type: 'story', label: 'Interesse', content: '"Se seu cabelo tá caindo mais que o normal, talvez você esteja focando só no comprimento e esquecendo da raiz 👀"' },
        { type: 'dica', content: '💡 Resumo: "É um tratamento pra fortalecer desde a raiz e ajudar no crescimento saudável." — Constância + explicação simples = resultado e venda.' }
      ]
    }
  },
  { emoji: '🌸', titulo: 'Produto favorito da semana', desc: 'Compartilhe com autenticidade o que você mais amou usar.', hasModal: false },
  { emoji: '🔁', titulo: 'Produto que compraria de novo', desc: 'Prova social real: você compraria de novo? Diga por quê.', hasModal: false },
  { emoji: '✨', titulo: 'Antes e depois', desc: 'Resultado visual é o conteúdo mais poderoso. Mostre a transformação.', hasModal: false },
  { emoji: '🪞', titulo: 'Minha rotina capilar', desc: 'Stories da sua rotina com os produtos da Ybera no processo.', hasModal: false },
  { emoji: '💪', titulo: 'Produto que salvou meu cabelo', desc: 'Emoção + resultado = conversão. Conte uma história real.', hasModal: false },
  { emoji: '🔄', titulo: 'O que mudou quando comecei a usar', desc: 'Transformação ao longo do tempo. Muito poderoso para fidelização.', hasModal: false },
  { emoji: '💧', titulo: 'Dica rápida de uso', desc: 'Tutorial de 30 segundos. Simples, rápido, compartilhável.', hasModal: false },
  { emoji: '🧴', titulo: 'Produto ideal por tipo de cabelo', desc: 'Segmente: cacheado, liso, misto, danificado. Cada uma vai se ver.', hasModal: false },
  { emoji: '❓', titulo: 'Respondendo dúvidas comuns', desc: 'Pegue uma dúvida do público e responda em story. Gera muito salvamento.', hasModal: false },
  { emoji: '🎬', titulo: 'Bastidor usando o produto', desc: 'Câmera ligada enquanto você usa. Autenticidade = conexão = vendas.', hasModal: false },
  { emoji: '📦', titulo: 'Abrindo pedido', desc: 'Unboxing é sempre engajante. Mostre o produto chegando com empolgação.', hasModal: false },
  { emoji: '📅', titulo: 'Produto do dia', desc: 'Um produto diferente a cada dia da quinzena. Funciona como mini-série.', hasModal: false },
];
