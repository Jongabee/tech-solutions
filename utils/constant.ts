export const aboutName = "ko-deka"

export const aboutEmail = "soporte@ko-deka.com"

export const aboutPhone = "+56934330275"

export const aboutPhoneLink = `https://wa.me/${aboutPhone}?text=${encodeURIComponent(
  '¡Hola! Me interesa conocer más sobre sus servicios de desarrollo de plataformas digitales. ¿Podrían brindarme más información?'
)}`

export const aboutWebSite = "www.ko-deka.com"

export const aboutInsta = "https://instagram.com/asd"

export const aboutLinkedin = "https://linkedin.com/in/asd"

export const aboutGithub = "https://github.com/asd"

export const aboutFacebook = "https://facebook.com/asd"

export const aboutTwitter = "https://twitter.com/asd"

//logos del header para mantener el modo oscuro y claro
export const aboutLogoLight = "/logoConNombreBlanco.png"
export const aboutLogoDark = "/logoConNombreNegro.png"

export const logoEmail = "https://res.cloudinary.com/dhemrtneb/image/upload/v1750973901/logoConNombre_wvpsxm.png"

export const WHATSAPP_CONFIG = {
  phoneNumber: process.env.WHATSAPP_NUMBER || `${aboutPhone}`,

  defaultMessages: {
    es: "¡Hola! Me interesa conocer más sobre sus servicios de desarrollo de plataformas digitales. ¿Podrían brindarme más información?",
    en: "Hello! I'm interested in learning more about your digital platform development services. Could you provide me with more information?",
    pt: "Olá! Estou interessado em saber mais sobre seus serviços de desenvolvimento de plataformas digitais. Poderiam me fornecer mais informações?",
  },
}
