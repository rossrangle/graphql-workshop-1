import React from "react";

import styles from "./styles.module.scss";
import Heading from "../shared/typography/Heading";

/*
  Component
*/
const ShowTitle = ({ title }: { title: String }) => {
  return (
    <div className={styles.showTitle}>
      <div className={styles.showTitleInitial}>{title.slice(0, 1)}</div>
      <Heading level={3}>{title}</Heading>
    </div>
  );
};

export default ShowTitle;
