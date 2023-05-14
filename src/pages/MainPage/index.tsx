import { Chat } from "../../components/Chat";
import { useTranslation } from "react-i18next";

import "./mainpage.scss";
import wallPng from "./../../assets/images/photo/wall-horizontal.png";

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mainpage">
      <h1 className="mainpage__title">{t("mainpage.title")}</h1>
      <img className="mainpage__wall" src={wallPng} alt="wall" />
      <p className="mainpage__text">{t("mainpage.description")}</p>
      <p className="mainpage__text mainpage__text-bg">
        {t("mainpage.infoblock")}
      </p>
      <Chat />
    </div>
  );
};
