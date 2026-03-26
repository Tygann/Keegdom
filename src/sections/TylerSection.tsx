import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'
import { siteConfig } from '../data/site'

export default function TylerSection() {
  return (
    <section className="scroll-mt-28 py-16 sm:py-20" id="tyler">
      <Container>
        <SectionHeader
          eyebrow={siteConfig.tyler.eyebrow}
          title={siteConfig.tyler.title}
          description={siteConfig.tyler.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              href={project.href}
              interactive
              target={project.external ? '_blank' : undefined}
            >
              <p className="eyebrow">{project.eyebrow}</p>
              <h3 className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                {project.description}
              </p>
              <div className="mt-6 text-sm font-semibold text-[var(--color-gold)]">
                Explore more {'->'}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button href="https://tylerkeegan.com" target="_blank" variant="secondary">
            Visit TylerKeegan.com
          </Button>
        </div>
      </Container>
    </section>
  )
}
