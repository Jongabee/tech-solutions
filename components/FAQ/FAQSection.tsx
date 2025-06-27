import { Accordion, AccordionDetails, AccordionSummary, Typography, Container, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: '¿Qué tipo de sitios web desarrollan?',
    answer: 'Desarrollamos sitios web modernos, responsivos, optimizados para SEO y adaptados a tus objetivos comerciales.',
  },
  {
    question: '¿Pueden crear una app para iOS y Android al mismo tiempo?',
    answer: 'Sí. Usamos tecnologías híbridas como React Native o Flutter para desarrollar apps que funcionen en ambos sistemas operativos con una sola base de código.',
  },
  {
    question: '¿Qué incluye el software personalizado?',
    answer: 'Analizamos tus procesos, diseñamos una solución a medida y la desarrollamos con tecnologías modernas, asegurando una perfecta adaptación a tus necesidades.',
  },
  {
    question: '¿Cómo visualizan mis datos?',
    answer: 'Creamos dashboards interactivos usando herramientas como Power BI, Tableau o tecnologías web personalizadas, enfocándonos en insights accionables.',
  },
  {
    question: '¿Qué procesos pueden automatizar?',
    answer: 'Automatizamos tareas repetitivas como generación de reportes, envíos de correos, integración entre plataformas o flujos internos usando scripts, bots o RPA.',
  },
  {
    question: '¿Pueden migrar mi información de un sistema viejo a uno nuevo?',
    answer: 'Sí. Realizamos migraciones seguras, planificadas y probadas entre bases de datos, servidores, CRMs, ERPs o cualquier otro sistema.',
  },
  {
    question: '¿Trabajan con servicios en la nube?',
    answer: 'Sí. Migramos infraestructuras a la nube (AWS, Azure, GCP), optimizamos costos y aseguramos escalabilidad y disponibilidad.',
  },
];

const FAQSection = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Preguntas Frecuentes
      </Typography>
      <Box mt={4}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQSection;