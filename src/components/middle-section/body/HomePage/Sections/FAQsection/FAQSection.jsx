import styles from "./FAQSection.module.css";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqsList from "./FAQsList";

const FAQSection = () => {
  return (
    <div className={styles.faq_section}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faq_container}>
        {faqsList.map(({ question, answer }, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
