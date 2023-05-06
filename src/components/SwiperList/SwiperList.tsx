import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { useTranslation } from "react-i18next";

import "./swiperList.scss";
import "swiper/css";
import { IPhoto } from "../../types/types";

interface ISwiperProps {
  photos: IPhoto[];
  order: number;
}

export const SwiperList = ({ photos, order }: ISwiperProps) => {
  const { t } = useTranslation();

  const checkClassForSpan = React.useCallback(
    (bg: string) => bg === "black" && "swiper-slide-description--black",
    []
  );

  return (
    <div className="swiperWrapper">
      <Swiper modules={[EffectCards]} effect="cards" grabCursor>
        {photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <img
              className="swiper-slide-photo"
              src={photo.photo}
              alt="photo"
              loading="lazy"
            />
            {photo.description && (
              <span
                className={` swiper-slide-description ${photo?.background &&
                  checkClassForSpan(photo.background)}`}
              >
                {t(
                  `photopage.swipers.swiper${order}.photos.description${i + 1}`
                )}
              </span>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="swiperWrapper__title">
        {t(`photopage.swipers.swiper${order}.title`)}
      </p>
    </div>
  );
};
