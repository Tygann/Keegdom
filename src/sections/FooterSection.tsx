import Container from '../components/Container'
import LogoMark from '../components/LogoMark'
import NavLinkList from '../components/NavLinkList'
import { navLinks } from '../data/nav'
import { siteConfig } from '../data/site'

export default function FooterSection() {
  return (
    <footer className="pb-10 pt-8">
      <Container>
        <div className="panel px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <LogoMark size={48} />
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text)]">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-sm text-white/56">{siteConfig.footer.tagline}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <NavLinkList className="justify-start md:justify-end" items={navLinks} />
              <p className="text-sm text-white/38">
                {siteConfig.domain} | {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
