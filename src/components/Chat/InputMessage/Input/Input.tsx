import React from "react";

import "./input.scss";
import sendSvg from "./../../../../assets/images/logos/send.svg";

export const Input: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  React.useEffect(() => {
    if (inputValue.trim()) {
      return setIsTyping(true);
    } else {
      return setIsTyping(false);
    }
  }, [inputValue]);

  const styles = `input__button-img ${isTyping && "input__button-img--typing"}`;

  return (
    <div className="input">
      <input
        className="input__input"
        type="text"
        placeholder="Оставьте запись..."
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
      />
      <button className="input__button">
        <img className={styles} src={sendSvg} alt="send" />
      </button>
    </div>
  );
};
