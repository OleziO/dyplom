import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

export const Modal: React.FC<Props> = ({ children, show, className }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={cn(styles.modal, className)}>{children}</div>
    </div>
  );
};
