import Card from '../components/Card'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { gateways } from '../data/gateways'
import { siteConfig } from '../data/site'
import type { GatewayIcon } from '../types/content'

function GatewayGlyph({ icon }: { icon: GatewayIcon }) {
  const baseClassName = 'h-6 w-6'

  switch (icon) {
    case 'home-assistant':
      return (
        <svg className={baseClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 11.5L12 5L20 11.5V19H14.5V14.5H9.5V19H4V11.5Z" />
          <path d="M9 9H9.01" />
          <path d="M15 9H15.01" />
        </svg>
      )
    case 'files':
      return (
        <svg className={baseClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7.5C4 6.67 4.67 6 5.5 6H10L12 8H18.5C19.33 8 20 8.67 20 9.5V17.5C20 18.33 19.33 19 18.5 19H5.5C4.67 19 4 18.33 4 17.5V7.5Z" />
        </svg>
      )
    case 'books':
      return (
        <svg className={baseClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 5.5H17.5C18.33 5.5 19 6.17 19 7V18.5H7.5C6.67 18.5 6 17.83 6 17V5.5Z" />
          <path d="M9 8.5H15" />
          <path d="M9 12H15" />
        </svg>
      )
    case 'status':
      return (
        <svg className={baseClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 18V14" />
          <path d="M10 18V10" />
          <path d="M15 18V6" />
          <path d="M20 18V12" />
        </svg>
      )
    case 'family-tree':
      return (
        <svg className={baseClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 6V12" />
          <path d="M7 12H17" />
          <path d="M7 12V18" />
          <path d="M17 12V18" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="7" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
        </svg>
      )
    case 'tyler':
      return (
        <svg className={baseClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M8 8L4 12L8 16" />
          <path d="M13 16H20" />
          <path d="M11 7L15 17" />
        </svg>
      )
  }
}

export default function GatewaysSection() {
  return (
    <section className="scroll-mt-28 py-16 sm:py-20" id="gateways">
      <Container>
        <SectionHeader
          eyebrow={siteConfig.gateways.eyebrow}
          title={siteConfig.gateways.title}
          description={siteConfig.gateways.description}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {gateways.map((gateway) => (
            <Card
              key={gateway.title}
              href={gateway.href}
              interactive
              target="_blank"
              ariaLabel={`Open ${gateway.title}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(201,163,86,0.16)] bg-[rgba(201,163,86,0.1)] text-[var(--color-gold)]">
                  <GatewayGlyph icon={gateway.icon} />
                </div>
                <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[0.72rem] font-medium text-white/52">
                  {gateway.domain}
                </span>
              </div>

              <h3 className="font-display mt-8 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {gateway.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                {gateway.description}
              </p>

              <div className="mt-6 flex items-center justify-between text-sm font-semibold text-[var(--color-gold)]">
                <span>Open gateway</span>
                <span className="transition duration-300 group-hover:translate-x-1">{'->'}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
