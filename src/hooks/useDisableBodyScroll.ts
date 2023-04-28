import { ReactNode, useEffect } from "react";

export const useDisableBodyScroll = (open: ReactNode) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
};
