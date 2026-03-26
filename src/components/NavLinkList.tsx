import type { NavItem } from '../types/content'
import { classNames } from '../utils/classNames'

type NavLinkListProps = {
  items: NavItem[]
  orientation?: 'horizontal' | 'vertical'
  className?: string
  onNavigate?: () => void
}

export default function NavLinkList({
  items,
  orientation = 'horizontal',
  className,
  onNavigate,
}: NavLinkListProps) {
  return (
    <ul
      className={classNames(
        'flex',
        orientation === 'horizontal'
          ? 'flex-wrap items-center gap-1'
          : 'flex-col items-stretch gap-2',
        className,
      )}
    >
      {items.map((item) => {
        const rel = item.external ? 'noreferrer' : undefined
        const target = item.external ? '_blank' : undefined

        return (
          <li key={item.label}>
            <a
              className={classNames(
                'inline-flex items-center rounded-full text-sm font-medium text-white/72 transition duration-200 hover:text-[var(--color-text)]',
                orientation === 'horizontal'
                  ? 'px-4 py-2 hover:bg-white/6'
                  : 'w-full rounded-2xl border border-white/8 bg-white/4 px-4 py-3 hover:border-[rgba(201,163,86,0.3)] hover:bg-white/8',
              )}
              href={item.href}
              rel={rel}
              target={target}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
