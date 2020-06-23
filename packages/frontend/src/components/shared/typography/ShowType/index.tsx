import React from "react";

import styles from "./styles.module.scss";
import { ShowType as SHOW_TYPE } from "showkeeper-backend/src/types/graphql";

const ShowType = ({ children }: { children: SHOW_TYPE }) => {
  return <span className={styles.showType}>{children}</span>;
};

export default ShowType;
