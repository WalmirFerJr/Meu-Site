/**
 * Experiências, mais recente primeiro.
 *
 * Campos traduzíveis usam { pt, en } e são lidos com `pick()` de
 * contexts/LanguageContext. Nomes de empresa, tecnologias e períodos numéricos
 * ficam uma vez só, sem tradução.
 *
 * Os resultados numéricos moram dentro da experiência que os originou. Antes
 * eram três números soltos no topo da seção, o que permitia atribuí-los ao
 * empregador errado.
 */
export const experiences = [
  {
    id: 'itau',
    company: 'Itaú Unibanco S.A.',
    logo: '/images/itau.svg',
    logoBackdrop: 'light',
    kind: 'professional',
    role: {
      pt: 'Estagiário de Engenharia de Dados e IA',
      en: 'Data and AI Engineering Intern',
    },
    area: { pt: 'Câmbio e Digital Assets', en: 'Foreign Exchange and Digital Assets' },
    period: { pt: 'Jul 2026 – Atual', en: 'Jul 2026 – Present' },
    current: true,
    focus: ['Python', 'AWS', 'Data Mesh', 'LLMs', 'AI Agents'],
    points: {
      pt: [
        'Construo pipelines de dados de grande volumetria com AWS Glue (ETL) e Athena sobre datasets particionados em S3, aplicando o modelo de camadas SOR, SOT e SPEC sob princípios de Data Mesh e ownership por domínio.',
        'Aplico técnicas de particionamento para reduzir o dado escaneado por consulta e transformo as bases especializadas que crio em dashboards no AWS QuickSight que sustentam decisões das lideranças.',
        'Desenvolvo soluções de IA aplicadas ao domínio de dados: agentes para automatizar documentação de tabelas, geração e validação de queries SQL e triagem de demandas recorrentes.',
        'Crio automações com práticas de engenharia de software que reduzem o tempo de resposta, mitigam erros humanos nos processos e padronizam o conhecimento técnico do time.',
      ],
      en: [
        'I build high-volume data pipelines with AWS Glue (ETL) and Athena over partitioned datasets in S3, applying the SOR, SOT and SPEC layer model under Data Mesh principles and domain ownership.',
        'I apply partitioning techniques to reduce the data scanned per query, and turn the specialised datasets I create into AWS QuickSight dashboards that support leadership decisions.',
        'I develop AI solutions applied to the data domain: agents to automate table documentation, SQL query generation and validation, and triage of recurring requests.',
        'I create automations using software engineering practices that reduce response time, mitigate human error in processes and standardise the team’s technical knowledge.',
      ],
    },
    // Sem métricas numéricas próprias no registro de origem. Não herdar as do BTG.
    results: [],
    stack: ['AWS Glue', 'Athena', 'S3', 'QuickSight', 'Python', 'SQL'],
  },
  {
    id: 'btg',
    company: 'BTG Pactual S.A.',
    logo: '/images/btg-pactual.png',
    logoBackdrop: 'dark',
    kind: 'professional',
    role: {
      pt: 'Short Job em Engenharia de Software',
      en: 'Software Engineering Short Job',
    },
    area: {
      pt: 'Automação e arquitetura orientada a eventos',
      en: 'Automation and event-driven architecture',
    },
    period: { pt: 'Abr 2026 – Jul 2026', en: 'Apr 2026 – Jul 2026' },
    current: false,
    focus: ['Python', 'JavaScript', 'AWS', 'CI/CD', 'Scrum'],
    points: {
      pt: [
        'Desenvolvi projetos de automação fullstack de ponta a ponta com FastAPI e React integrados a serviços AWS, reduzindo em mais de 50% riscos operacionais em diversos setores do BTG Pactual e do Banco Pan S.A.',
        'Atuei junto aos escritórios do Brasil e de Luxemburgo, alinhando requisitos técnicos entre times distribuídos.',
        'Projetei arquiteturas de sistemas orientados a eventos com AWS Lambda e cronjobs, gerando mais de 64 horas mensais de ganho para diferentes stakeholders.',
        'Criei e manipulei serviços de consulta, armazenamento e banco de dados relacionais e não relacionais (Athena, S3, DynamoDB) visando escalabilidade, sempre com Secrets Manager e padrões de segurança.',
      ],
      en: [
        'I developed end-to-end fullstack automation projects with FastAPI and React integrated with AWS services, reducing operational risks by more than 50% across several areas of BTG Pactual and Banco Pan S.A.',
        'I worked with the Brazil and Luxembourg offices, aligning technical requirements between distributed teams.',
        'I designed event-driven system architectures with AWS Lambda and cronjobs, generating more than 64 hours per month of gains for different stakeholders.',
        'I created and handled query, storage and database services, both relational and non-relational (Athena, S3, DynamoDB), aiming for scalability and always using Secrets Manager and security practices.',
      ],
    },
    results: [
      {
        value: '+50%',
        label: {
          pt: 'de redução de riscos operacionais · BTG Pactual e Banco Pan',
          en: 'reduction in operational risks · BTG Pactual and Banco Pan',
        },
      },
      {
        value: '+64h',
        label: {
          pt: 'por mês de ganho para stakeholders',
          en: 'per month of gains for stakeholders',
        },
      },
    ],
    stack: ['FastAPI', 'React', 'AWS Lambda', 'DynamoDB', 'Athena', 'Secrets Manager'],
  },
  {
    id: 'dasi',
    company: 'Diretório Acadêmico de Sistemas de Informação',
    logo: '/images/usp.jpg',
    logoBackdrop: 'light',
    // A logo é da USP, instituição onde o diretório atua; não é marca do DASI.
    logoInstitution: 'Universidade de São Paulo (USP)',
    kind: 'academic',
    role: { pt: 'Coordenador de TI', en: 'IT Coordinator' },
    area: { pt: 'USP – EACH', en: 'USP – EACH' },
    period: { pt: 'Mar 2025 – Atual', en: 'Mar 2025 – Present' },
    current: true,
    focus: ['Python', 'AWS', 'Java', 'Git'],
    points: {
      pt: [
        'Desenvolvi trilhas de aprendizado Full Stack e a primeira trilha de AWS do meu curso, auxiliando calouros no desenvolvimento de habilidades técnicas complementares à grade acadêmica.',
        'Automatizei eventos impactando mais de 500 alunos da USP através de bots em Python rodando em infraestrutura AWS.',
      ],
      en: [
        'I developed Full Stack learning tracks and the first AWS track of my degree programme, helping first-year students build technical skills that complement the curriculum.',
        'I automated events reaching more than 500 USP students through Python bots running on AWS infrastructure.',
      ],
    },
    results: [
      {
        value: '+500',
        label: {
          pt: 'alunos da USP alcançados pelas automações',
          en: 'USP students reached by the automations',
        },
      },
    ],
    stack: ['Python', 'AWS', 'Java', 'Git'],
  },
]

/**
 * Destaques da seção, derivados das experiências — cada número carrega a origem.
 * Mantido como export para quem quiser um resumo, sem virar número flutuante.
 */
export const experienceHighlights = experiences.flatMap((experience) =>
  experience.results.map((result) => ({
    ...result,
    experienceId: experience.id,
    company: experience.company,
  })),
)
