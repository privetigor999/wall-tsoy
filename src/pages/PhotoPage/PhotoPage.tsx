import React from "react";
import { SwiperList } from "../../components/SwiperList/swiperList";
import { swiperItems } from "../../utils/data/swiperItems";

import "./photopage.scss";

export const PhotoPage: React.FC = () => {
  return (
    <div className="photopage">
      <h1 className="photopage__title">Страница с фотографиями</h1>
      <div className="photopage__swipers">
        {swiperItems.map((swiperItem, i) => (
          <SwiperList {...swiperItem} key={i} />
        ))}
      </div>
    </div>
  );
};
