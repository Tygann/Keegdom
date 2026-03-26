import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import PageMeta from '../components/PageMeta'
import MainLayout from '../layouts/MainLayout'
import { pageMeta } from '../data/pages'
import FamilySection from '../sections/FamilySection'
import FromTheHouseSection from '../sections/FromTheHouseSection'
import HeroSection from '../sections/HeroSection'

export default function HomePage() {
  return (
    <MainLayout pageMeta={<PageMeta description={pageMeta.home.description} title={pageMeta.home.title} />}>
      <HeroSection />
      <FamilySection />
      <FromTheHouseSection />
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card interactive href="/family">
              <p className="eyebrow">Family</p>
              <h2 className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                Start with the people.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                Visit the family page for the story, values, and the shape of what Keegdom is becoming.
              </p>
            </Card>
            <Card interactive href="/resources">
              <p className="eyebrow">Resources</p>
              <h2 className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                Keep the useful things nearby.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                Find the household tools, family references, and practical links that make the site worth returning to.
              </p>
            </Card>
            <Card interactive href="/tyler">
              <p className="eyebrow">Tyler</p>
              <h2 className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                See what is being built alongside it.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                The builder page keeps Tyler’s work connected to the family site without taking it over.
              </p>
            </Card>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
