import type { ContentCard, ContentPair, PageMeta, ResourceCategory } from '../types/pages'

export const pageMeta: Record<'home' | 'family' | 'house' | 'resources' | 'tyler', PageMeta> = {
  home: {
    title: 'Keegdom | The Keegan Family Home',
    description:
      'The digital home of the Keegan family: a warm front door for stories, shared resources, and family life.',
  },
  family: {
    title: 'Family | Keegdom',
    description:
      'Meet the Keegans through family notes, household values, and the story taking shape around the site.',
  },
  house: {
    title: 'House | Keegdom',
    description:
      'The House of Keegan page holds the identity, rhythms, and practical foundations behind the family home.',
  },
  resources: {
    title: 'Resources | Keegdom',
    description:
      'A quiet set of practical family resources, household links, and digital tools the Keegans return to often.',
  },
  tyler: {
    title: 'Tyler | Keegdom',
    description:
      "A supporting page for Tyler's projects, notes, and the work happening alongside the Keegan family site.",
  },
}

export const familyFacts: ContentPair[] = [
  { label: 'Home base', value: 'Chicago area roots with a growing digital front porch' },
  { label: 'What matters', value: 'Faithfulness, steadiness, hospitality, and making room for real life' },
  { label: 'What this becomes', value: 'A place for memories, milestones, and useful shared context' },
]

export const familyMoments: ContentCard[] = [
  {
    eyebrow: 'What this page is for',
    title: 'A place to gather the story as it grows.',
    description:
      'This page should eventually hold family snapshots, a short timeline, important dates, and the kind of context future generations would be glad someone kept.',
  },
  {
    eyebrow: 'What belongs here',
    title: 'Names, milestones, traditions, and memory.',
    description:
      'Not everything needs to be public, but the shape of the family should feel visible here: who we are, what we care about, and what kind of home we are trying to build.',
  },
]

export const housePrinciples: ContentCard[] = [
  {
    eyebrow: 'Principle',
    title: 'Useful beats impressive',
    description:
      'Every part of the site should earn its place. If a feature does not make family life calmer, clearer, or more connected, it probably does not belong yet.',
  },
  {
    eyebrow: 'Principle',
    title: 'Warmth beats cleverness',
    description:
      'The site can have personality, but it should never feel like a gimmick. The “Keegdom” idea works best when it supports the sense of home rather than overpowering it.',
  },
  {
    eyebrow: 'Principle',
    title: 'Room to grow slowly',
    description:
      'This project does not need to become a platform overnight. It can grow page by page, story by story, as the family actually needs it.',
  },
]

export const resourceCategories: ResourceCategory[] = [
  {
    title: 'Household systems',
    description: 'The practical tools that help the house run smoothly in the background.',
    items: ['Home Assistant and automation', 'Service status and diagnostics', 'Shared dashboards over time'],
  },
  {
    title: 'Family reference',
    description: 'The records and shared references that are useful to keep close.',
    items: ['Family tree and history', 'Files and household documents', 'Books, notes, and reading lists'],
  },
  {
    title: 'Outside links',
    description: 'A short bridge from the family site to the rest of the Keegan web presence.',
    items: ["Tyler's personal site", 'Project links that support the household', 'Future private or shared tools'],
  },
]

export const tylerNotes: ContentCard[] = [
  {
    eyebrow: 'Role',
    title: 'Builder in support of the home',
    description:
      "Tyler's page should connect his work to the rest of the site without turning the family homepage into a portfolio.",
  },
  {
    eyebrow: 'Focus',
    title: 'Practical systems and thoughtful product work',
    description:
      'The strongest overlap here is useful software, dependable systems, and notes from building things with care.',
  },
]
