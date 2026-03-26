import type { KingdomPillar } from '../types/content'

const kingdomHighlights: KingdomPillar[] = [
  {
    title: 'Home',
    description:
      'A calm front door for day-to-day family life, shared links, and the digital spaces that support the house.',
    stat: 'Shared base',
  },
  {
    title: 'Family',
    description:
      'A place for stories, connections, and the people at the center of everything the site should support.',
    stat: 'People first',
  },
  {
    title: 'Projects',
    description:
      'A lightweight showcase for what Tyler is building, plus the practical systems running in the background.',
    stat: 'Always building',
  },
]

export const siteConfig = {
  name: 'Keegdom',
  domain: 'www.keegan.me',
  description:
    'The digital home of the Keegan family: part home base, part family hub, part kingdom.',
  hero: {
    eyebrow: 'Digital family kingdom',
    title: 'Welcome to the Keegdom \u{1F451}',
    subtitle:
      'The digital home of the Keegan family \u2014 part home base, part family hub, part kingdom.',
    supportingText:
      "From family life to home systems to the projects we're building, this is our corner of the internet.",
    primaryCta: {
      label: 'Enter the Kingdom',
      href: '#kingdom',
    },
    secondaryCta: {
      label: "Visit Tyler's Site",
      href: 'https://tylerkeegan.com',
      external: true,
    },
    highlights: ['Family first', 'Practical systems', 'Room to grow'],
  },
  kingdom: {
    eyebrow: 'Our Kingdom, Online',
    title: 'A shared home for family, systems, and the work happening around them.',
    description:
      'Keegdom is meant to feel welcoming before it feels technical, while still giving the family a strong digital foundation to build on later.',
    highlights: kingdomHighlights,
  },
  gateways: {
    eyebrow: 'Kingdom Gateways',
    title: 'Quick links to the parts of the realm that matter most.',
    description:
      'Every gateway is kept lightweight and intentional so the homepage stays useful without turning into a cluttered dashboard.',
  },
  house: {
    eyebrow: 'House of Keegan',
    title: 'A family home with enough structure to grow over time.',
    description:
      'Keegdom should feel like a polished family homepage today, while leaving room for richer stories, private utilities, and connected services later.',
    body:
      'The goal is a home base that can hold practical links, meaningful family context, and the projects orbiting around the household without feeling overloaded.',
    points: [
      'A welcoming front door to family resources',
      'Shared context for home systems and services',
      'A foundation for future family and personal pages',
    ],
    crestTitle: 'House Keegan',
    motto: 'Placeholder for the Keegan family motto',
    established: 'Established: TBD',
  },
  builder: {
    eyebrow: 'From the Builder',
    title: "Projects, systems, and notes from Tyler's corner of the realm.",
    description:
      'This section keeps the homepage connected to the things being built without overpowering the family-first purpose of the site.',
  },
  status: {
    eyebrow: 'Realm Status',
    title: 'Core systems at a glance.',
    description:
      'A compact status strip keeps the site feeling alive and useful, with room to become a richer service overview later.',
  },
  footer: {
    tagline: 'Built by the Keegans',
  },
} as const
