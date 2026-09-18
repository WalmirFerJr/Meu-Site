/**
 * Atividades extracurriculares: trabalho voluntário e acadêmico, distinto da
 * experiência profissional. As imagens têm proporções diferentes e por isso
 * declaram `aspect` — o cartaz vertical não pode ser cortado em faixa.
 */
export const activities = [
  {
    id: 'projeto-social-usp',
    title: {
      pt: 'Projeto Social USP – Estímulo ao Ensino Superior',
      en: 'USP Social Project – Encouraging Higher Education',
    },
    period: { pt: 'Mar 2025 – Jul 2025', en: 'Mar 2025 – Jul 2025' },
    url: 'https://www.linkedin.com/posts/gabriel-milagres-3bb378327_democratizando-a-informa%C3%A7%C3%A3o-essa-ter%C3%A7a-feira-activity-7331096684992577536-03mh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADq9_9QBF4U23SzjdNP_lOsYOv96Wr739KY',
    urlLabel: {
      pt: 'Ver publicação do Projeto Social USP',
      en: 'View the USP Social Project post',
    },
    // Fotografia (não cartaz): descrição do que a imagem mostra de fato.
    image: '/images/projeto-social-usp.webp',
    imageWidth: 584,
    imageHeight: 699,
    imageAlt: {
      pt: 'Estudantes apresentando para uma plateia sentada em um ginásio escolar, com um slide de boas-vindas projetado ao fundo.',
      en: 'Students presenting to a seated audience in a school gym, with a welcome slide projected behind them.',
    },
    points: {
      pt: [
        'Liderança de grupo em palestras para mais de 300 alunos.',
        'Desenvolvimento de guia digital com mais de 200 downloads.',
        'Análise exploratória de dados de impacto.',
      ],
      en: [
        'Led a group in talks for more than 300 students.',
        'Built a digital guide with more than 200 downloads.',
        'Exploratory analysis of impact data.',
      ],
    },
  },
  {
    id: 'dasi-semana-si',
    title: {
      pt: 'Grupo de Estudos (DASI) e Semana de S.I. (USP)',
      en: 'Study Group (DASI) and Information Systems Week (USP)',
    },
    period: { pt: 'Desde Mar 2025', en: 'Since Mar 2025' },
    url: 'https://semanadesi.com',
    urlLabel: { pt: 'Conhecer a Semana de S.I.', en: 'Visit the Information Systems Week site' },
    image: '/images/semana-si.png',
    imageWidth: 751,
    imageHeight: 421,
    imageAlt: {
      pt: 'Arte de divulgação da Semana de Sistemas de Informação 2025, de 18 a 22 de agosto, com o endereço semanadesi.com.',
      en: 'Promotional artwork for Information Systems Week 2025, 18–22 August, showing the address semanadesi.com.',
    },
    points: {
      pt: [
        'Gestão de pessoas: onboarding, feedback contínuo e eventos para integração de cursos e entidades da USP.',
        'Parcerias: prospecção de 50+ empresas, 5+ workshops técnicos por dia de evento.',
      ],
      en: [
        'People management: onboarding, continuous feedback and events to bring USP courses and student bodies together.',
        'Partnerships: outreach to 50+ companies, 5+ technical workshops per event day.',
      ],
    },
  },
]
