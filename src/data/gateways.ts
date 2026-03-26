import type { Gateway } from '../types/content'

export const gateways: Gateway[] = [
  {
    title: 'Home Assistant',
    domain: 'ha.keegan.me',
    description: 'Lights, routines, automations, and the quiet mechanics of the house.',
    href: 'https://ha.keegan.me',
    icon: 'home-assistant',
  },
  {
    title: 'Files',
    domain: 'files.keegan.me',
    description: 'Shared storage, household documents, and the family archive.',
    href: 'https://files.keegan.me',
    icon: 'files',
  },
  {
    title: 'Books',
    domain: 'books.keegan.me',
    description: 'Reading lists, notes, and a small digital royal library.',
    href: 'https://books.keegan.me',
    icon: 'books',
  },
  {
    title: 'Status',
    domain: 'status.keegan.me',
    description: 'Service health, uptime, and a quick pulse check on the realm.',
    href: 'https://status.keegan.me',
    icon: 'status',
  },
  {
    title: 'Family Tree',
    domain: 'family.keegan.me',
    description: 'Names, stories, branches, and the people behind the house.',
    href: 'https://family.keegan.me',
    icon: 'family-tree',
  },
  {
    title: 'Tyler',
    domain: 'tylerkeegan.com',
    description: "Tyler's projects, writing, and builder-facing corner of the internet.",
    href: 'https://tylerkeegan.com',
    icon: 'tyler',
  },
]
