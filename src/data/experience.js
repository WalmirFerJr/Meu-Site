/**
 * Schema: company, role, focus (chips de stack), period, current, points[]
 * Ordem: mais recente primeiro. Copy focada em engenharia de dados e de software.
 */
export const experiences = [
  {
    id: 'itau',
    company: 'Itaú Unibanco S.A.',
    role: 'Estagiário de Engenharia de Dados e IA',
    area: 'Câmbio e Digital Assets',
    period: 'Jul 2026 – Atual',
    current: true,
    focus: ['Python', 'AWS', 'Data Mesh', 'LLMs', 'AI Agents'],
    points: [
      'Construo pipelines de dados de grande volumetria com AWS Glue (ETL) e Athena sobre datasets particionados em S3, aplicando o modelo de camadas SOR, SOT e SPEC sob princípios de Data Mesh e ownership por domínio.',
      'Aplico técnicas de particionamento para reduzir o dado escaneado por consulta e transformo as bases especializadas que crio em dashboards no AWS QuickSight que sustentam decisões das lideranças.',
      'Desenvolvo soluções de IA aplicadas ao domínio de dados: agentes para automatizar documentação de tabelas, geração e validação de queries SQL e triagem de demandas recorrentes.',
      'Crio automações com práticas de engenharia de software que reduzem o tempo de resposta, mitigam erros humanos nos processos e padronizam o conhecimento técnico do time.',
    ],
    stack: ['AWS Glue', 'Athena', 'S3', 'QuickSight', 'Python', 'SQL'],
  },
  {
    id: 'btg',
    company: 'BTG Pactual S.A.',
    role: 'Short Job em Engenharia de Software',
    area: 'Automação e arquitetura orientada a eventos',
    period: 'Abr 2026 – Jul 2026',
    current: false,
    focus: ['Python', 'JavaScript', 'AWS', 'CI/CD', 'Scrum'],
    points: [
      'Desenvolvi projetos de automação fullstack de ponta a ponta com FastAPI e React integrados a serviços AWS, reduzindo em mais de 50% riscos operacionais em diversos setores do BTG Pactual e do Banco Pan S.A.',
      'Atuei junto aos escritórios do Brasil e de Luxemburgo, alinhando requisitos técnicos entre times distribuídos.',
      'Projetei arquiteturas de sistemas orientados a eventos com AWS Lambda e cronjobs, gerando mais de 64 horas mensais de ganho para diferentes stakeholders.',
      'Criei e manipulei bancos relacionais e não relacionais (Athena, S3, DynamoDB) visando escalabilidade, sempre com Secrets Manager e padrões de segurança máxima.',
    ],
    stack: ['FastAPI', 'React', 'AWS Lambda', 'DynamoDB', 'Athena', 'Secrets Manager'],
  },
  {
    id: 'dasi',
    company: 'Diretório Acadêmico de Sistemas de Informação',
    role: 'Coordenador de TI',
    area: 'USP – EACH',
    period: 'Mar 2025 – Atual',
    current: true,
    focus: ['Python', 'AWS', 'Java', 'Git'],
    points: [
      'Desenvolvi trilhas de aprendizado Full Stack e a primeira trilha de AWS do meu curso, auxiliando calouros no desenvolvimento de habilidades técnicas complementares à grade acadêmica.',
      'Automatizei eventos impactando mais de 500 alunos da USP através de bots em Python rodando em infraestrutura AWS.',
    ],
    stack: ['Python', 'AWS', 'Java', 'Git'],
  },
]

/** Números de impacto destacados no topo da seção. */
export const experienceHighlights = [
  { value: '+50%', label: 'redução de riscos operacionais' },
  { value: '+64h', label: 'ganho mensal para stakeholders' },
  { value: '+500', label: 'alunos impactados por automações' },
]
