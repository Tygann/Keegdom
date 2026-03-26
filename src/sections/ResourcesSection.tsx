import Card from '../components/Card'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { gateways } from '../data/gateways'
import { siteConfig } from '../data/site'
import type { GatewayIcon } from '../types/content'

function ResourceGlyph({ icon }: { icon: GatewayIcon }) {
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

export default function ResourcesSection() {
  return (
    <section className="scroll-mt-28 py-16 sm:py-20" id="resources">
      <Container>
        <SectionHeader
          eyebrow={siteConfig.resources.eyebrow}
          title={siteConfig.resources.title}
          description={siteConfig.resources.description}
        />

        <div className="mt-10 grid gap-x-8 gap-y-5 lg:grid-cols-2">
          {gateways.map((gateway) => (
            <Card
              key={gateway.title}
              href={gateway.href}
              interactive
              target="_blank"
              ariaLabel={`Open ${gateway.title}`}
              className="rounded-[24px] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/3 text-[var(--color-gold)]">
                  <ResourceGlyph icon={gateway.icon} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-2xl">
                    {gateway.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/42">{gateway.domain}</p>
                  <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">
                    {gateway.description}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-[var(--color-gold)]">
                    Visit resource {'->'}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
