export interface PortfolioProject {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
}

export const rawPortfolioData: PortfolioProject[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "portfolio.ecommerceEjemplo.description",
    image: "/header-logo-1.webp?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "E-commerce",
  },
]
