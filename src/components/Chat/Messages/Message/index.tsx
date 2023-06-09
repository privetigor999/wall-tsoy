import React from "react";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { formatTimestamp } from "../../../../utils/formatTimestamp";

import "./message.scss";

interface IMessageProps {
  photo: string;
  name: string;
  message: string;
  uid: string;
  date: { nanoseconds: number; seconds: number };
}

export const Message = ({ photo, name, message, date, uid }: IMessageProps) => {
  const userid = useAppSelector((state) => state.auth.user?.uid);
  const messageRef = React.useRef<HTMLElement | null>(null);
  const formattedDate = React.useMemo(() => formatTimestamp(date.seconds), [
    date.seconds,
  ]);

  const classForArticle = `message ${uid === userid && "message--self"}`;

  React.useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });

    return () => {
      window.scrollTo(0, 0);
    };
  }, [message]);

  return (
    <article className={classForArticle} ref={messageRef}>
      <img className="message__avatar" src={photo} alt="photo" />
      <div className="message__block">
        <div className="message__outer">
          <p className="message__block-name">{name}</p>
          <span className="message__block-date">{formattedDate}</span>
        </div>
        <p className="message__block-message">{message}</p>
      </div>
    </article>
  );
};
