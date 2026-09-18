/**
 * Oito grupos, 33 entradas. As entradas são nomes de tecnologias e por isso não
 * são traduzidas; apenas os rótulos dos grupos e as qualificações de idioma.
 *
 * Sem medidores, estrelas ou porcentagens: o projeto não tem dado de
 * proficiência por ferramenta, e inventar um seria afirmar o que não se sabe.
 */
export const skillGroups = [
  {
    id: 'linguagens',
    title: { pt: 'Linguagens', en: 'Languages' },
    items: ['Python', 'Java', 'JavaScript', 'C', 'SQL'],
  },
  {
    id: 'backend',
    title: { pt: 'Backend e dados', en: 'Backend and data' },
    items: ['FastAPI', 'Spring Boot', 'Django', 'Pandas', 'REST APIs'],
  },
  {
    id: 'engenharia-dados',
    title: { pt: 'Engenharia de dados', en: 'Data engineering' },
    items: [
      'AWS Glue (ETL)',
      'Athena',
      'Data Mesh (SOR/SOT/SPEC)',
      'QuickSight',
      'Particionamento em S3',
    ],
  },
  {
    id: 'cloud',
    title: { pt: 'Cloud e infraestrutura', en: 'Cloud and infrastructure' },
    items: [
      'AWS (EC2, VPC, Lambda, SQS, S3, Secrets Manager)',
      'Docker',
      'Linux (Ubuntu/WSL)',
    ],
  },
  {
    id: 'devops',
    title: { pt: 'DevOps e observabilidade', en: 'DevOps and observability' },
    items: ['Git', 'GitHub', 'Azure DevOps (CI/CD)', 'Jenkins', 'Grafana'],
  },
  {
    id: 'bancos',
    title: { pt: 'Bancos de dados', en: 'Databases' },
    items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'MongoDB'],
  },
  {
    id: 'ia',
    title: { pt: 'IA aplicada', en: 'Applied AI' },
    items: ['LLMs', 'AI Agents', 'Automação de documentação', 'Geração e validação de SQL'],
  },
]

/** Idiomas ficam na mesma seção, em faixa própria. B2 é leitura técnica fluente. */
export const languageSkills = [
  {
    id: 'portugues',
    language: { pt: 'Português', en: 'Portuguese' },
    level: { pt: 'Nativo', en: 'Native' },
  },
  {
    id: 'ingles',
    language: { pt: 'Inglês', en: 'English' },
    level: { pt: 'B2 – leitura técnica fluente', en: 'B2 – fluent technical reading' },
  },
]

/** Todos os 33 itens originais: 7 grupos técnicos + os 2 idiomas. */
export const skillEntryCount =
  skillGroups.reduce((total, group) => total + group.items.length, 0) + languageSkills.length
