import React from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { Message } from "./Message/Message";

import "./messages.scss";
import { IAuth } from "../../../types/types";

export const Messages: React.FC = () => {
  const [messages, setMessages] = React.useState<IAuth[]>([]);

  React.useEffect(() => {
    // get collection
    const wallCollectionRef = collection(db, "wall");

    // sort collection
    const sortedQuery = query(wallCollectionRef, orderBy("date", "asc"));

    // subscribe onSnapshot
    const unsubscribe = onSnapshot(sortedQuery, (snapshot) => {
      const messagesData: IAuth[] | null = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        messagesData.push({
          name: data.name,
          photo: data.photo,
          email: data.email,
          uid: data.uid,
          uuid: data.uuid,
          date: data.date,
          message: data.message,
        });
      });
      setMessages(messagesData);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="messages">
      {messages?.map((message) => (
        <Message key={message.uuid} {...message} />
      ))}
    </div>
  );
};
