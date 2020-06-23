import React from "react";

import styles from "./styles.module.scss";

const Button = ({
  onClick,
  disabled,
  children,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  children: any;
}) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
