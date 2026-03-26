import Button from '../components/Button'
import Container from '../components/Container'
import PageMeta from '../components/PageMeta'
import MainLayout from '../layouts/MainLayout'
import { pageMeta } from '../data/pages'
import FamilySection from '../sections/FamilySection'
import FromTheHouseSection from '../sections/FromTheHouseSection'
import HeroSection from '../sections/HeroSection'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <MainLayout pageMeta={<PageMeta description={pageMeta.home.description} title={pageMeta.home.title} />}>
      <HeroSection />
      <FamilySection />
      <FromTheHouseSection />
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="border-t border-white/6 pt-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <Link className="group block" to="/family">
                <p className="eyebrow">Family</p>
                <h2 className="font-display mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                  Start with the people.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                  Visit the family page for the story, values, and the shape of what Keegdom is becoming.
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--color-gold)] transition duration-200 group-hover:translate-x-1">
                  Visit family {'->'}
                </p>
              </Link>
              <Link className="group block" to="/resources">
                <p className="eyebrow">Resources</p>
                <h2 className="font-display mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                  Keep the useful things nearby.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                  Find the household tools, family references, and practical links that make the site worth returning to.
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--color-gold)] transition duration-200 group-hover:translate-x-1">
                  Browse resources {'->'}
                </p>
              </Link>
              <Link className="group block" to="/tyler">
                <p className="eyebrow">Tyler</p>
                <h2 className="font-display mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                  See what is being built alongside it.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                  The builder page keeps Tyler&apos;s work connected to the family site without taking it over.
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--color-gold)] transition duration-200 group-hover:translate-x-1">
                  Visit Tyler {'->'}
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/family">Visit the Family Page</Button>
            <Button href="/resources" variant="secondary">
              Browse Family Resources
            </Button>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}
