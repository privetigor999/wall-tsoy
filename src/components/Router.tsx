import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutArtist } from "../pages/AboutArtist/AboutArtist";
import { MainPage } from "../pages/MainPage/MainPage";
import { PhotoPage } from "../pages/PhotoPage/PhotoPage";
import { routes } from "../utils/data/router";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<MainPage />} />
      <Route path={routes.about} element={<AboutArtist />} />
      <Route path={routes.photo} element={<PhotoPage />} />
    </Routes>
  );
};
