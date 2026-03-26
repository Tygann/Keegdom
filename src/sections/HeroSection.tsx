import Button from '../components/Button'
import Container from '../components/Container'
import LogoMark from '../components/LogoMark'
import { siteConfig } from '../data/site'

const heroStats = [
  { label: 'Home', value: 'Base' },
  { label: 'Family', value: 'Hub' },
  { label: 'Build', value: 'Live' },
]

export default function HeroSection() {
  return (
    <section className="scroll-mt-28 pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24" id="top">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="max-w-2xl">
            <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
            <h1 className="font-display mt-5 text-5xl font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              {siteConfig.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              {siteConfig.hero.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              {siteConfig.hero.supportingText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</Button>
              <Button
                href={siteConfig.hero.secondaryCta.href}
                target={siteConfig.hero.secondaryCta.external ? '_blank' : undefined}
                variant="secondary"
              >
                {siteConfig.hero.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {siteConfig.hero.highlights.map((item) => (
                <li
                  key={item}
                  className="panel-soft rounded-[20px] px-4 py-3 text-sm font-medium text-white/74"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute inset-0 translate-y-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_bottom,_rgba(41,86,71,0.22),_transparent_56%)] blur-3xl" />
            <div className="panel relative grid aspect-square place-items-center overflow-hidden rounded-[2.5rem] p-6 sm:p-8">
              <div className="absolute inset-8 rounded-full border border-[rgba(201,163,86,0.16)]" />
              <div className="hero-orbit absolute inset-16 rounded-full border border-white/6" />
              <div className="absolute -right-8 top-12 h-24 w-24 rounded-full bg-[rgba(201,163,86,0.16)] blur-3xl" />
              <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-[rgba(41,86,71,0.18)] blur-3xl" />

              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-subtle)] backdrop-blur-sm">
                House Keegan
              </div>

              <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-[rgba(12,15,14,0.72)] px-3 py-2 text-right backdrop-blur-sm"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                      {item.label}
                    </p>
                    <p className="font-display text-lg font-semibold text-[var(--color-text)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="float-gentle relative z-10 flex aspect-[4/5] w-full max-w-[18rem] flex-col justify-between rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(11,13,12,0.94))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
                <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-subtle)]">
                  <span>Crest</span>
                  <span>01</span>
                </div>

                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[28px] border border-[rgba(201,163,86,0.24)] bg-[radial-gradient(circle_at_top,_rgba(201,163,86,0.24),_rgba(17,20,19,0.96))]">
                  <LogoMark framed={false} size={76} />
                </div>

                <div className="text-center">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-subtle)]">
                    Digital family home
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                    Keegdom
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-white/62">
                    A subtle kingdom identity without losing the warmth of home.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {heroStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[18px] border border-white/8 bg-white/4 px-2 py-3 text-center"
                    >
                      <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
