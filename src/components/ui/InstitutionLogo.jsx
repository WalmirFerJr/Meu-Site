/**
 * Logo institucional em moldura de contraste próprio.
 *
 * O fundo vem do arquivo, não do tema: a logo do BTG é clara sobre preto e a do
 * Itaú é escura sobre branco. Sem recoloração e sem distorção (`object-contain`).
 *
 * `decorative` deixa o alt vazio quando o nome da instituição já aparece ao lado
 * — repetir o nome faria o leitor de tela anunciar duas vezes.
 */
export default function InstitutionLogo({
  src,
  institution,
  backdrop = 'light',
  size = 'md',
  decorative = false,
}) {
  // O fundo vem do arquivo da marca, não do tema: a do BTG é branca, a do Itaú escura.
  const backdropClass = backdrop === 'dark' ? 'bg-[#000000]' : 'bg-[#ffffff]'
  // Alturas generosas: com 18px de altura útil a marca deixava de ser legível.
  const sizeClass = size === 'sm' ? 'h-12 w-28' : 'h-16 w-36'

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-[var(--divider-decorative)] px-3 py-2 ${backdropClass} ${sizeClass}`}
    >
      <img
        src={src}
        alt={decorative ? '' : `${institution}`}
        aria-hidden={decorative || undefined}
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </span>
  )
}
