import { Accordion } from "@szhsin/react-accordion";
import { AccordionElement } from "../../components/AccordionElement/AccordionElement";
import { useTranslation } from "react-i18next";

import { accordionItems } from "../../utils/data/accordionItems";
import "./aboutArtist.scss";

export const AboutArtist = () => {
  const { t } = useTranslation();
  return (
    <div className="aboutArtist">
      <h1 className="aboutArtist__title">{t("aboutpage.title")}</h1>
      <Accordion allowMultiple>
        {accordionItems.map((accordionItem, i) => (
          <AccordionElement key={i} index={i} {...accordionItem} />
        ))}
      </Accordion>
    </div>
  );
};
