import React from "react";
import { ChangerLanguagesList } from "./ChangerLanguagesList";
import { languages } from "../../../utils/data/languages";
import i18next from "i18next";

import "./changerLanguage.scss";
import worldSvg from "./../../../assets/images/logos/world.svg";

export const ChangerLanguageDesktop = React.memo(() => {
  const [isShowList, setIsShowList] = React.useState(false);

  const handleChangeLang = (lang: string): void => {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const storedLanguage = localStorage.getItem("language") || "ru";

  const findedLang = React.useCallback(() => {
    return languages.find((lang) => lang.lang === storedLanguage);
  }, [storedLanguage]);

  return (
    <button
      className="changerLanguage"
      onClick={() => setIsShowList((p) => !p)}
    >
      <img className="changerLanguage__world" src={worldSvg} alt="world" />
      {isShowList && (
        <ChangerLanguagesList
          languages={languages}
          handleChangeLang={handleChangeLang}
        />
      )}
      <img
        className="changerLanguage__currentLang"
        src={findedLang()!.flag}
        alt="current language"
      />
    </button>
  );
});
