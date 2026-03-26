import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { siteConfig } from '../data/site'

export default function FamilySection() {
  return (
    <section className="scroll-mt-28 py-16 sm:py-20" id="family">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <SectionHeader
            eyebrow={siteConfig.family.eyebrow}
            title={siteConfig.family.title}
            description={siteConfig.family.description}
          />

          <div className="grid gap-4 border-t border-white/6 pt-2">
            {siteConfig.family.highlights.map((item) => (
              <div key={item.title} className="border-b border-white/6 pb-4 last:border-b-0 last:pb-0">
                <p className="eyebrow">{item.stat}</p>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
