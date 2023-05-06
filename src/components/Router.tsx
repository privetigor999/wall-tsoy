import { Route, Routes } from "react-router-dom";
import { AboutArtist } from "../pages/AboutArtist/AboutArtist";
import { MainPage } from "../pages/MainPage/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { PhotoPage } from "../pages/PhotoPage/PhotoPage";
import { routes } from "../utils/data/router";

export const Router = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<MainPage />} />
      <Route path={routes.about} element={<AboutArtist />} />
      <Route path={routes.photo} element={<PhotoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
