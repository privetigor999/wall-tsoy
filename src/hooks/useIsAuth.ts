import { useAppSelector } from "./useAppSelector";

export const useIsAuth = () => {
  const name = useAppSelector((state) => state.auth.user?.name);

  return name;
};
