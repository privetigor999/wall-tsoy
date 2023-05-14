import { Link } from "react-router-dom";

import "./navigation.scss";
import { ILink } from "../../../types/types";

interface IHeaderProps {
  links: ILink[];
}

export const HeaderTabletNavigation = ({ links }: IHeaderProps) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map((link, i) => (
          <li key={i} className="navigation__item">
            <Link to={link.route}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
