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
    emoji: '✨', titulo: 'Fashion Gold Progressiva',
    desc: 'Como falar da progressiva sem formol que controla o volume e o frizz.',
    hasModal: true,
    modalContent: {
      emoji: '✨',
      titulo: 'Fashion Gold Progressiva',
      tag: 'Roteiro de Stories — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nÉ a progressiva da Ybera que reduz o volume, controla o frizz e promove alinhamento dos fios sem formol.' },
        { type: 'text', content: '**Benefícios:**\n✨ Reduz volume. ✨ Controla frizz. ✨ Deixa os fios alinhados. ✨ Mais brilho e maciez.' },
        { type: 'story', label: 'Story 1', content: '"Vocês sabiam que hoje existem progressivas que alinham os fios sem agredir tanto o cabelo? A Fashion Gold da Ybera ajuda a reduzir o volume e controlar o frizz, deixando o cabelo muito mais alinhado."' },
        { type: 'story', label: 'Story 2', content: '"E o melhor é que, com os cuidados certos em casa, o efeito dura muito mais tempo e o cabelo continua bonito e saudável."' }
      ]
    }
  },
  {
    emoji: '🗓️', titulo: 'Kit Cronograma Capilar',
    desc: 'Roteiro detalhado para Hidratação, Nutrição e Reconstrução.',
    hasModal: true,
    modalContent: {
      emoji: '🗓️',
      titulo: 'Kit Cronograma Capilar',
      tag: 'Guia Completo — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nTrio de máscaras para hidratação, nutrição e reconstrução.' },
        { type: 'text', content: '**Benefícios:**\n✨ Tratamento completo. ✨ Recupera danos. ✨ Dá brilho. ✨ Fortalece.' },
        { type: 'text', content: '---' },
        { type: 'text', content: '**💧 ETAPA 1 — HIDRATAÇÃO**\n\n**O que é?** A hidratação devolve água aos fios.' },
        { type: 'text', content: '**Benefícios:** ✨ Devolve maciez. ✨ Recupera brilho. ✨ Reduz ressecamento. ✨ Cabelo solto.' },
        { type: 'story', label: 'Hidratação - Story 1', content: '"Você sabia que um cabelo opaco e sem movimento pode estar precisando de hidratação? Essa etapa serve para devolver água aos fios."' },
        { type: 'story', label: 'Hidratação - Story 2', content: '"Quando o cabelo fica áspero, embaraçando muito e sem brilho, geralmente ele está pedindo hidratação."' },
        { type: 'dica', content: '💬 Pergunta: Seu cabelo está mais ressecado ultimamente? (Sim / Um pouco / Não)' },
        { type: 'text', content: '---' },
        { type: 'text', content: '**🥥 ETAPA 2 — NUTRIÇÃO**\n\n**O que é?** Repõe os óleos naturais perdidos no dia a dia.' },
        { type: 'text', content: '**Benefícios:** ✨ Controla frizz. ✨ Dá brilho. ✨ Alinha fios. ✨ Recupera pontas.' },
        { type: 'story', label: 'Nutrição - Story 1', content: '"A nutrição devolve os óleos naturais que deixam o cabelo bonito e alinhado."' },
        { type: 'story', label: 'Nutrição - Story 2', content: '"Se o seu cabelo está com muito frizz e pontas ressecadas, provavelmente ele está precisando dessa etapa."' },
        { type: 'dica', content: '💬 Pergunta: O frizz te incomoda? (Muito / Um pouco / Quase nada)' },
        { type: 'text', content: '---' },
        { type: 'text', content: '**🧬 ETAPA 3 — RECONSTRUÇÃO**\n\n**O que é?** Devolve proteínas e massa capilar aos fios.' },
        { type: 'text', content: '**Benefícios:** ✨ Fortalece. ✨ Reduz quebra. ✨ Recupera química. ✨ Resistência.' },
        { type: 'story', label: 'Reconstrução - Story 1', content: '"Quando o cabelo está quebrando muito ou passou por química, ele pode precisar de reconstrução."' },
        { type: 'story', label: 'Reconstrução - Story 2', content: '"A reconstrução ajuda a devolver força aos fios, reduzindo a quebra."' },
        { type: 'dica', content: '💬 Pergunta: Seu cabelo quebra com facilidade? (Sim / Às vezes / Não)' },
        { type: 'text', content: '---' },
        { type: 'text', content: '**⭐ BÔNUS: Story Coringa**\n"Você sabe identificar o que seu cabelo precisa hoje?"\n💧 Ressecado → Hidratação\n🥥 Com frizz → Nutrição\n🧬 Quebrando → Reconstrução' }
      ]
    }
  },
  {
    emoji: '🧴', titulo: 'Shampoo Protect Control',
    desc: 'O segredo para prolongar o efeito da sua progressiva.',
    hasModal: true,
    modalContent: {
      emoji: '🧴',
      titulo: 'Shampoo Protect Control',
      tag: 'Pós-Química — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nShampoo desenvolvido para prolongar o efeito da progressiva.' },
        { type: 'text', content: '**Benefícios:**\n✨ Limpeza suave. ✨ Mantém o liso. ✨ Evita desgaste da química. ✨ Controla o frizz.' },
        { type: 'story', label: 'Story 1', content: '"Se você faz progressiva, sabia que o shampoo faz diferença na duração do resultado? O Protect Control limpa sem retirar a proteção dos fios."' },
        { type: 'story', label: 'Story 2', content: '"Isso ajuda a manter o cabelo alinhado, bonito e prolonga o efeito da química por muito mais tempo."' }
      ]
    }
  },
  {
    emoji: '🧖‍♀', titulo: 'Máscara Resistência Liso Perfeito',
    desc: 'Nutrição e hidratação para manter o liso impecável.',
    hasModal: true,
    modalContent: {
      emoji: '🧖‍♀',
      titulo: 'Máscara Resistência Liso Perfeito',
      tag: 'Manutenção — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nMáscara de tratamento para manter cabelos lisos hidratados e nutridos.' },
        { type: 'text', content: '**Benefícios:**\n✨ Hidrata. ✨ Nutre. ✨ Reduz frizz. ✨ Deixa os fios alinhados.' },
        { type: 'story', label: 'Story 1', content: '"Muita gente acha que quem faz progressiva não precisa tratar o cabelo. Pelo contrário! Essa máscara ajuda a manter o liso bonito."' },
        { type: 'story', label: 'Story 2', content: '"Ela hidrata, nutre e deixa aquele efeito soltinho e brilhante que todo mundo gosta."' }
      ]
    }
  },
  {
    emoji: '🫧', titulo: 'Protect Poo',
    desc: 'Proteja suas pontas durante a lavagem com o pré-shampoo.',
    hasModal: true,
    modalContent: {
      emoji: '🫧',
      titulo: 'Protect Poo',
      tag: 'Pré-Lavagem — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nPré-shampoo que protege os fios durante a lavagem.' },
        { type: 'text', content: '**Benefícios:**\n✨ Protege as pontas. ✨ Evita ressecamento. ✨ Reduz quebra. ✨ Mantém maciez.' },
        { type: 'story', label: 'Story 1', content: '"Você já ouviu falar em pré-shampoo? Ele protege o cabelo antes da lavagem e evita aquele ressecamento das pontas."' },
        { type: 'story', label: 'Story 2', content: '"É um cuidado simples que faz muita diferença para quem tem cabelo seco ou com química."' }
      ]
    }
  },
  {
    emoji: '💨', titulo: 'Spray C360 Universal',
    desc: 'Proteção térmica e brilho multifuncional para seus fios.',
    hasModal: true,
    modalContent: {
      emoji: '💨',
      titulo: 'Spray C360 Universal',
      tag: 'Finalizador — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nProtetor térmico multifuncional.' },
        { type: 'text', content: '**Benefícios:**\n✨ Proteção térmica. ✨ Controle do frizz. ✨ Brilho. ✨ Facilita escova.' },
        { type: 'story', label: 'Story 1', content: '"Se você usa secador ou chapinha, precisa usar protetor térmico. O C360 ajuda a proteger os fios do calor."' },
        { type: 'story', label: 'Story 2', content: '"Além disso, controla o frizz e deixa o cabelo muito mais brilhoso."' }
      ]
    }
  },
  {
    emoji: '👱‍♀', titulo: 'Linha Loiro Perfeito',
    desc: 'Neutralização e tratamento para o tom loiro ideal.',
    hasModal: true,
    modalContent: {
      emoji: '👱‍♀',
      titulo: 'Linha Loiro Perfeito',
      tag: 'Cabelos Loiros — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha desenvolvida para cabelos loiros e descoloridos.' },
        { type: 'text', content: '**Benefícios:**\n✨ Matiza. ✨ Neutraliza amarelado. ✨ Hidrata. ✨ Reconstrói.' },
        { type: 'story', label: 'Story 1', content: '"Quem é loira sabe como o cabelo pode amarelar com facilidade. A Linha Loiro Perfeito ajuda a manter aquele tom bonito."' },
        { type: 'story', label: 'Story 2', content: '"Além de matizar, ela trata os fios e ajuda a recuperar os danos da descoloração."' }
      ]
    }
  },
  {
    emoji: '👩‍🦱', titulo: 'Linha Cacho Perfeito',
    desc: 'Definição e movimento para seus cachos.',
    hasModal: true,
    modalContent: {
      emoji: '👩‍🦱',
      titulo: 'Linha Cacho Perfeito',
      tag: 'Cabelos Cacheados — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha criada especialmente para cabelos cacheados e crespos.' },
        { type: 'text', content: '**Benefícios:**\n✨ Define cachos. ✨ Controla frizz. ✨ Nutre. ✨ Dá maciez.' },
        { type: 'story', label: 'Story 1', content: '"Cabelo cacheado precisa de cuidados específicos. A Linha Cacho Perfeito ajuda na definição e controla o frizz."' },
        { type: 'story', label: 'Story 2', content: '"O resultado são cachos mais bonitos, hidratados e com muito movimento."' }
      ]
    }
  },
  {
    emoji: '📏', titulo: 'Linha 100Tímetros',
    desc: 'Fortalecimento e estímulo para o crescimento saudável.',
    hasModal: true,
    modalContent: {
      emoji: '📏',
      titulo: 'Linha 100Tímetros',
      tag: 'Crescimento — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha focada em fortalecimento, crescimento saudável e redução da queda.' },
        { type: 'text', content: '**Benefícios:**\n✨ Fortalece. ✨ Estimula crescimento. ✨ Reduz queda. ✨ Cuida do couro cabeludo.' },
        { type: 'story', label: 'Story 1', content: '"Uma dúvida que recebo muito é sobre crescimento capilar. A Linha 100Tímetros foi desenvolvida para fortalecer os fios."' },
        { type: 'story', label: 'Story 2', content: '"Ela trabalha desde o couro cabeludo até o comprimento, ajudando quem quer cabelos mais fortes e compridos."' }
      ]
    }
  },
  {
    emoji: '🌿', titulo: 'Óleo de Mirra',
    desc: 'O óleo reparador coringa para cabelo e pele.',
    hasModal: true,
    modalContent: {
      emoji: '🌿',
      titulo: 'Óleo de Mirra',
      tag: 'Multifuncional — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nÓleo reparador multifuncional.' },
        { type: 'text', content: '**Benefícios:**\n✨ Brilho. ✨ Controle do frizz. ✨ Recupera pontas. ✨ Pode ser usado na pele.' },
        { type: 'story', label: 'Story 1', content: '"Esse é um daqueles produtos coringa. O Óleo de Mirra ajuda muito no brilho, no frizz e nas pontinhas ressecadas."' },
        { type: 'story', label: 'Story 2', content: '"E ainda pode ser usado na pele, trazendo hidratação e aquele toque macio."' }
      ]
    }
  },
  {
    emoji: '💎', titulo: 'Mirra Duocare',
    desc: 'Tratamento de reconstrução e elasticidade para danos.',
    hasModal: true,
    modalContent: {
      emoji: '💎',
      titulo: 'Mirra Duocare',
      tag: 'Reconstrução — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nTratamento multifuncional para cabelos danificados.' },
        { type: 'text', content: '**Benefícios:**\n✨ Reconstrói. ✨ Fortalece. ✨ Devolve elasticidade. ✨ Reduz quebra.' },
        { type: 'story', label: 'Story 1', content: '"Quando o cabelo está muito danificado, só hidratar não resolve. O Mirra Duocare ajuda a recuperar a estrutura dos fios."' },
        { type: 'story', label: 'Story 2', content: '"Ele fortalece e devolve a elasticidade, deixando o cabelo muito mais resistente."' }
      ]
    }
  },
  {
    emoji: '🩹', titulo: 'Kit Mirracura',
    desc: 'Tratamento intensivo de choque para cabelos fragilizados.',
    hasModal: true,
    modalContent: {
      emoji: '🩹',
      titulo: 'Kit Mirracura',
      tag: 'S.O.S Capilar — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nTratamento intensivo para cabelos extremamente danificados.' },
        { type: 'text', content: '**Benefícios:**\n✨ Recupera. ✨ Reconstrói. ✨ Reduz quebra. ✨ Devolve força.' },
        { type: 'story', label: 'Story 1', content: '"Tem cabelo que passou por muita química e precisa de um tratamento mais intenso. O Mirracura foi pensado justamente para isso."' },
        { type: 'story', label: 'Story 2', content: '"Ele ajuda a recuperar a saúde dos fios e devolver força e resistência."' }
      ]
    }
  },
  {
    emoji: '🌱', titulo: 'Linha Vello',
    desc: 'Combata o afinamento e estimule a raiz do seu cabelo.',
    hasModal: true,
    modalContent: {
      emoji: '🌱',
      titulo: 'Linha Vello',
      tag: 'Terapia Capilar — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha para fortalecimento e combate ao afinamento capilar.' },
        { type: 'text', content: '**Benefícios:**\n✨ Estimula crescimento. ✨ Fortalece raiz. ✨ Combate queda. ✨ Couro cabeludo.' },
        { type: 'story', label: 'Story 1', content: '"Quando a preocupação é queda e afinamento, cuidar do couro cabeludo faz toda diferença. A Linha Vello foi desenvolvida para isso."' },
        { type: 'story', label: 'Story 2', content: '"Ela ajuda a fortalecer a raiz e estimular o crescimento saudável dos fios."' }
      ]
    }
  },
  {
    emoji: '🧬', titulo: 'Linha Genoma',
    desc: 'Transfusão de massa e reconstrução molecular profunda.',
    hasModal: true,
    modalContent: {
      emoji: '🧬',
      titulo: 'Linha Genoma',
      tag: 'Alta Tecnologia — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nReconstrução molecular para cabelos muito danificados.' },
        { type: 'text', content: '**Benefícios:**\n✨ Repõe massa. ✨ Reconstrói. ✨ Fortalece. ✨ Recupera elasticidade.' },
        { type: 'story', label: 'Story 1', content: '"Já ouviu falar em reconstrução molecular? A Linha Genoma foi criada para recuperar cabelos muito danificados."' },
        { type: 'story', label: 'Story 2', content: '"Ela ajuda a devolver força, resistência e reconstruir a fibra capilar."' }
      ]
    }
  },
  {
    emoji: '🔬', titulo: 'Discovery Stemcell',
    desc: 'Manutenção premium para alisamentos biológicos.',
    hasModal: true,
    modalContent: {
      emoji: '🔬',
      titulo: 'Discovery Stemcell',
      tag: 'Manutenção Selante — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha de manutenção do alisamento biológico.' },
        { type: 'text', content: '**Benefícios:**\n✨ Mantém alinhamento. ✨ Dá brilho. ✨ Reduz frizz. ✨ Hidrata.' },
        { type: 'story', label: 'Story 1', content: '"A manutenção faz toda diferença no resultado do cabelo. A Discovery ajuda a manter os fios alinhados e brilhantes."' },
        { type: 'story', label: 'Story 2', content: '"É aquele cuidado que prolonga o efeito bonito do cabelo tratado."' }
      ]
    }
  },
  {
    emoji: '💉', titulo: 'Linha Botulínica Capilar',
    desc: 'Preenchimento e recuperação do bptox capilar para fios finos.',
    hasModal: true,
    modalContent: {
      emoji: '💉',
      titulo: 'Linha Botulínica Capilar',
      tag: 'Preenchimento — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nTratamento para preencher e recuperar fios envelhecidos.' },
        { type: 'text', content: '**Benefícios:**\n✨ Preenche falhas. ✨ Reduz porosidade. ✨ Fortalece. ✨ Dá espessura.' },
        { type: 'story', label: 'Story 1', content: '"Você sente seu cabelo fino e sem vida? A Linha Botulínica ajuda a preencher a fibra capilar."' },
        { type: 'story', label: 'Story 2', content: '"O resultado é um cabelo mais encorpado, forte e com aspecto saudável."' }
      ]
    }
  },
  {
    emoji: '👩🏾‍🦱', titulo: 'Black Diva',
    desc: 'Nutrição profunda e valorização da curvatura crespa.',
    hasModal: true,
    modalContent: {
      emoji: '👩🏾‍🦱',
      titulo: 'Black Diva',
      tag: 'Cabelos Crespos — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha desenvolvida para cabelos crespos e afros.' },
        { type: 'text', content: '**Benefícios:**\n✨ Nutre profundamente. ✨ Controla frizz. ✨ Dá maciez. ✨ Valoriza a curvatura.' },
        { type: 'story', label: 'Story 1', content: '"Cabelos crespos e afros têm necessidades específicas. A Black Diva foi criada pensando nesse cuidado especial."' },
        { type: 'story', label: 'Story 2', content: '"Ela promove muita nutrição e ajuda a manter os fios saudáveis e definidos."' }
      ]
    }
  },
  {
    emoji: ' Coconut', titulo: 'Terra Coco',
    desc: 'O poder nutritivo do coco para o brilho e maciez.',
    hasModal: true,
    modalContent: {
      emoji: '🥥',
      titulo: 'Terra Coco',
      tag: 'Nutrição Natural — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha de nutrição intensa à base de coco.' },
        { type: 'text', content: '**Benefícios:**\n✨ Nutre. ✨ Hidrata. ✨ Dá brilho. ✨ Controla frizz.' },
        { type: 'story', label: 'Story 1', content: '"Se o cabelo está seco e sem brilho, a Linha Terra Coco pode ser uma ótima aliada."' },
        { type: 'story', label: 'Story 2', content: '"Ela ajuda a nutrir profundamente e devolver maciez aos fios."' }
      ]
    }
  },
  {
    emoji: '🌸', titulo: 'Essência Brasileira',
    desc: 'O melhor da biodiversidade para cuidar do seu cabelo.',
    hasModal: true,
    modalContent: {
      emoji: '🌸',
      titulo: 'Essência Brasileira',
      tag: 'Brasilidade — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha inspirada nos ativos naturais brasileiros.' },
        { type: 'text', content: '**Benefícios:**\n✨ Diferentes necessidades. ✨ Nutre. ✨ Equilibra. ✨ Fortalece.' },
        { type: 'story', label: 'Story 1', content: '"A natureza brasileira é rica em ativos incríveis, e essa linha aproveita esses benefícios para cuidar dos cabelos."' },
        { type: 'story', label: 'Story 2', content: '"Existem opções para diferentes necessidades, desde oleosidade até fios quebradiços."' }
      ]
    }
  },
  {
    emoji: '🧴', titulo: 'Leave-in Universal',
    desc: 'O finalizador que facilita sua rotina de cuidados diários.',
    hasModal: true,
    modalContent: {
      emoji: '🧴',
      titulo: 'Leave-in Universal',
      tag: 'Finalização — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nFinalizador para todos os tipos de cabelo.' },
        { type: 'text', content: '**Benefícios:**\n✨ Proteção térmica. ✨ Facilita pentear. ✨ Controla frizz. ✨ Dá brilho.' },
        { type: 'story', label: 'Story 1', content: '"O leave-in é aquele produto que facilita muito a rotina de cuidados. Ele ajuda a desembaraçar e proteger os fios."' },
        { type: 'story', label: 'Story 2', content: '"E ainda oferece proteção térmica para quem usa secador ou chapinha."' }
      ]
    }
  },
  {
    emoji: '🔥', titulo: 'Kerafive 22',
    desc: 'Sela as cutículas e protege do calor das ferramentas térmicas.',
    hasModal: true,
    modalContent: {
      emoji: '🔥',
      titulo: 'Kerafive 22',
      tag: 'Proteção Máxima — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nSelante capilar com ação termoativada.' },
        { type: 'text', content: '**Benefícios:**\n✨ Sela cutículas. ✨ Protege do calor. ✨ Reduz frizz. ✨ Dá brilho.' },
        { type: 'story', label: 'Story 1', content: '"Para quem gosta de escova, a proteção dos fios é fundamental. O Kerafive ajuda nessa blindagem."' },
        { type: 'story', label: 'Story 2', content: '"Ele sela as cutículas e deixa o cabelo muito mais alinhado e brilhante."' }
      ]
    }
  },
  {
    emoji: '👶', titulo: 'Fashion Kids',
    desc: 'Cuidado suave e perfumado para os fios dos pequenos.',
    hasModal: true,
    modalContent: {
      emoji: '👶',
      titulo: 'Fashion Kids',
      tag: 'Kids — Ybera Paris',
      body: [
        { type: 'text', content: '**O que é?**\nLinha infantil para cuidados diários dos cabelos das crianças.' },
        { type: 'text', content: '**Benefícios:**\n✨ Limpeza suave. ✨ Desembaraça. ✨ Nutre. ✨ Controla frizz.' },
        { type: 'story', label: 'Story 1', content: '"As crianças também merecem produtos desenvolvidos especialmente para elas. A Fashion Kids limpa e cuida com suavidade."' },
        { type: 'story', label: 'Story 2', content: '"Além disso, ajuda a desembaraçar e deixar o cabelo macio e cheiroso."' }
      ]
    }
  },
  { emoji: '🌸', titulo: 'Produto favorito da semana', desc: 'Compartilhe com autenticidade o que você mais amou usar.', hasModal: false },
  { emoji: '🔁', titulo: 'Produto que compraria de novo', desc: 'Prova social real: você compraria de novo? Diga por quê.', hasModal: false },
  { emoji: '✨', titulo: 'Antes e depois', desc: 'Resultado visual é o conteúdo mais poderoso. Mostre a transformação.', hasModal: false },
  { emoji: '🪞', titulo: 'Minha rotina capilar', desc: 'Stories da sua rotina com os produtos da Ybera no processo.', hasModal: false },
  { emoji: '💪', titulo: 'Produto que salvou meu cabelo', desc: 'Emoção + resultado = conversão. Conte uma história real.', hasModal: false },
  { emoji: '🔄', titulo: 'O que mudou quando comecei a usar', desc: 'Transformação ao longo do tempo. Muito poderoso para fidelização.', hasModal: false },
  { emoji: '🎬', titulo: 'Bastidor usando o produto', desc: 'Câmera ligada enquanto você usa. Autenticidade = conexão = vendas.', hasModal: false },
];
