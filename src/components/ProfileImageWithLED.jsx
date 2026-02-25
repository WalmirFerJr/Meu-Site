import ImageWithLED from './ImageWithLED'

export default function ProfileImageWithLED({ src, alt }) {
  return (
    <div className="aspect-square max-w-xs border border-[#EFE9E1] dark:border-dark-border-medium shadow-soft rounded-2xl overflow-hidden">
      <ImageWithLED src={src} alt={alt} className="aspect-square" rounded="2xl" />
      <div
        className="w-full h-full bg-[#EFE9E1] dark:bg-dark-border-medium border border-[#EFE9E1] dark:border-dark-border-medium flex items-center justify-center text-[#262322]/50 dark:text-dark-text-secondary hidden absolute inset-0"
        aria-hidden
      >
        <span className="text-sm">Foto</span>
      </div>
    </div>
  )
}
