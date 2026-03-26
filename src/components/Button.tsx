import type { MouseEventHandler, ReactNode } from 'react'
import { classNames } from '../utils/classNames'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  rel?: string
  target?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-gold)] text-[#17120b] shadow-[0_16px_40px_rgba(201,163,86,0.24)] hover:-translate-y-0.5 hover:bg-[#d9b66b]',
  secondary:
    'border border-white/12 bg-white/6 text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[rgba(201,163,86,0.34)] hover:bg-white/8',
  ghost: 'text-[var(--color-text)] hover:bg-white/6',
}

export default function Button({
  children,
  className,
  href,
  onClick,
  rel,
  target,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const classes = classNames(baseClasses, variantClasses[variant], className)

  if (href) {
    const safeRel = target === '_blank' ? rel ?? 'noreferrer' : rel

    return (
      <a className={classes} href={href} rel={safeRel} target={target}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
