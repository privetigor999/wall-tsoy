import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../firebase";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { setUser } from "../../../store/authReducer/authReducer";
import { useLottie } from "lottie-react";

import "./signIn.scss";
import googleSvg from "./../../../assets/images/logos/google.svg";
import attentionLottieJson from "../../../assets/lottie/attenction.json";
import { useTranslation } from "react-i18next";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

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
        <p className="signIn__text">{t("mainpage.chat.signin.info")}</p>
        <button className="signIn__button" onClick={handleClick}>
          <p>{t("mainpage.chat.signin.button")}</p>
          <img className="signIn__button-img" src={googleSvg} alt="google" />
        </button>
      </div>
    </div>
  );
};
