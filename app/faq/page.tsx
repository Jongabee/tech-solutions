import FAQSection from '@/components/FAQ/FAQSection';
import { aboutName } from '@/utils/constant';
import { Metadata, NextPage } from 'next';


export const metadata: Metadata = {
  title: `Preguntas frecuentes - ${aboutName}`,
  description: "Conoce nuestros servicios de desarrollo web, aplicaciones móviles, cloud computing y más.",
}

const FaqPage: NextPage = () => {
  return <FAQSection />;
};

export default FaqPage;