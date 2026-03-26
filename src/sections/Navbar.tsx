import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import LogoMark from '../components/LogoMark'
import NavLinkList from '../components/NavLinkList'
import { navLinks } from '../data/nav'
import { siteConfig } from '../data/site'
import { classNames } from '../utils/classNames'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((open) => !open)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <nav className="panel relative flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link className="flex min-w-0 items-center gap-3" to="/" onClick={closeMenu}>
            <LogoMark size={48} />
            <div className="min-w-0">
              <p className="font-display truncate text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text)] sm:text-base">
                {siteConfig.name}
              </p>
              <p className="truncate text-xs text-white/50">Digital family home</p>
            </div>
          </Link>

          <div className="hidden md:block">
            <NavLinkList items={navLinks} />
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/4 text-[var(--color-text)] transition hover:border-[rgba(201,163,86,0.3)] hover:bg-white/8 md:hidden"
            type="button"
            onClick={toggleMenu}
          >
            <span
              className={classNames(
                'block h-0.5 w-4 rounded-full bg-current transition',
                isOpen && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={classNames(
                'block h-0.5 w-4 rounded-full bg-current transition',
                isOpen && 'opacity-0',
              )}
            />
            <span
              className={classNames(
                'block h-0.5 w-4 rounded-full bg-current transition',
                isOpen && '-translate-y-2 -rotate-45',
              )}
            />
          </button>

          {isOpen ? (
            <>
              <button
                aria-label="Close navigation menu"
                className="fixed inset-0 top-0 z-40 bg-[rgba(5,7,6,0.68)] backdrop-blur-sm md:hidden"
                type="button"
                onClick={closeMenu}
              />
              <div
                className="panel absolute left-0 right-0 top-[calc(100%+0.75rem)] z-50 p-3 md:hidden"
                id="mobile-menu"
              >
                <NavLinkList items={navLinks} orientation="vertical" onNavigate={closeMenu} />
              </div>
            </>
          ) : null}
        </nav>
      </Container>
    </header>
  )
}
