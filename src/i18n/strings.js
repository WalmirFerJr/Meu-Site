/**
 * Textos de interface nos dois idiomas.
 *
 * A tradução é fiel: nenhum número, período, qualificador ou atribuição muda na
 * passagem. "em formação" vira "in training", nunca "senior"; "estagiário" vira
 * "intern", nunca "engineer".
 */
export const strings = {
  pt: {
    nav: {
      label: 'Navegação principal',
      allSections: 'Todas as seções',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      menu: 'Menu',
      skipToContent: 'Pular para o conteúdo',
      footerNav: 'Links do rodapé',
      home: 'Ir para o início',
    },
    actions: {
      resume: 'Baixar currículo',
      resumeLong: 'Baixar currículo em PDF',
      resumeShort: 'Currículo',
      seeExperience: 'Ver experiência',
      contact: 'Entrar em contato',
      theme: { toLight: 'Ativar modo claro', toDark: 'Ativar modo escuro' },
      language: { toEn: 'View in English', toPt: 'Ver em português', codeEn: 'EN', codePt: 'PT' },
      repository: 'Ver repositório',
      credential: 'Ver credencial',
      institutionLink: 'Notícia institucional da USP',
    },
    hero: {
      eyebrow: 'Engenharia de software e de dados',
      name: 'Walmir Fernandes Junior',
      tagline: 'Engenharia de software e de dados em formação.',
      intro:
        'Sou graduando em Sistemas de Informação na USP. Construo sistemas backend escaláveis e pipelines de grande volumetria na AWS, com atuação em IA aplicada.',
      specialtiesLabel: 'Frentes de atuação',
      specialties: ['Engenharia de Software', 'Engenharia de Dados', 'AWS & Cloud', 'IA Aplicada'],
      location: 'São Paulo, Brasil',
      trackLabel: 'Trajetória profissional e acadêmica',
      photoAlt: 'Walmir Fernandes Junior',
    },
    about: {
      eyebrow: 'Trajetória e foco',
      title: 'Sobre mim',
      interestsTitle: 'O que estudo a fundo',
    },
    experience: {
      eyebrow: 'Engenharia de software, automação e dados em produção',
      title: 'Experiência',
      current: 'Atual',
      resultsLabel: 'Resultados',
      stackLabel: 'Tecnologias',
      academic: 'Atuação acadêmica',
    },
    projects: {
      eyebrow: 'Propósito e decisões técnicas',
      title: 'Projetos',
      techLabel: 'Tecnologias',
      noDemo: 'Sem demo pública; código aberto no repositório.',
    },
    education: {
      eyebrow: 'Base acadêmica',
      title: 'Formação',
    },
    skills: {
      eyebrow: 'Tecnologias e ferramentas com as quais trabalho',
      title: 'Habilidades',
      languagesTitle: 'Idiomas',
    },
    activities: {
      eyebrow: 'Comunidade e organização de eventos',
      title: 'Atividades extracurriculares',
      volunteerNote: 'Atuação voluntária e acadêmica, distinta da experiência profissional.',
    },
    certifications: {
      eyebrow: 'Cursos concluídos com credencial',
      title: 'Certificados',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar?',
      lede: 'Oportunidade de estágio ou projeto? Adoraria conversar.',
      location: 'São Paulo, Brasil',
    },
    footer: {
      rights: 'Walmir Fernandes Junior',
      stack: 'React, Vite e Tailwind CSS.',
      focus: 'Feito com foco em performance e experiência de uso.',
      trademarks:
        'Marcas e logotipos pertencem aos respectivos titulares e são exibidos apenas para identificar vínculos acadêmicos e profissionais. O uso não implica patrocínio ou endosso.',
    },
    misc: {
      opensInNewTab: 'abre em nova aba',
      imageUnavailable: 'Imagem indisponível',
      readingProgress: 'Progresso de leitura',
    },
  },

  en: {
    nav: {
      label: 'Main navigation',
      allSections: 'All sections',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      menu: 'Menu',
      skipToContent: 'Skip to content',
      footerNav: 'Footer links',
      home: 'Back to top',
    },
    actions: {
      resume: 'Download résumé',
      resumeLong: 'Download résumé (PDF)',
      resumeShort: 'Résumé',
      seeExperience: 'See experience',
      contact: 'Get in touch',
      theme: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
      language: { toEn: 'View in English', toPt: 'Ver em português', codeEn: 'EN', codePt: 'PT' },
      repository: 'View repository',
      credential: 'View credential',
      institutionLink: 'USP institutional news article',
    },
    hero: {
      eyebrow: 'Software and data engineering',
      name: 'Walmir Fernandes Junior',
      tagline: 'Software and data engineering in training.',
      intro:
        'I am an Information Systems undergraduate at USP. I build scalable backend systems and high-volume data pipelines on AWS, working with applied AI.',
      specialtiesLabel: 'Areas of work',
      specialties: ['Software Engineering', 'Data Engineering', 'AWS & Cloud', 'Applied AI'],
      location: 'São Paulo, Brazil',
      trackLabel: 'Professional and academic background',
      photoAlt: 'Walmir Fernandes Junior',
    },
    about: {
      eyebrow: 'Background and focus',
      title: 'About me',
      interestsTitle: 'What I study in depth',
    },
    experience: {
      eyebrow: 'Software engineering, automation and data in production',
      title: 'Experience',
      current: 'Current',
      resultsLabel: 'Results',
      stackLabel: 'Technologies',
      academic: 'Student activity',
    },
    projects: {
      eyebrow: 'Purpose and technical decisions',
      title: 'Projects',
      techLabel: 'Technologies',
      noDemo: 'No public demo; source code in the repository.',
    },
    education: {
      eyebrow: 'Academic background',
      title: 'Education',
    },
    skills: {
      eyebrow: 'Technologies and tools I work with',
      title: 'Skills',
      languagesTitle: 'Languages',
    },
    activities: {
      eyebrow: 'Community and event organisation',
      title: 'Extracurricular activities',
      volunteerNote: 'Volunteer and academic work, distinct from professional experience.',
    },
    certifications: {
      eyebrow: 'Completed courses with credentials',
      title: 'Certificates',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Shall we talk?',
      lede: 'An internship opportunity or a project? I would love to talk.',
      location: 'São Paulo, Brazil',
    },
    footer: {
      rights: 'Walmir Fernandes Junior',
      stack: 'React, Vite and Tailwind CSS.',
      focus: 'Built with a focus on performance and user experience.',
      trademarks:
        'Trademarks and logos belong to their respective owners and appear only to identify academic and professional affiliations. Their use does not imply sponsorship or endorsement.',
    },
    misc: {
      opensInNewTab: 'opens in a new tab',
      imageUnavailable: 'Image unavailable',
      readingProgress: 'Reading progress',
    },
  },
}

export function useStringsFor(lang) {
  return strings[lang] ?? strings.pt
}
