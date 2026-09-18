/**
 * Dados da pessoa e canais de contato, antes espalhados entre Hero, About,
 * Contact e Footer. Ícones ficam nos componentes: JSX não entra em dados.
 */
export const profile = {
  name: 'Walmir Fernandes Junior',
  shortName: 'Walmir Fernandes',
  initials: 'WF',
  location: { pt: 'São Paulo, Brasil', en: 'São Paulo, Brazil' },
  photo: {
    src: '/images/foto-perfil.jpg',
    width: 800,
    height: 800,
    alt: { pt: 'Walmir Fernandes Junior', en: 'Walmir Fernandes Junior' },
  },
}

export const resume = {
  url: '/curriculo-walmir-fernandes-junior.pdf',
  filename: 'Curriculo-Walmir-Fernandes-Junior.pdf',
}

/** Quatro canais já publicados. Nenhum dado de contato novo foi acrescentado. */
export const contactChannels = [
  { id: 'email', kind: 'email', href: 'mailto:walmir.jr.2004@usp.br', label: 'walmir.jr.2004@usp.br' },
  { id: 'whatsapp', kind: 'whatsapp', href: 'https://wa.me/5511911145999', label: '(11) 91114-5999' },
  {
    id: 'linkedin',
    kind: 'linkedin',
    href: 'https://www.linkedin.com/in/walmir-fernandes-070076236/',
    label: 'LinkedIn',
  },
  { id: 'github', kind: 'github', href: 'https://github.com/WalmirFerJr', label: 'GitHub' },
]

/** Instituições citadas na faixa do Hero, com o vínculo explícito de cada uma. */
export const affiliations = [
  {
    id: 'itau',
    name: 'Itaú Unibanco',
    logo: '/images/itau.svg',
    backdrop: 'light',
    relation: { pt: 'Estágio atual', en: 'Current internship' },
  },
  {
    id: 'btg',
    name: 'BTG Pactual',
    logo: '/images/btg-pactual.png',
    backdrop: 'dark',
    relation: { pt: 'Experiência anterior', en: 'Previous experience' },
  },
  {
    id: 'usp',
    name: 'USP',
    logo: '/images/usp.jpg',
    backdrop: 'light',
    relation: { pt: 'Formação', en: 'Education' },
  },
]

/** Quatro parágrafos do Sobre, com os fatos técnicos preservados. */
export const aboutParagraphs = {
  pt: [
    'Sou estudante de Sistemas de Informação na USP e atuo com engenharia de software e de dados no mercado financeiro. Desenvolvi automações fullstack e arquiteturas orientadas a eventos no BTG Pactual e hoje construo pipelines de grande volumetria e soluções de IA aplicada no Itaú Unibanco.',
    'Meu trabalho vive entre Python, FastAPI, SQL e AWS — Glue, Athena, Lambda, S3 e DynamoDB —, sempre com atenção a custo de consulta, escalabilidade e segurança. Trato dado como produto: modelagem em camadas, ownership por domínio e automação de tudo que for repetitivo.',
    'Meu objetivo é me tornar um engenheiro de software qualificado, e por isso invisto em system design, estruturas de dados, bancos de dados e infraestrutura. Também me preocupo em entregar interfaces claras e performáticas.',
    'Busco desafios em engenharia de software para escrever código de qualidade e aprender com times experientes dentro de sistemas em produção.',
  ],
  en: [
    'I am an Information Systems student at USP working with software and data engineering in the financial sector. I developed fullstack automations and event-driven architectures at BTG Pactual, and today I build high-volume pipelines and applied AI solutions at Itaú Unibanco.',
    'My work lives between Python, FastAPI, SQL and AWS — Glue, Athena, Lambda, S3 and DynamoDB — always with an eye on query cost, scalability and security. I treat data as a product: layered modelling, domain ownership and automation of anything repetitive.',
    'My goal is to become a well-rounded software engineer, which is why I invest in system design, data structures, databases and infrastructure. I also care about delivering clear, performant interfaces.',
    'I look for challenges in software engineering where I can write quality code and learn from experienced teams working on production systems.',
  ],
}

/**
 * Temas que ele estuda por conta própria. São interesses declarados, não
 * certificações nem cursos concluídos — e o objetivo de carreira por trás deles
 * fica implícito na escolha dos temas, sem virar declaração no site.
 */
export const studyInterests = [
  {
    id: 'arquitetura',
    title: { pt: 'Arquitetura de software', en: 'Software architecture' },
    text: {
      pt: 'Como decompor sistemas, separar responsabilidades e escolher entre trade-offs de consistência, acoplamento e custo.',
      en: 'How to decompose systems, separate responsibilities and choose between trade-offs of consistency, coupling and cost.',
    },
  },
  {
    id: 'design-patterns',
    title: { pt: 'Design Patterns', en: 'Design patterns' },
    text: {
      pt: 'Padrões de projeto como vocabulário comum para escrever código que outras pessoas conseguem ler e estender.',
      en: 'Design patterns as a shared vocabulary for writing code other people can read and extend.',
    },
  },
  {
    id: 'dsa',
    title: {
      pt: 'Estruturas de dados e algoritmos',
      en: 'Data structures and algorithms',
    },
    text: {
      pt: 'Base para raciocínio sobre complexidade e para resolver problemas com a estrutura certa, não com força bruta.',
      en: 'The basis for reasoning about complexity and solving problems with the right structure rather than brute force.',
    },
  },
]
