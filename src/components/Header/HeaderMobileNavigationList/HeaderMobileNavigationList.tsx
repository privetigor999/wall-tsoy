import React from "react";
import { HeaderMobileNavigationItem } from "./HeaderMobileNavigationItem/HeaderMobileNavigationItem";
import { routes } from "../../../utils/data/router";
import { useTranslation } from "react-i18next";

import { ILink } from "../../../types/types";
import "./mobileNavigation.scss";
import { ChangerLanguageMobile } from "./ChangerLanguageMobile/ChangerLanguageMobile";

interface IHeaderProps {
  links: ILink[];
}

export const HeaderMobileNavigationList: React.FC<IHeaderProps> = ({
  links,
}) => {
  const { t } = useTranslation();
  const updatedLinks = [
    { route: routes.main, title: t("links.main") },
    ...links,
  ];

  return (
    // при изменении названия класса mobileNavigation не забудь поменять так же названия класса в файле Header.tsx в функции обработчике handleClickOutside
    <div className="mobileNavigation">
      <h1 className="mobileNavigation__title">{t("links.menu")}</h1>
      <nav>
        <ul className="mobileNavigation__list">
          {updatedLinks.map((link, i) => (
            <HeaderMobileNavigationItem key={i} {...link} />
          ))}
        </ul>
      </nav>
      <ChangerLanguageMobile />
    </div>
  );
};
