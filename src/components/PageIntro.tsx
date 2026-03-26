import type { ReactNode } from 'react'
import Container from './Container'
import { classNames } from '../utils/classNames'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  aside?: ReactNode
  className?: string
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  aside,
  className,
}: PageIntroProps) {
  return (
    <section className={classNames('pb-8 pt-16 sm:pb-10 sm:pt-20', className)}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="font-display mt-5 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              {description}
            </p>
          </div>

          {aside ? <div className="panel-soft rounded-[28px] p-5 sm:p-6">{aside}</div> : null}
        </div>
      </Container>
    </section>
  )
}
