import React from "react";

import "./wrapperLayout.scss";

interface IWrapperProps {
  children: React.ReactNode;
}

export const WrapperLayout: React.FC<IWrapperProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};
