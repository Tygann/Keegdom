import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '../utils/classNames'

type CardProps = {
  ariaLabel?: string
  children: ReactNode
  className?: string
  href?: string
  interactive?: boolean
  rel?: string
  target?: string
}

const baseClasses = 'panel relative overflow-hidden p-6 sm:p-7'
const interactiveClasses =
  'group transition duration-300 hover:-translate-y-1 hover:border-[rgba(201,163,86,0.38)] hover:shadow-[0_28px_90px_rgba(0,0,0,0.38)]'

export default function Card({
  ariaLabel,
  children,
  className,
  href,
  interactive = false,
  rel,
  target,
}: CardProps) {
  const classes = classNames(baseClasses, interactive && interactiveClasses, className)
  const isInternalRoute = Boolean(href && href.startsWith('/'))

  if (href) {
    if (isInternalRoute) {
      return (
        <Link aria-label={ariaLabel} className={classes} to={href}>
          {children}
        </Link>
      )
    }

    const safeRel = target === '_blank' ? rel ?? 'noreferrer' : rel

    return (
      <a aria-label={ariaLabel} className={classes} href={href} rel={safeRel} target={target}>
        {children}
      </a>
    )
  }

  return <article className={classes}>{children}</article>
}
