import React from "react";
import { Link } from "react-router-dom";

import headerLogo from "./../../../assets/images/logos/headerLogo.png";
import "./headerLogo.scss";

export const HeaderLogo = React.memo(() => {
  return (
    <Link to="/" className="headerLogo">
      <img src={headerLogo} alt="logo" className="headerLogo__img" />
    </Link>
  );
});
