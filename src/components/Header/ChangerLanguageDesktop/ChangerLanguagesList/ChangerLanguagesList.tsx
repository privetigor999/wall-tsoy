import { ILanguage } from "../../../../types/types";
import "./changerLanguagesList.scss";

interface IListProps {
  languages: ILanguage[];
  handleChangeLang: (lang: string) => void;
}

export const ChangerLanguagesList = ({
  languages,
  handleChangeLang,
}: IListProps) => {
  return (
    <ul className="changerLanguagesList">
      {languages.map((lang) => (
        <li key={lang.lang} className="changerLanguagesList__item">
          <a
            className="changerLanguagesList__link"
            onClick={() => handleChangeLang(lang.lang)}
          >
            <p className="changerLanguagesList__link-lang">{lang.lang}</p>
            <img
              className="changerLanguagesList__link-flag"
              src={lang.flag}
              alt={lang.lang}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
