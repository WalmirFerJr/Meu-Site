/**
 * Projetos publicados. `demoUrl: null` é honesto: não existe demo pública,
 * e nenhuma ação de demo deve ser renderizada.
 */
export const projects = [
  {
    id: 'Aveta-carteira-de-investimentos',
    featured: true,
    title: {
      pt: 'Simulador de carteira de investimentos',
      en: 'Investment portfolio simulator',
    },
    description: {
      pt: 'Simulador de carteira de investimentos que une meu interesse pelo mercado financeiro e pela tecnologia, a partir da refatoração do TCC do curso técnico de ADS.',
      en: 'An investment portfolio simulator that brings together my interest in financial markets and technology, built from a refactor of my final project for the ADS technical course.',
    },
    tech: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Maven'],
    repo: 'https://github.com/WalmirFerJr/AvetaSoftware2.0',
    repoLabel: {
      pt: 'Ver repositório do simulador',
      en: 'View the simulator repository',
    },
    demoUrl: null,
  },
  {
    id: 'eventos-tech',
    featured: false,
    title: { pt: 'Gerenciador de Eventos Tech', en: 'Tech Events Manager' },
    description: {
      pt: 'API REST em Java e Spring Boot, com PostgreSQL e schema versionado por Flyway. Infraestrutura na AWS com isolamento de rede (VPC), EC2, RDS e S3; ambiente reproduzível com Docker.',
      en: 'REST API in Java and Spring Boot, with PostgreSQL and schema versioning through Flyway. AWS infrastructure with network isolation (VPC), EC2, RDS and S3; reproducible environment with Docker.',
    },
    tech: ['Java', 'Spring Boot', 'AWS', 'Docker', 'PostgreSQL', 'Flyway', 'Maven'],
    repo: 'https://github.com/walmirferjr/eventos-tech',
    repoLabel: {
      pt: 'Ver repositório de Eventos Tech',
      en: 'View the Tech Events repository',
    },
    demoUrl: null,
  },
  {
    id: 'bot-telegram-usp',
    featured: false,
    title: { pt: 'Bot para canal do Telegram da USP', en: 'Telegram bot for a USP channel' },
    description: {
      pt: 'Bot em Python em produção, que atende mais de 500 alunos. Lógicas de agendamento e contagem regressiva para notificações.',
      en: 'A Python bot running in production, serving more than 500 students. Scheduling and countdown logic for notifications.',
    },
    tech: ['Python', 'APIs', 'Linux', 'AWS'],
    repo: 'https://github.com/dasiusp/IntercompBot',
    repoLabel: { pt: 'Ver repositório do bot', en: 'View the bot repository' },
    demoUrl: null,
  },
  /* Registro inativo — não publicar sem pedido do proprietário.
  {
    id: 'triagem-hospitalar',
    title: 'Triagem Hospitalar',
    description:
      'Sistema em C com classificação por prioridade (cores) e tempo de espera. Escalonamento dinâmico e ordenação customizada (qsort). Processamento de CSV com alocação dinâmica de memória, sem vazamentos.',
    tech: ['C', 'Algoritmos de Ordenação', 'CSV'],
    repo: 'https://github.com/WalmirFerJr/Analisador-de-Dados-e-Otimizacao-Combinatoria',
    demoUrl: null,
  }, */
]
