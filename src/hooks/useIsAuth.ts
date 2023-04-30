import { useAppSelector } from "./redux-hooks";

export const useIsAuth = () => {
  const name = useAppSelector((state) => state.auth.user?.name);

  return name;
};
