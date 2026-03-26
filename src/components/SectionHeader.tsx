import { classNames } from '../utils/classNames'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={classNames(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      <p className="section-copy mt-4 text-base leading-8 sm:text-lg">{description}</p>
    </div>
  )
}
