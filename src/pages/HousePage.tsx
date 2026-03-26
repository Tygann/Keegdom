import Card from '../components/Card'
import Container from '../components/Container'
import PageIntro from '../components/PageIntro'
import PageMeta from '../components/PageMeta'
import { housePrinciples, pageMeta } from '../data/pages'
import MainLayout from '../layouts/MainLayout'
import HouseSection from '../sections/HouseSection'

export default function HousePage() {
  return (
    <MainLayout pageMeta={<PageMeta description={pageMeta.house.description} title={pageMeta.house.title} />}>
      <PageIntro
        eyebrow="House"
        title="The shared structure behind the family home."
        description="The House page is where identity and practicality meet: the tone of the home, the principles behind the project, and the parts of the site meant to stay steady over time."
      />
      <HouseSection />
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {housePrinciples.map((item) => (
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
    </MainLayout>
  )
}
