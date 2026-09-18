/**
 * Marca tipográfica para instituições sem logo autorizado.
 *
 * Existe porque o Centro Paula Souza declara que os logos CPS/Etec/Fatec são
 * "de uso exclusivo dos servidores da instituição e suas unidades de ensino, não
 * podendo ser utilizado por alunos e terceiros, sem autorização prévia".
 *
 * Isto é deliberadamente tipografia, não um desenho parecido com o logo: dá
 * paridade visual às entradas sem reproduzir uma marca sem autorização.
 */
export default function InstitutionMark({ label, size = 'md' }) {
  const sizeClass = size === 'sm' ? 'h-12 w-28' : 'h-16 w-36'

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-md border border-[var(--border-control)] px-3 py-2 ${sizeClass}`}
      aria-hidden="true"
    >
      <span className="font-display text-lg font-bold tracking-tight text-[var(--text)]">
        {label}
      </span>
    </span>
  )
}
