import React from "react";
import { ChangerLanguagesList } from "./ChangerLanguagesList/ChangerLanguagesList";
import { languages } from "../../../utils/data/languages";
import i18next from "i18next";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { setCurrentState } from "../../../store/languageReducer/languageReducer";

import "./changerLanguage.scss";
import worldSvg from "./../../../assets/images/logos/world.svg";

export const ChangerLanguage: React.FC = React.memo(() => {
  const [isShowList, setIsShowList] = React.useState(false);
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );

  const handleChangeLang = (lang: string): void => {
    i18next.changeLanguage(lang);
    dispatch(setCurrentState(lang));
  };

  const findedLang = React.useCallback(() => {
    return languages.find((lang) => lang.lang === currentLanguage);
  }, [currentLanguage]);

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
