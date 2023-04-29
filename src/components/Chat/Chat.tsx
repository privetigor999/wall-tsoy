//@ts-nocheck

import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../../../firebase";
import { Messages } from "./Messages/Messages";
import { InputMessage } from "./InputMessage/InputMessage";
import { SignIn } from "./SignIn/SignIn";
import { useAppSelector } from "../../hooks/redux-hooks";

import "./chat.scss";

export const Chat: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="chat">
      <Messages />
      {user ? <InputMessage /> : <SignIn />}
    </div>
  );
};
