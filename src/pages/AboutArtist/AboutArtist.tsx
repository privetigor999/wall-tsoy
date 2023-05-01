import React from "react";
import { Accordion } from "@szhsin/react-accordion";
import { AccordionElement } from "./AccordionElement/AccordionElement";

import { accordionItems } from "../../utils/data/accordionItems";
import "./aboutArtist.scss";

export const AboutArtist: React.FC = () => {
  return (
    <div className="aboutArtist">
      <h1 className="aboutArtist__title">О музыканте</h1>
      <Accordion allowMultiple>
        {accordionItems.map((accordionItem, i) => (
          <AccordionElement key={i} index={i} {...accordionItem} />
        ))}
      </Accordion>
    </div>
  );
};
