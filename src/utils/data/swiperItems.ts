import { ISwiperData } from "../../types/types";
import child1 from "./../../assets/images/photo/swiper/child/child1.png";
import child2 from "./../../assets/images/photo/swiper/child/child2.png";
import child3 from "./../../assets/images/photo/swiper/child/child3.png";
import picture1 from "./../../assets/images/photo/swiper/art/picture1.png";
import picture2 from "./../../assets/images/photo/swiper/art/picture2.png";
import picture3 from "./../../assets/images/photo/swiper/art/picture3.png";
import picture4 from "./../../assets/images/photo/swiper/art/picture4.png";
import picture5 from "./../../assets/images/photo/swiper/art/picture5.png";
import picture6 from "./../../assets/images/photo/swiper/art/picture6.png";
import concert1 from "./../../assets/images/photo/swiper/concert/concert1.png";
import concert2 from "./../../assets/images/photo/swiper/concert/concert2.png";
import concert3 from "./../../assets/images/photo/swiper/concert/concert3.png";
import cinema1 from "./../../assets/images/photo/swiper/cinema/cinema1.png";
import cinema2 from "./../../assets/images/photo/swiper/cinema/cinema2.png";
import album1 from "./../../assets/images/photo/swiper/albums/album1.png";
import album2 from "./../../assets/images/photo/swiper/albums/album2.png";
import album3 from "./../../assets/images/photo/swiper/albums/album3.png";
import album4 from "./../../assets/images/photo/swiper/albums/album4.png";

const childhood: ISwiperData = {
  title: "Юношество",
  photos: [
    {
      description: "2 года",
      photo: child1,
      background: "white",
    },
    {
      description: "8 лет",
      photo: child2,
      background: "white",
    },
    {
      description: "11 лет",
      photo: child3,
      background: "black",
    },
  ],
};

const art: ISwiperData = {
  title: "Живопись",
  photos: [
    {
      photo: picture1,
    },
    {
      photo: picture2,
    },
    {
      photo: picture3,
    },
    {
      photo: picture4,
    },
    {
      photo: picture5,
    },
    {
      photo: picture6,
    },
  ],
};

const concerts: ISwiperData = {
  title: "Концерты",
  photos: [
    {
      photo: concert1,
    },
    {
      photo: concert2,
      description: "1988 год",
      background: "white",
    },
    {
      photo: concert3,
    },
  ],
};

const cinema: ISwiperData = {
  title: "Фильмография",
  photos: [
    {
      photo: cinema1,
      description: "Фильм 'Асса'",
      background: "white",
    },
    {
      photo: cinema2,
      description: "Фильм 'Игла'",
      background: "white",
    },
  ],
};

const albums: ISwiperData = {
  title: "Дискография",
  photos: [
    {
      photo: album1,
      description: "45",
      background: "white",
    },
    {
      photo: album2,
      description: "46",
      background: "black",
    },
    {
      photo: album3,
      description: "Группа крови",
      background: "black",
    },
    {
      photo: album4,
      description: "Черный альбом",
      background: "white",
    },
  ],
};

export const swiperItems: ISwiperData[] = [
  childhood,
  art,
  concerts,
  cinema,
  albums,
];
