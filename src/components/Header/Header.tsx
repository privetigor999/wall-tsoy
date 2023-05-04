import React from "react";
import { HamburgerThreeDYReverse } from "react-animated-burgers";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderMobileNavigationList } from "./HeaderMobileNavigationList/HeaderMobileNavigationList";
import { HeaderTabletNavigation } from "./HeaderTabletNavigation/HeaderTabletNavigation";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { routes } from "../../utils/data/router";
import { ChangerLanguageDesktop } from "./ChangerLanguageDesktop/ChangerLanguageDesktop";
import { useTranslation } from "react-i18next";

import "./header.scss";
import { ILink } from "../../types/types";

interface ICloseModalContext {
  setModalIsActive: (isActive: boolean) => void;
}

export const CloseModalContext = React.createContext<ICloseModalContext>({
  setModalIsActive: () => {},
});

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const links: ILink[] = [
    {
      title: t("links.about"),
      route: routes.about,
    },
    {
      title: t("links.photo"),
      route: routes.photo,
    },
  ];

  const [isActive, setModalIsActive] = React.useState(false);
  useDisableBodyScroll(isActive);

  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  const closeModalContextValue = React.useMemo(() => {
    return {
      setModalIsActive,
    };
  }, [setModalIsActive]);

  const toggleButton = () =>
    setModalIsActive((prevState: boolean) => !prevState);

  const handleClickOutside = (event: MouseEvent) => {
    if ((event.target as HTMLElement).className === "mobileNavigation") {
      setModalIsActive(false);
    }
  };

  return (
    <header className="headerWrapper">
      <div className="header">
        <HeaderLogo />
        <div className="header__right">
          <CloseModalContext.Provider value={closeModalContextValue}>
            {isActive ? (
              <HeaderMobileNavigationList links={links} />
            ) : (
              <HeaderTabletNavigation links={links} />
            )}
          </CloseModalContext.Provider>
          <ChangerLanguageDesktop />
        </div>
        <div className="header__hamburger">
          <HamburgerThreeDYReverse
            buttonWidth={20}
            barColor="white"
            {...{ isActive, toggleButton }}
          />
        </div>
      </div>
    </header>
  );
};
