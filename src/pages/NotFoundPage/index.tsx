import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/data/router";

import "./notfound.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickBtn = () => {
    navigate(routes.main);
  };

  return (
    <div className="notfound">
      <h1 className="notfound__title">{t("notfound.title")}</h1>
      <button onClick={handleClickBtn} className="notfound__button">
        {t("notfound.buttonText")}
      </button>
    </div>
  );
};
