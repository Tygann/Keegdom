import type { Gateway } from '../types/content'

export const gateways: Gateway[] = [
  {
    title: 'Home Assistant',
    domain: 'ha.keegan.me',
    description: 'Automations, routines, and the systems that keep the house running quietly.',
    href: 'https://ha.keegan.me',
    icon: 'home-assistant',
  },
  {
    title: 'Files',
    domain: 'files.keegan.me',
    description: 'Shared documents, family records, and the practical household archive.',
    href: 'https://files.keegan.me',
    icon: 'files',
  },
  {
    title: 'Books',
    domain: 'books.keegan.me',
    description: 'Reading lists, notes, and a growing family library.',
    href: 'https://books.keegan.me',
    icon: 'books',
  },
  {
    title: 'Status',
    domain: 'status.keegan.me',
    description: 'A simple health check for the tools that support the home.',
    href: 'https://status.keegan.me',
    icon: 'status',
  },
  {
    title: 'Family Tree',
    domain: 'family.keegan.me',
    description: 'Family history, branches, names, and stories worth keeping.',
    href: 'https://family.keegan.me',
    icon: 'family-tree',
  },
  {
    title: 'Tyler',
    domain: 'tylerkeegan.com',
    description: "Tyler's personal site, writing, and the work happening alongside Keegdom.",
    href: 'https://tylerkeegan.com',
    icon: 'tyler',
  },
]
