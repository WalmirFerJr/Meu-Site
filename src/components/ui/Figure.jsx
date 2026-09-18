import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useStringsFor } from '../../i18n/strings'

/**
 * Imagem com dimensões reservadas e fallback visível.
 *
 * Substitui o antigo ImageWithLED. Duas diferenças que importam:
 * - em erro, mostra um aviso legível em vez de esconder o <img> e deixar um
 *   buraco no layout;
 * - a razão vem de width/height reais do arquivo, então nada é cortado em faixa
 *   e o espaço já está reservado antes da imagem chegar (sem salto de layout).
 */
export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  className = '',
  imgClassName = '',
}) {
  const [failed, setFailed] = useState(false)
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    <figure className={className}>
      <div
        className="relative overflow-hidden rounded-lg border border-[var(--divider-decorative)] bg-[var(--surface)]"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {failed ? (
          <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-meta text-[var(--text-secondary)]">
            {t.misc.imageUnavailable}
          </p>
        ) : (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onError={() => setFailed(true)}
            className={`h-full w-full object-cover ${imgClassName}`}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-meta text-[var(--text-secondary)]">{caption}</figcaption>
      )}
    </figure>
  )
}
