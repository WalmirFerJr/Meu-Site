import Reveal from './Reveal'

/**
 * Moldura de seção com cabeçalho editorial numerado.
 *
 * O número e o filete dão ritmo entre seções sem repetir o mesmo sublinhado
 * automático em todos os títulos. `tone="invert"` aplica um painel local que
 * redefine os tokens de cor para os filhos — é o que cria a faixa escura dentro
 * do tema claro, sem recorrer aos vermelhos como fundo.
 */
export default function Section({
  id,
  index,
  tone = 'base',
  eyebrow,
  title,
  lede,
  headingId,
  children,
  className = '',
}) {
  const toneClass = tone === 'invert' ? 'panel-invert' : ''
  const labelId = headingId ?? `${id}-heading`

  return (
    <section id={id} className={`section ${toneClass} ${className}`} aria-labelledby={labelId}>
      <div className="shell">
        {(eyebrow || title) && (
          <header className="mb-12 md:mb-16">
            <Reveal>
              <div className="flex items-center gap-4">
                {index && (
                  <span
                    className="font-display text-meta tabular-nums text-[var(--text-secondary)]"
                    aria-hidden="true"
                  >
                    {index}
                  </span>
                )}
                {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                <span className="h-px flex-1 bg-[var(--divider-decorative)]" aria-hidden="true" />
              </div>
            </Reveal>

            {title && (
              <Reveal delay={0.06}>
                <h2 id={labelId} className="section-heading mt-5 max-w-[16ch]">
                  {title}
                </h2>
              </Reveal>
            )}

            {lede && (
              <Reveal delay={0.12}>
                <p className="lede mt-5">{lede}</p>
              </Reveal>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
