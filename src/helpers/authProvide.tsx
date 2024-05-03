import React from "react";
// import { SignIn } from "../pages/signin";

interface Props {
  children: React.ReactNode;
}

export const AuthProvide: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};
