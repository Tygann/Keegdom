import Card from '../components/Card'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { siteConfig } from '../data/site'

export default function FamilySection() {
  return (
    <section className="scroll-mt-28 py-16 sm:py-20" id="family">
      <Container>
        <SectionHeader
          eyebrow={siteConfig.family.eyebrow}
          title={siteConfig.family.title}
          description={siteConfig.family.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.family.highlights.map((item) => (
            <Card key={item.title} interactive>
              <p className="eyebrow">{item.stat}</p>
              <h3 className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
