import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./../../../../firebase";
import { v4 as uuidv4 } from "uuid";

import "./inputMessage.scss";
import sendSvg from "./../../../assets/images/logos/send.svg";
import { messageSchema } from "../../../utils/schema/messageSchema";

export const InputMessage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user!);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  interface IFormValue {
    message: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValue>({
    mode: "onSubmit",
    resolver: yupResolver(messageSchema),
  });

  React.useEffect(() => {
    if (inputValue.trim()) {
      return setIsTyping(true);
    } else {
      return setIsTyping(false);
    }
  }, [inputValue]);

  const onSubmit: SubmitHandler<IFormValue> = async (data) => {
    try {
      setInputValue("");
      const uuid = uuidv4();
      await setDoc(doc(db, "wall", uuid), {
        ...user,
        ...data,
        uuid,
        date: Timestamp.now(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onError = () => {
    console.log(errors.message?.message);
  };

  const styles = `input__button-img ${isTyping && "input__button-img--typing"}`;

  return (
    <div className="inputMessage">
      <form
        className="inputMessage__form"
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        <p className="inputMessage__name">Сообщение от: {user.name}</p>
        <div className="input">
          <input
            className="input__input"
            type="text"
            placeholder="Оставьте запись..."
            value={inputValue}
            {...register("message")}
            onChange={(evt) => setInputValue(evt.target.value)}
          />
          <button type="submit" className="input__button">
            <img className={styles} src={sendSvg} alt="send" />
          </button>
        </div>
      </form>
    </div>
  );
};
