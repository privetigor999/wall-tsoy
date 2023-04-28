import React from "react";
import { Link } from "react-router-dom";

import "./navItem.scss";

interface IProps {
  route: string;
  title: string;
}

export const HeaderMobileNavigationItem: React.FC<IProps> = ({
  title,
  route,
}) => {
  return (
    <li className="navItem">
      <Link to={route}>{title}</Link>
    </li>
  );
};
