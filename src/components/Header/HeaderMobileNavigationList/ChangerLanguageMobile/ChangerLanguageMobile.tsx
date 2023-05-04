import React from "react";
import i18next from "i18next";
import { languages } from "../../../../utils/data/languages";
import { useTranslation } from "react-i18next";

import "./changerLanguageMobile.scss";

export const ChangerLanguageMobile: React.FC = () => {
  const { t } = useTranslation();
  const storedLanguage = localStorage.getItem("language") || "ru";

  const handleChangeLang = (lang: string): void => {
    localStorage.setItem("language", lang);
    i18next.changeLanguage(lang);
  };

  const classNameButton = (lang: string): string => {
    return `changerLanguageMobile__button ${lang === storedLanguage &&
      "changerLanguageMobile__button--active"}`;
  };

  return (
    <div className="changerLanguageMobile">
      <p className="changerLanguageMobile__text">
        {t("utils.choose_language")}:
      </p>
      <div className="changerLanguageMobile__buttons">
        {languages.map((language) => (
          <button
            onClick={() => handleChangeLang(language.lang)}
            className={classNameButton(language.lang)}
            key={language.lang}
          >
            <p className="changerLanguageMobile__lang">{language.lang}</p>
            <img
              className="changerLanguageMobile__flag"
              src={language.flag}
              alt={language.lang}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
