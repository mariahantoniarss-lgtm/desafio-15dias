export const FRASES_MOTIVACIONAIS_PERMANENTES = [
  "Você não precisa fazer tudo hoje. Precisa cumprir o que cabe a hoje.",
  "A constância transforma pequenos esforços em resultados que começam a aparecer.",
  "Cada vez que você aparece, fica mais fácil ser lembrada.",
  "Seu conteúdo não precisa agradar todo mundo. Precisa ajudar a pessoa certa.",
  "Uma conversa verdadeira pode valer mais do que centenas de visualizações.",
  "Feito com intenção ensina mais do que perfeito e nunca publicado.",
  "Hoje é mais uma oportunidade de ser vista por quem ainda não conhece o seu trabalho.",
  "Você não precisa esperar a confiança chegar. Ela cresce enquanto você pratica.",
  "Uma rotina simples repetida vale mais do que uma semana de excesso e um mês de silêncio.",
  "Quem mostra o processo ajuda outras pessoas a acreditarem no resultado.",
  "Seu jeito de explicar pode ser exatamente o que alguém precisava entender.",
  "Você não está apenas publicando. Está construindo memória.",
  "A venda começa antes da oferta. Ela começa quando alguém percebe que pode confiar em você.",
  "Conteúdo útil aproxima. Conversa verdadeira transforma.",
  "A sua experiência também é conhecimento.",
  "Não subestime um Story. Ele pode iniciar a conversa que você ainda não teve.",
  "Falar de um produto com honestidade é mostrar uma solução possível.",
  "Hoje, escolha clareza em vez de perfeição.",
  "Pessoas compram de quem elas reconhecem, entendem e confiam.",
  "Você não precisa viralizar para influenciar uma decisão.",
  "O crescimento pode parecer silencioso antes de se tornar visível.",
  "Sua constância de hoje prepara a oportunidade de amanhã.",
  "Toda vez que você aparece, fica um pouco mais fácil aparecer novamente.",
  "Mostre o que você sabe, o que vive e o que realmente recomenda.",
  "Uma dúvida respondida pode virar confiança. E confiança pode virar venda.",
  "Não publique apenas para cumprir. Publique para criar uma ponte.",
  "Seja a pessoa que ajuda antes de tentar convencer.",
  "Sua audiência precisa conhecer você antes de lembrar da sua indicação.",
  "Resultados consistentes nascem de ações pequenas que não dependem de motivação.",
  "O melhor conteúdo é aquele que você consegue publicar, sustentar e repetir.",
  "Olhe para o que você já fez antes de pensar apenas no que ainda falta.",
  "Um produto se transforma em indicação quando você mostra onde ele entra na vida real.",
  "É a pessoa por trás do perfil que faz a audiência criar conexão.",
  "Cada resposta da sua audiência pode se transformar em uma nova ideia de conteúdo.",
  "Quando faltar motivação, use a rotina para continuar.",
  "Mostrar a sua rotina não diminui sua autoridade. Torna sua indicação mais real.",
  "A constância faz com que a ação comercial pareça uma continuação natural da conversa.",
  "O conteúdo abre a porta. A conversa ajuda a pessoa a tomar uma decisão.",
  "Você não precisa ter uma ideia inédita todos os dias. Precisa comunicar bem o que já sabe.",
  "Hoje alguém pode descobrir o seu perfil, reconhecer uma necessidade e encontrar ajuda no que você compartilhou."
];

// Gerador congruencial linear (LCG) simples
// Usado para garantir determinismo no embaralhamento das frases com base no ano e mês.
function lcg(seed) {
  return function() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

/**
 * Função para gerar um array embaralhado de frases deterministicamente,
 * baseado no ano e no mês.
 */
function getFrasesEmbaralhadas(ano, mes) {
  // A semente (seed) é baseada na combinação de ano e mês
  const seed = ano * 100 + mes;
  const rng = lcg(seed);
  
  // Criar cópia para não mutar o array original
  const frases = [...FRASES_MOTIVACIONAIS_PERMANENTES];
  
  // Algoritmo de Fisher-Yates usando o RNG determinístico
  for (let i = frases.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [frases[i], frases[j]] = [frases[j], frases[i]];
  }
  
  return frases;
}

/**
 * Função principal para obter a frase do dia.
 * Retorna uma frase baseada na data atual no fuso America/Sao_Paulo.
 */
export function getFraseDoDia() {
  // Pegar data atual e converter para fuso de SP
  const dateStr = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
  const hoje = new Date(dateStr);
  
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth() + 1; // 1 a 12
  const dia = hoje.getDate(); // 1 a 31
  
  // Obtém o array já embaralhado (a mesma ordem para todo o mês)
  const frasesEmbaralhadas = getFrasesEmbaralhadas(ano, mes);
  
  // Usamos (dia - 1) porque os arrays são indexados em 0
  // O módulo previne algum erro bizarro se o dia for > 40 (o que não acontece)
  const index = (dia - 1) % frasesEmbaralhadas.length;
  
  return frasesEmbaralhadas[index];
}

/**
 * Função para obter a frase de um dia específico (1 a 31) do mês atual
 */
export function getFrasePorDia(dia) {
  const dateStr = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
  const hoje = new Date(dateStr);
  
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth() + 1;
  
  const frasesEmbaralhadas = getFrasesEmbaralhadas(ano, mes);
  const index = (dia - 1) % frasesEmbaralhadas.length;
  
  return frasesEmbaralhadas[index];
}

/**
 * Funções auxiliares para informações sobre o mês atual (fuso SP)
 */
export function getDadosMesAtual() {
  const dateStr = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
  const hoje = new Date(dateStr);
  
  const ano = hoje.getFullYear();
  const mesIdx = hoje.getMonth(); // 0 a 11
  
  // Nomes dos meses em português
  const nomesMeses = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", 
    "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
  ];
  
  const mesNome = nomesMeses[mesIdx];
  const totalDias = new Date(ano, mesIdx + 1, 0).getDate();
  const diaAtual = hoje.getDate();
  
  return {
    mesNome,
    ano,
    totalDias,
    diaAtual,
    // Formato final "AGOSTO DE 2026"
    textoMesAno: `${mesNome} DE ${ano}`
  };
}
