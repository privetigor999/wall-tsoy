import React from "react";
import { useNavigate } from "react-router-dom";
import { CloseModalContext } from "../../Header";

import "./navItem.scss";

interface IProps {
  route: string;
  title: string;
}

export const HeaderMobileNavigationItem = ({ title, route }: IProps) => {
  const { setModalIsActive } = React.useContext(CloseModalContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
    setModalIsActive(false);
  };

  return (
    <li className="navItem" onClick={handleClick}>
      <a>{title}</a>
    </li>
  );
};
