import React from "react";
import { HeaderMobileNavigationItem } from "./HeaderMobileNavigationItem/HeaderMobileNavigationItem";

import { ILink } from "../../../types/types";
import "./mobileNavigation.scss";

interface IHeaderProps {
  links: ILink[];
}

export const HeaderMobileNavigationList: React.FC<IHeaderProps> = ({
  links,
}) => {
  const updatedLinks = [{ route: "/", title: "Стена Цоя" }, ...links];

  return (
    <div className="mobileNavigation">
      <h1 className="mobileNavigation__title">Меню раздела</h1>
      <nav>
        <ul className="mobileNavigation__list">
          {updatedLinks.map((link, i) => (
            <HeaderMobileNavigationItem key={i} {...link} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
