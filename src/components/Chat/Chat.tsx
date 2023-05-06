import { Messages } from "./Messages/Messages";
import { InputMessage } from "./InputMessage/InputMessage";
import { SignIn } from "./SignIn/SignIn";
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
