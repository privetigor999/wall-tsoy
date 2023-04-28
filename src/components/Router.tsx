import { Route, Routes } from "react-router-dom";
import { AboutArtist } from "../pages/AboutArtist/AboutArtist";
import { MainPage } from "../pages/MainPage/MainPage";
import { Photo } from "../pages/Photo/Photo";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutArtist />} />
      <Route path="/photo" element={<Photo />} />
    </Routes>
  );
};
