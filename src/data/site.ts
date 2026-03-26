import type { HighlightCard } from '../types/content'

const familyHighlights: HighlightCard[] = [
  {
    title: 'Home Base',
    description:
      'A calm place for family resources, shared references, and the digital odds and ends that help daily life run smoothly.',
    stat: 'Useful, not noisy',
  },
  {
    title: 'Family Story',
    description:
      'A home for milestones, memories, names, and the people who make this family feel like itself.',
    stat: 'Stories over systems',
  },
  {
    title: 'Built With Care',
    description:
      "Tyler's work still lives here, but only in service of keeping the family home useful, steady, and ready to grow.",
    stat: 'Quietly maintained',
  },
]

export const siteConfig = {
  name: 'Keegdom',
  domain: 'www.keegan.me',
  description:
    'The digital home of the Keegan family: a warm family homepage with room for stories, resources, and the projects around it.',
  hero: {
    eyebrow: 'The Keegan family home',
    title: 'Welcome to the Keegdom \u{1F451}',
    subtitle:
      'A small digital home for the Keegan family \u2014 warm, useful, and built to grow with us over time.',
    supportingText:
      'Part family homepage, part shared home base, and part quiet corner of the internet for the things that matter to us.',
    primaryCta: {
      label: 'Meet the Family',
      href: '/family',
    },
    secondaryCta: {
      label: 'Family Resources',
      href: '/resources',
      external: false,
    },
    highlights: ['Family first', 'Useful links', 'Quietly growing'],
  },
  family: {
    eyebrow: 'Meet the Keegans',
    title: 'A family homepage that puts people first and everything else in its place.',
    description:
      'Keegdom is meant to feel like a front porch first: welcoming to visitors, helpful for family, and structured enough to hold stories, links, and future pages without becoming cluttered.',
    highlights: familyHighlights,
  },
  resources: {
    eyebrow: 'Family Resources',
    title: 'The practical links we come back to most.',
    description:
      'These links are here to be useful, not to take over the homepage. Over time each one can grow into its own space without changing the role of the front page.',
  },
  house: {
    eyebrow: 'House of Keegan',
    title: 'A warm, useful place for the people who live here.',
    description:
      'The homepage should feel like a front door first: welcoming to guests, helpful to family, and flexible enough to evolve naturally.',
    body:
      'Over time this can hold stories, milestones, favorite links, household references, and the small digital tools that make life easier. The goal is not to show everything. The goal is to make the important things pleasant to return to.',
    points: [
      'Family story and identity come first',
      'Useful household links stay close, but not loud',
      "Tyler's projects support the home instead of defining it",
    ],
    crestTitle: 'House Keegan',
    crestDescription:
      'A simple family mark that gives the site a little character without turning the whole experience into costume.',
    motto: 'Placeholder for a future family motto',
    established: 'Still being written',
  },
  fromTheHouse: {
    eyebrow: 'From the House',
    title: 'A little room for what this season feels like.',
    description:
      'This gives the homepage a lived-in center. It can later hold updates, notes, photos, or family milestones without requiring a full blog or CMS.',
  },
  tyler: {
    eyebrow: 'From Tyler',
    title: 'A few of the things Tyler is building around the edges.',
    description:
      'Tyler still has a builder corner here, but it supports the family home instead of competing with it.',
  },
  footer: {
    tagline: 'A home on the internet for the Keegans',
  },
} as const
