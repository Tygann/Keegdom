export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type HighlightCard = {
  title: string
  description: string
  stat: string
}

export type GatewayIcon =
  | 'home-assistant'
  | 'files'
  | 'books'
  | 'status'
  | 'family-tree'
  | 'tyler'

export type Gateway = {
  title: string
  domain: string
  description: string
  href: string
  icon: GatewayIcon
}

export type Project = {
  title: string
  eyebrow: string
  description: string
  href: string
  external?: boolean
}

export type HouseNoteTone = 'warm' | 'steady' | 'open'

export type HouseNote = {
  label: string
  title: string
  detail: string
  tone: HouseNoteTone
}
