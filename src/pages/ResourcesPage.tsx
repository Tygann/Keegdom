import Card from '../components/Card'
import Container from '../components/Container'
import PageIntro from '../components/PageIntro'
import PageMeta from '../components/PageMeta'
import { pageMeta, resourceCategories } from '../data/pages'
import MainLayout from '../layouts/MainLayout'
import ResourcesSection from '../sections/ResourcesSection'

export default function ResourcesPage() {
  return (
    <MainLayout pageMeta={<PageMeta description={pageMeta.resources.description} title={pageMeta.resources.title} />}>
      <PageIntro
        eyebrow="Resources"
        title="The practical side of the family site."
        description="This page is where the useful links live. It should stay calm, clear, and easy to scan so the household tools never crowd out the rest of the site."
      />
      <section className="pb-10">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {resourceCategories.map((item) => (
              <Card key={item.title}>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">{item.description}</p>
                <ul className="mt-6 grid gap-3">
                  {item.items.map((entry) => (
                    <li
                      key={entry}
                      className="rounded-[18px] border border-white/8 bg-white/4 px-4 py-3 text-sm leading-7 text-white/72"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <ResourcesSection />
    </MainLayout>
  )
}
