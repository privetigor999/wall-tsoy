import React from "react";

import { HamburgerThreeDYReverse } from "react-animated-burgers";
import { ILink } from "../../types/types";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderMobileNavigationList } from "./HeaderMobileNavigationList/HeaderMobileNavigationList";
import { HeaderTabletNavigation } from "./HeaderTabletNavigation/HeaderTabletNavigation";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

import "./header.scss";

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

  return (
    <header className="header">
      <HeaderLogo />

      {isActive ? (
        <HeaderMobileNavigationList links={links} />
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
