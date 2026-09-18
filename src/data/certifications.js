/**
 * Pendência factual conhecida: os certificados 1 e 2 apontam para a mesma URL
 * no cadastro original. Os dois registros são preservados como estão até que o
 * proprietário informe o link correto. Nenhuma credencial foi verificada aqui.
 */
export const certifications = [
  {
    id: '1',
    title: { pt: 'Git e GitHub — LinkedIn Learning', en: 'Git and GitHub — LinkedIn Learning' },
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/5a17d5e7a7d14961cf0ab34495dd79911f18972b4eb040f460fde31ad1bcd442?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BUtpRWaARTTCH3y4ds1U2gg%3D%3D',
  },
  {
    id: '2',
    title: { pt: 'Programação para todos (Python)', en: 'Programming for Everybody (Python)' },
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/5a17d5e7a7d14961cf0ab34495dd79911f18972b4eb040f460fde31ad1bcd442?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BUtpRWaARTTCH3y4ds1U2gg%3D%3D',
  },
  {
    id: '3',
    title: { pt: 'Habilidades em Excel para negócios', en: 'Excel Skills for Business' },
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/M1LW8TORRINJ',
  },
  {
    id: '4',
    title: { pt: 'Explorando a Linguagem C', en: 'Exploring the C Language' },
    credentialUrl: 'https://www.coursera.org/account/accomplishments/records/AX0TTETHY70W',
  },
]
