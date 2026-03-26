import Card from '../components/Card'
import Container from '../components/Container'
import PageIntro from '../components/PageIntro'
import PageMeta from '../components/PageMeta'
import { pageMeta, tylerNotes } from '../data/pages'
import MainLayout from '../layouts/MainLayout'
import TylerSection from '../sections/TylerSection'

export default function TylerPage() {
  return (
    <MainLayout pageMeta={<PageMeta description={pageMeta.tyler.description} title={pageMeta.tyler.title} />}>
      <PageIntro
        eyebrow="Tyler"
        title="Projects and notes from the builder side of the house."
        description="This page keeps Tyler’s work connected to Keegdom without making the family site feel like a portfolio. It is the right place for projects, systems, and the ideas around them."
      />
      <section className="pb-10">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {tylerNotes.map((item) => (
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
      <TylerSection />
    </MainLayout>
  )
}
