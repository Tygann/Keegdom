import type { StatusItem } from '../types/content'

export const statusItems: StatusItem[] = [
  {
    label: 'Castle Power',
    value: 'Stable',
    detail: 'Core infrastructure is calm and available.',
    tone: 'stable',
  },
  {
    label: 'Archives',
    value: 'Accessible',
    detail: 'Shared files and household records are within reach.',
    tone: 'ready',
  },
  {
    label: 'Royal Library',
    value: 'Open',
    detail: 'Books, reading lists, and notes are ready to browse.',
    tone: 'active',
  },
  {
    label: 'House Systems',
    value: 'Operational',
    detail: 'Automations and household tools are responding normally.',
    tone: 'stable',
  },
]
