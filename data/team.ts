export interface TeamMember {
  id: number
  name: string
  position: string
  bio: string
  photo: string
  linkedin?: string
  github?: string
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Bastian Alfaro",
    position: "CEO & Fundador",
    bio: "Ingeniero ",
    photo: "/placeholder.svg?height=200&width=200",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
  },
  {
    id: 2,
    name: "Jonatan Mosqueda",
    position: "CEO & Fundador",
    bio: "Desarrollador frontend",
    photo: "/placeholder.svg?height=200&width=200",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
  },
  // {
  //   id: 3,
  //   name: "Miguel Torres",
  //   position: "Lead Frontend Developer",
  //   bio: "Desarrollador frontend especializado en React, Vue.js y tecnologías modernas de desarrollo web.",
  //   photo: "/placeholder.svg?height=200&width=200",
  //   linkedin: "https://linkedin.com/in/miguel-torres",
  //   github: "https://github.com/miguel-torres",
  // },
  // {
  //   id: 4,
  //   name: "Laura Martínez",
  //   position: "UX/UI Designer",
  //   bio: "Diseñadora con enfoque en experiencia de usuario y interfaces intuitivas. Experta en design thinking y prototipado.",
  //   photo: "/placeholder.svg?height=200&width=200",
  //   linkedin: "https://linkedin.com/in/laura-martinez",
  // },
  // {
  //   id: 5,
  //   name: "David López",
  //   position: "Backend Developer",
  //   bio: "Desarrollador backend especializado en Node.js, Python y bases de datos. Experto en APIs y microservicios.",
  //   photo: "/placeholder.svg?height=200&width=200",
  //   linkedin: "https://linkedin.com/in/david-lopez",
  //   github: "https://github.com/david-lopez",
  // },
  // {
  //   id: 6,
  //   name: "Sofia Herrera",
  //   position: "DevOps Engineer",
  //   bio: "Ingeniera DevOps especializada en AWS, Docker, Kubernetes y automatización de procesos de deployment.",
  //   photo: "/placeholder.svg?height=200&width=200",
  //   linkedin: "https://linkedin.com/in/sofia-herrera",
  //   github: "https://github.com/sofia-herrera",
  // },
]
