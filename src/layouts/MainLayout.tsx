import type { ReactNode } from 'react'
import FooterSection from '../sections/FooterSection'
import Navbar from '../sections/Navbar'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(201,163,86,0.16),_transparent_62%)]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-[rgba(41,86,71,0.15)] blur-3xl" />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <FooterSection />
    </div>
  )
}
