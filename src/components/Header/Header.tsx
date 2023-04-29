import React from "react";
import { HamburgerThreeDYReverse } from "react-animated-burgers";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderMobileNavigationList } from "./HeaderMobileNavigationList/HeaderMobileNavigationList";
import { HeaderTabletNavigation } from "./HeaderTabletNavigation/HeaderTabletNavigation";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

import "./header.scss";
import { ILink } from "../../types/types";

interface ICloseModalContext {
  setModalIsActive: (isActive: boolean) => void;
}

export const CloseModalContext = React.createContext<ICloseModalContext>({
  setModalIsActive: () => {},
});

export const Header: React.FC = () => {
  const [isActive, setModalIsActive] = React.useState(false);
  useDisableBodyScroll(isActive);

  const toggleButton = () =>
    setModalIsActive((prevState: boolean) => !prevState);

  const links: ILink[] = [
    {
      title: "О музыканте",
      route: "/about",
    },
    {
      title: "Фотографии",
      route: "/photo",
    },
  ];

  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (event: MouseEvent) => {
    if ((event.target as HTMLElement).className === "mobileNavigation") {
      setModalIsActive(false);
    }
  };

  const closeModalContextValue = React.useMemo(() => {
    return {
      setModalIsActive,
    };
  }, [setModalIsActive]);

  return (
    <header className="header">
      <HeaderLogo />

      {isActive ? (
        <CloseModalContext.Provider value={closeModalContextValue}>
          <HeaderMobileNavigationList links={links} />
        </CloseModalContext.Provider>
      ) : (
        <HeaderTabletNavigation links={links} />
      )}

      <div className="header__hamburger">
        <HamburgerThreeDYReverse
          buttonWidth={20}
          barColor="white"
          {...{ isActive, toggleButton }}
        />
      </div>
    </header>
  );
};
