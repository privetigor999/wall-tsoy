import React from "react";
import { WrapperLayout } from "../../layout/WrapperLayout/WrapperLayout";
import { Header } from "../Header/Header";
import { Router } from "../Router";
import "./App.scss";

const App: React.FC = () => {
  return (
    <WrapperLayout>
      <Header />
      <Router />
    </WrapperLayout>
  );
};

export default App;
