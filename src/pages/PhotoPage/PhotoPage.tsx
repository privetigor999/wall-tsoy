import React from "react";
import { useTranslation } from "react-i18next";
import { SwiperList } from "../../components/SwiperList/SwiperList";
import { swiperItems } from "../../utils/data/swiperItems";

import "./photopage.scss";

export const PhotoPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="photopage">
      <h1 className="photopage__title">{t("photopage.title")}</h1>
      <div className="photopage__swipers">
        {swiperItems.map((swiperItem, i) => (
          <SwiperList {...swiperItem} order={i + 1} key={i} />
        ))}
      </div>
    </div>
  );
};
