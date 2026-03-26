import Card from '../components/Card'
import Container from '../components/Container'
import LogoMark from '../components/LogoMark'
import SectionHeader from '../components/SectionHeader'
import { siteConfig } from '../data/site'

export default function HouseSection() {
  return (
    <section className="scroll-mt-28 py-16 sm:py-20" id="house">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow={siteConfig.house.eyebrow}
              title={siteConfig.house.title}
              description={siteConfig.house.description}
            />
            <p className="mt-6 text-base leading-8 text-white/68 sm:text-lg">
              {siteConfig.house.body}
            </p>

            <ul className="mt-8 grid gap-3">
              {siteConfig.house.points.map((item) => (
                <li
                  key={item}
                  className="panel-soft rounded-[22px] px-4 py-4 text-sm leading-7 text-white/72"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Card className="h-full p-0">
            <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Family crest</p>
                  <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                    {siteConfig.house.crestTitle}
                  </h3>
                </div>
                <LogoMark kind="crest" size={72} />
              </div>

              <div className="rounded-[26px] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(201,163,86,0.16),_rgba(14,16,15,0.96))] p-6">
                <p className="text-sm leading-7 text-white/68">{siteConfig.house.crestDescription}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/8 bg-white/4 p-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                    Motto
                  </p>
                  <p className="mt-3 text-base font-medium text-[var(--color-text)]">
                    {siteConfig.house.motto}
                  </p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/4 p-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                    Established
                  </p>
                  <p className="mt-3 text-base font-medium text-[var(--color-text)]">
                    {siteConfig.house.established}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
