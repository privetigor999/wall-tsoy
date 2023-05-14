import React from "react";
import { Link } from "react-router-dom";
import { CloseModalContext } from "..";

import headerLogo from "./../../../assets/images/logos/headerLogo.png";
import "./headerLogo.scss";

export const HeaderLogo = React.memo(() => {
  const { setModalIsActive } = React.useContext(CloseModalContext);

  const handleClickLogo = () => {
    setModalIsActive(false);
  };

  return (
    <Link onClick={handleClickLogo} to="/" className="headerLogo">
      <img src={headerLogo} alt="logo" className="headerLogo__img" />
    </Link>
  );
});
