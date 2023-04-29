import React from "react";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { Input } from "./Input/Input";

import "./inputMessage.scss";

export const InputMessage: React.FC = () => {
  const { name } = useAppSelector((state) => state.auth.user!);

  return (
    <div className="inputMessage">
      <form className="inputMessage__form">
        <p className="inputMessage__name">Сообщение от: {name}</p>
        <Input />
      </form>
    </div>
  );
};
