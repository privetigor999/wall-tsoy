import { Chat } from "../../components/Chat/Chat";

import "./mainpage.scss";
import wallPng from "./../../assets/images/photo/wall.png";

export const MainPage: React.FC = () => {
  return (
    <div className="mainpage">
      <h1 className="mainpage__title">
        Эта страничка посвящена советскому рок-музыканту Виктору Цою
      </h1>
      <img className="mainpage__wall" src={wallPng} alt="wall" />
      <p className="mainpage__text">
        «Стена Цоя» — стена дома №37 по Арбату, выходящая в Кривоарбатский
        переулок Москвы, которую поклонники творчества Виктора Цоя исписали
        надписями «Кино», «Цой жив», цитатами из песен и признаниями в любви
        музыканту. Представляет собой памятник, символ Арбата и
        достопримечательность Москвы.
      </p>
      <p className="mainpage__text mainpage__text-bg">
        Наш сервис предлагает оставить надпись на виртуальной стене Виктора Цоя.
        Это поможет любителям и фанатам музыканта, которые не имеют возможности
        посетить "настоящую" стену, которая находится на улице Арбат в городе
        Москве.
      </p>
      <Chat />
    </div>
  );
};
