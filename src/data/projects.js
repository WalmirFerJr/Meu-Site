/**
 * Schema: title, description (string), tech[], repo, demoUrl? (opcional)
 * Decisões técnicas em copy para posicionamento backend/arquitetura.
 */
export const projects = [
  {
    id: 'Aveta-carteira-de-investimentos',
    title: 'Simulador de carteira de investimentos',
    description:
      'Projeto desenvolvido a partir do meu grande interesse no mercado financeiro unido com a tecnologia e com a inspiração de refator meu TCC do curso técnico de ADS.',
    tech: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Maven'],
    repo: 'https://github.com/WalmirFerJr/AvetaSoftware2.0',
    demoUrl: null,
  },
  {
    id: 'eventos-tech',
    title: 'Gerenciador de Eventos Tech',
    description:
      'API REST em Java + Spring Boot + Maven e banco de dados em PostgreSQL, schema via Flyway e deploy com isolamento de rede (VPC), EC2, RDS e S3; containerização com Docker para ambiente reproduzível.',
    tech: ['Java', 'Spring Boot', 'AWS', 'Docker', 'PostgreSQL', 'Flyway', 'Maven'],
    repo: 'https://github.com/walmirferjr/eventos-tech',
    demoUrl: null,
  },
  {
    id: 'bot-telegram-usp',
    title: 'Bot para canal do Telegram da USP',
    description:
      'Bot em Python em produção, que atende mais de 500 alunos. Lógicas de agendamento e contagem regressiva para notificações.',
    tech: ['Python', 'APIs', 'Linux', 'AWS'],
    repo: 'https://github.com/dasiusp/IntercompBot',
    demoUrl: null,
  },
  {
    id: 'triagem-hospitalar',
    title: 'Triagem Hospitalar',
    description:
      'Sistema em C com classificação por prioridade (cores) e tempo de espera. Escalonamento dinâmico e ordenação customizada (qsort). Processamento de CSV com alocação dinâmica de memória, sem vazamentos.',
    tech: ['C', 'Algoritmos de Ordenação', 'CSV'],
    repo: 'https://github.com/WalmirFerJr/Analisador-de-Dados-e-Otimizacao-Combinatoria',
    demoUrl: null,
  },
]
