export interface Project {
  id: string
  slug: string
  name: string
  image: string
  industry: string
  service: string
  softwaresUsed: string[]
  description: string
  challenge: string
  solution: string
  deliverables: string[]
}

// No completed projects are published yet. The portfolio is under development,
// so this list is intentionally empty until real projects are added.
export const projects: Project[] = []

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getIndustries(): string[] {
  return [...new Set(projects.map((p) => p.industry))]
}

export function getServices(): string[] {
  return [...new Set(projects.map((p) => p.service))]
}
