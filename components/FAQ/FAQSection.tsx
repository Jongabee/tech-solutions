"use client"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

const FAQSection = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const faqs = [
    {
      question: t('faq.ask.typeWeb'),
      answer: t('faq.response.typeWebResponse'),
    },
    {
      question: t('faq.ask.appIOSAndroid'),
      answer: t('faq.response.appIOSAndroidResponse'),
    },
    {
      question: t('faq.ask.inSoftPer'),
      answer: t('faq.response.inSoftPerResponse'),
    },
    {
      question: t('faq.ask.dataView'),
      answer: t('faq.response.dataViewResponse'),
    },
    {
      question: t('faq.ask.autoProcess'),
      answer: t('faq.response.autoProcessResponse'),
    },
    {
      question: t('faq.ask.oldNewSistem'),
      answer: t('faq.response.oldNewSistemResponse'),
    },
    {
      question: t('faq.ask.cloudServices'),
      answer: t('faq.response.cloudServicesResponse'),
    },
  ];

  const handleChange = (index: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedIndex(isExpanded ? index : false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {t("navigation.FAQ")}
      </Typography>
      <Box mt={4}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onChange={handleChange(index)}
          >
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
