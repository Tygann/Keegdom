import Button from '../components/Button'
import Container from '../components/Container'
import LogoMark from '../components/LogoMark'
import { siteConfig } from '../data/site'

export default function HeroSection() {
  return (
    <section className="scroll-mt-28 pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24" id="top">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="max-w-2xl lg:max-w-[42rem]">
            <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
            <h1 className="font-display mt-5 text-5xl font-semibold tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl lg:text-[4.35rem]">
              {siteConfig.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              {siteConfig.hero.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
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

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/54 sm:text-base">
              {siteConfig.hero.highlights.map((item) => (
                <li key={item} className="inline-flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[25rem] lg:justify-self-end">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(201,163,86,0.08),_transparent_62%)] blur-3xl" />
            <div className="panel relative flex min-h-[24rem] flex-col justify-between rounded-[2.5rem] p-8 sm:p-9">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-subtle)]">
                  The Keegan family
                </p>
              </div>

              <div className="flex justify-center py-4">
                <div className="flex h-40 w-40 items-center justify-center rounded-[34px] border border-[rgba(201,163,86,0.14)] bg-[linear-gradient(180deg,rgba(201,163,86,0.08),rgba(14,16,15,0.92))] p-5">
                  <LogoMark framed={false} kind="crest" size={112} />
                </div>
              </div>

              <div className="border-t border-white/6 pt-6">
                <h2 className="font-display text-[2.15rem] font-semibold tracking-[-0.05em] text-[var(--color-text)]">
                  Keegdom
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/56 sm:text-base">
                  A calm family front door with enough identity to feel specific, but enough restraint to stay timeless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
