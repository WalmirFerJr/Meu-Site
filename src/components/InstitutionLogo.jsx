export default function InstitutionLogo({ src, institution, backdrop = 'light', compact = false }) {
  const backdropClass = backdrop === 'dark' ? 'bg-[#17161C]' : 'bg-[#F9FBF8]'
  const sizeClass = compact ? 'h-8 w-20' : 'h-10 w-24'

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#E5DBCF] p-1.5 dark:border-dark-border-medium ${backdropClass} ${sizeClass}`}
    >
      <img
        src={src}
        alt={`Logotipo ${institution}`}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </span>
  )
}
