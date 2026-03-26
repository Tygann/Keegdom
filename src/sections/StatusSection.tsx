import Card from '../components/Card'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { siteConfig } from '../data/site'
import { statusItems } from '../data/status'
import type { StatusTone } from '../types/content'

function dotClassNameForTone(tone: StatusTone) {
  switch (tone) {
    case 'stable':
      return 'bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.14)]'
    case 'ready':
      return 'bg-[var(--color-gold)] shadow-[0_0_0_6px_rgba(201,163,86,0.14)]'
    case 'active':
      return 'bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]'
  }
}

export default function StatusSection() {
  return (
    <section className="scroll-mt-28 py-16 sm:py-20" id="status">
      <Container>
        <SectionHeader
          align="center"
          eyebrow={siteConfig.status.eyebrow}
          title={siteConfig.status.title}
          description={siteConfig.status.description}
        />

        <div className="mt-10 grid gap-4 xl:grid-cols-4">
          {statusItems.map((item) => (
            <Card key={item.label} className="p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className={`status-dot ${dotClassNameForTone(item.tone)}`} />
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                  {item.label}
                </p>
              </div>
              <p className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/62">{item.detail}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
