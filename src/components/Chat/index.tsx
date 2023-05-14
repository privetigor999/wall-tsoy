import { Messages } from "./Messages";
import { InputMessage } from "./InputMessage";
import { SignIn } from "./SignIn";
import { useAppSelector } from "../../hooks/useAppSelector";

import "./chat.scss";

export const Chat = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="chat">
      <Messages />
      {user ? <InputMessage /> : <SignIn />}
    </div>
  );
};
