import { HeaderMobileNavigationItem } from "./HeaderMobileNavigationItem";
import { routes } from "../../../utils/data/router";
import { useTranslation } from "react-i18next";
import { ChangerLanguageMobile } from "./ChangerLanguageMobile";

import { ILink } from "../../../types/types";
import "./mobileNavigation.scss";

interface IHeaderProps {
  links: ILink[];
}

export const HeaderMobileNavigationList = ({ links }: IHeaderProps) => {
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
