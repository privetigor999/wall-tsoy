import React from "react";
import i18next from "i18next";
import { languages } from "../../../../utils/data/languages";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { setCurrentLanguage } from "../../../../store/languageReducer/languageReducer";
import { useTranslation } from "react-i18next";

import "./changerLanguageMobile.scss";

export const ChangerLanguageMobile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );

  const handleChangeLang = (lang: string): void => {
    dispatch(setCurrentLanguage(lang));
    i18next.changeLanguage(lang);
  };

  const classNameButton = (lang: string): string => {
    return `changerLanguageMobile__button ${lang === currentLanguage &&
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
