import Card from '../components/Card'
import Container from '../components/Container'
import PageIntro from '../components/PageIntro'
import PageMeta from '../components/PageMeta'
import { familyFacts, familyMoments, pageMeta } from '../data/pages'
import MainLayout from '../layouts/MainLayout'
import FamilySection from '../sections/FamilySection'
import FromTheHouseSection from '../sections/FromTheHouseSection'
import HouseSection from '../sections/HouseSection'

export default function FamilyPage() {
  return (
    <MainLayout pageMeta={<PageMeta description={pageMeta.family.description} title={pageMeta.family.title} />}>
      <PageIntro
        eyebrow="Family"
        title="A clearer place for the Keegan family story to live."
        description="This page is the emotional center of the site: who the Keegans are, what kind of home they are trying to build, and the memories and milestones worth keeping."
        aside={
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {familyFacts.map((item) => (
              <div key={item.label}>
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">{item.value}</p>
              </div>
            ))}
          </div>
        }
      />
      <FamilySection />
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {familyMoments.map((item) => (
              <Card key={item.title}>
                {item.eyebrow ? <p className="eyebrow">{item.eyebrow}</p> : null}
                <h2 className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <HouseSection />
      <FromTheHouseSection />
    </MainLayout>
  )
}
