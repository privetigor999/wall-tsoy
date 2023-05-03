import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import "./swiperList.scss";
import "swiper/css";
import { ISwiperData } from "../../types/types";

export const SwiperList: React.FC<ISwiperData> = ({ title, photos }) => {
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
                {photo.description}
              </span>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="swiperWrapper__title">{title}</p>
    </div>
  );
};
