import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./../../../../firebase";
import { v4 as uuidv4 } from "uuid";
import { smallAalert, errorAlert } from "../../../utils/sweetalert";
import { useTranslation } from "react-i18next";

import "./inputMessage.scss";
import sendSvg from "./../../../assets/images/logos/send.svg";
import { messageSchema } from "../../../utils/schema/messageSchema";

interface IFormValue {
  message: string;
}

export const InputMessage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user!);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormValue>({
    mode: "onSubmit",
    resolver: yupResolver(messageSchema),
  });

  const onSubmit: SubmitHandler<IFormValue> = async () => {
    try {
      const uuid = uuidv4();
      await setDoc(doc(db, "wall", uuid), {
        ...user,
        ...getValues(),
        uuid,
        date: Timestamp.now(),
      });

      smallAalert.fire({
        icon: "success",
        title: `${t("mainpage.chat.alert.success.title")}`,
        text: `${t("mainpage.chat.alert.success.text")} ${getValues().message}`,
      });

      reset();
    } catch (error) {
      errorAlert.fire({
        icon: "warning",
        title: `${t("mainpage.chat.alert.warning.title")}`,
      });
    }
  };

  const onError = () => {
    smallAalert.fire({
      icon: "error",
      title: errors?.message?.message,
      text: `${t("mainpage.chat.alert.error.text")}`,
    });
  };

  return (
    <div className="inputMessage">
      <form
        className="inputMessage__form"
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        <p className="inputMessage__name">
          {t("mainpage.chat.input.from")} {user.name}
        </p>
        <div className="input">
          <input
            className="input__input"
            type="text"
            placeholder={t("mainpage.chat.input.placeholder") as string}
            {...register("message")}
          />
          <button type="submit" className="input__button">
            <img className="input__button-img" src={sendSvg} alt="send" />
          </button>
        </div>
      </form>
    </div>
  );
};
