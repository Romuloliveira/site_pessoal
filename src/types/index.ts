export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  current?: boolean
}

export interface Skill {
  name: string
  category: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  url?: string
  repo?: string
  wip?: boolean
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
