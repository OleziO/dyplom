import React from "react";
import styles from "./styles.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: string;
}

export const Button: React.FC<Props> = ({ children, styleType, type }) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
};
