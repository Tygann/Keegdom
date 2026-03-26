export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type KingdomPillar = {
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

export type StatusTone = 'stable' | 'ready' | 'active'

export type StatusItem = {
  label: string
  value: string
  detail: string
  tone: StatusTone
}
