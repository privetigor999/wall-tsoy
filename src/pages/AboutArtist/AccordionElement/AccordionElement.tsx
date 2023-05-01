import React from "react";
import { AccordionItem } from "@szhsin/react-accordion";
import { useInView } from "react-intersection-observer";

import "./accordion.scss";
import arrowSvg from "./../../../assets/images/logos/arrow-top.svg";

interface IElementProps {
  header: string;
  content: string;
  index: number;
  img?: string;
}

export const AccordionElement: React.FC<IElementProps> = ({
  header,
  content,
  img,
  index,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <AccordionItem
      header={
        <p className="accordion__title">
          {header}
          <a className="accordion__toggleButton">
            <img src={arrowSvg} className="accordion__arrow" alt="arrow" />
          </a>
        </p>
      }
      initialEntered={!index}
    >
      <div ref={ref}>
        <p className="accordion__content">{content}</p>
        {inView && <img className="accordion__photo" src={img} alt="img" />}
      </div>
    </AccordionItem>
  );
};
