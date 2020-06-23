import React, { useState } from "react";

import styles from "./styles.module.scss";

const ChooseShowType = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  const [val, setVal] = useState<string>("TV");

  function radioValueChanged(e: any) {
    setVal(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div className={styles.chooseShowTypeBox}>
      <label>
        TV Show
        <input
          type="radio"
          name="showType"
          value={"TV"}
          onClick={radioValueChanged}
          checked={val === "TV"}
          readOnly
        />
      </label>
      <label>
        Movie
        <input
          type="radio"
          name="showType"
          value={"MOVIE"}
          onClick={radioValueChanged}
          checked={val === "MOVIE"}
          readOnly
        />
      </label>
    </div>
  );
};

export default ChooseShowType;
