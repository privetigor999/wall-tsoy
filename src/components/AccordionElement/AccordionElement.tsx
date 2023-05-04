import React from "react";
import { AccordionItem } from "@szhsin/react-accordion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import "./accordion.scss";
import arrowSvg from "./../../assets/images/logos/arrow-top.svg";

interface IElementProps {
  index: number;
  img?: string;
}

export const AccordionElement: React.FC<IElementProps> = ({ img, index }) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <AccordionItem
      header={
        <p className="accordion__title">
          {t(`aboutpage.accordions.accordion${index + 1}.header`)}
          <a className="accordion__toggleButton">
            <img src={arrowSvg} className="accordion__arrow" alt="arrow" />
          </a>
        </p>
      }
      initialEntered={!index}
    >
      <div ref={ref}>
        <p className="accordion__content">
          {t(`aboutpage.accordions.accordion${index + 1}.content`)}
        </p>
        {inView && <img className="accordion__photo" src={img} alt="img" />}
      </div>
    </AccordionItem>
  );
};
