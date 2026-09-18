/**
 * Fonte única dos oito destinos, usada pelo header, pelo menu e pelo rodapé.
 * A ordem acompanha a ordem das seções no documento; os IDs são os mesmos de
 * antes, para que links diretos já compartilhados continuem funcionando.
 */
export const navLinks = [
  { href: '#about', label: { pt: 'Sobre', en: 'About' } },
  { href: '#experience', label: { pt: 'Experiência', en: 'Experience' } },
  { href: '#projects', label: { pt: 'Projetos', en: 'Projects' } },
  { href: '#education', label: { pt: 'Formação', en: 'Education' } },
  { href: '#skills', label: { pt: 'Habilidades', en: 'Skills' } },
  { href: '#activities', label: { pt: 'Atividades', en: 'Activities' } },
  { href: '#certifications', label: { pt: 'Certificados', en: 'Certificates' } },
  { href: '#contact', label: { pt: 'Contato', en: 'Contact' } },
]

/** Atalhos prioritários do header largo. Os oito continuam no menu e no rodapé. */
export const primaryNavHrefs = ['#about', '#experience', '#projects', '#contact']
