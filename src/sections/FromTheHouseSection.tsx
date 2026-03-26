import Card from '../components/Card'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { houseNotes } from '../data/houseNotes'
import { siteConfig } from '../data/site'
import type { HouseNoteTone } from '../types/content'

function dotClassNameForTone(tone: HouseNoteTone) {
  switch (tone) {
    case 'warm':
      return 'bg-[var(--color-gold)] shadow-[0_0_0_6px_rgba(201,163,86,0.14)]'
    case 'steady':
      return 'bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.14)]'
    case 'open':
      return 'bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]'
  }
}

export default function FromTheHouseSection() {
  const [featuredNote, ...secondaryNotes] = houseNotes

  return (
    <section className="scroll-mt-28 py-16 sm:py-20" id="from-the-house">
      <Container>
        <SectionHeader
          align="center"
          eyebrow={siteConfig.fromTheHouse.eyebrow}
          title={siteConfig.fromTheHouse.title}
          description={siteConfig.fromTheHouse.description}
        />

        <div className="mx-auto mt-10 max-w-4xl">
          <Card className="p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <span className={`status-dot ${dotClassNameForTone(featuredNote.tone)}`} />
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                {featuredNote.label}
              </p>
            </div>
            <p className="font-display mt-6 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
              {featuredNote.title}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              {featuredNote.detail}
            </p>
          </Card>

          <div className="mt-8 grid gap-6 border-t border-white/6 pt-6 sm:grid-cols-2">
            {secondaryNotes.map((item) => (
              <div key={item.label}>
                <div className="flex items-center gap-3">
                  <span className={`status-dot ${dotClassNameForTone(item.tone)}`} />
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                    {item.label}
                  </p>
                </div>
                <p className="font-display mt-4 text-xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/58 sm:text-base">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
