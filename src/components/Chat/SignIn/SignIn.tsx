import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../../../../firebase";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { setUser } from "../../../store/authReducer/authReducer";
import { useLottie } from "lottie-react";

import "./signIn.scss";
import googleSvg from "./../../../assets/images/logos/google.svg";
import attentionLottieJson from "./../../../assets/lottie/attenction.json";

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      dispatch(
        setUser({
          name: data.user.displayName,
          photo: data.user.photoURL,
          email: data.user.email,
          uid: data.user.uid,
        })
      );
    });
  };

  const options = {
    animationData: attentionLottieJson,
    loop: true,
  };

  const stylesLottie = {
    width: 40,
    height: 40,
  };

  const { View } = useLottie(options, stylesLottie);
  return (
    <div className="signIn">
      <div>{View}</div>
      <div className="signIn__block">
        <p className="signIn__text">
          Чтобы оставить запись, нужно авторизоваться
        </p>
        <button className="signIn__button" onClick={handleClick}>
          <p>Войти через Google</p>
          <img className="signIn__button-img" src={googleSvg} alt="google" />
        </button>
      </div>
    </div>
  );
};
