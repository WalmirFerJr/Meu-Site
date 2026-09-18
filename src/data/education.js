export const educationItems = [
  {
    id: 'usp',
    // "Bacharelado — em andamento": o registro tem previsão 2028 e 4º semestre.
    title: {
      pt: 'Bacharelado em Sistemas de Informação — em andamento',
      en: 'Bachelor of Information Systems — in progress',
    },
    institution: 'Universidade de São Paulo (USP)',
    logo: '/images/usp.jpg',
    logoBackdrop: 'light',
    institutionUrl:
      'https://jornal.usp.br/institucional/usp-e-a-melhor-universidade-brasileira-no-ranking-qs-latin-america/',
    // O link é uma notícia institucional, não comprovante de matrícula nem ranking atual.
    institutionUrlLabel: {
      pt: 'Notícia institucional da USP',
      en: 'USP institutional news article',
    },
    period: { pt: 'Previsão de conclusão: 2028', en: 'Expected completion: 2028' },
    detail: { pt: '4º semestre', en: '4th semester' },
  },
  {
    id: 'etec',
    title: {
      pt: 'Análise e Desenvolvimento de Sistemas',
      en: 'Systems Analysis and Development',
    },
    institution: 'Etec',
    /* O logo oficial não pode ser usado por ex-alunos sem autorização prévia do
       Centro Paula Souza; até lá, a entrada usa uma marca tipográfica. */
    mark: 'Etec',
    institutionUrl: 'https://www.cps.sp.gov.br/cursos-etec/desenvolvimento-de-sistemas/',
    institutionUrlLabel: { pt: 'Página do curso na Etec', en: 'Course page at Etec' },
    period: { pt: '2019 – 2022', en: '2019 – 2022' },
    detail: { pt: 'Curso técnico', en: 'Technical course' },
  },
]
