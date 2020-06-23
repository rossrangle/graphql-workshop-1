import React from "react";

import styles from "./styles.module.scss";

const TextInput = ({
  label,
  value,
  onChange,
}: {
  label: String;
  value: string | number | string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className={styles.textinput}>
      {label}
      <input onChange={onChange} value={value}></input>
    </label>
  );
};

export default TextInput;
