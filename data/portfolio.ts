export interface PortfolioProject {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
}

export const portfolioData: PortfolioProject[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con gestión de inventario, pagos y analytics en tiempo real.",
    image: "/header-logo-1.webp?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "E-commerce",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "Sistema integral de gestión hospitalaria con módulos para pacientes, citas, historiales médicos y facturación.",
    image: "/header-logo-2.webp?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
    category: "Healthcare",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description:
      "Dashboard financiero con visualización de datos en tiempo real, análisis predictivo y reportes automatizados.",
    image: "/header-logo-3.webp?height=300&width=400",
    technologies: ["Vue.js", "Python", "Django", "Chart.js", "PostgreSQL"],
    category: "Finance",
  },
  {
    id: 4,
    title: "Learning Management System",
    description:
      "Plataforma educativa con cursos online, evaluaciones, certificaciones y seguimiento del progreso estudiantil.",
    image: "/header-logo-4.webp?height=300&width=400",
    technologies: ["Angular", "NestJS", "MySQL", "Redis", "AWS"],
    category: "Education",
  }
]
