import type { ReactNode } from 'react'
import FooterSection from '../sections/FooterSection'
import Navbar from '../sections/Navbar'

type MainLayoutProps = {
  children: ReactNode
  pageMeta?: ReactNode
}

export default function MainLayout({ children, pageMeta }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {pageMeta}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(201,163,86,0.09),_transparent_60%)]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[20rem] h-[20rem] w-[20rem] rounded-full bg-[rgba(41,86,71,0.08)] blur-3xl" />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <FooterSection />
    </div>
  )
}
