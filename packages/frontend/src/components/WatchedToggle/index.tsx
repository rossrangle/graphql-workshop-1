import React from "react";
import { Show } from "showkeeper-backend/src/types/graphql";

import styles from "./styles.module.scss";
import Button from "../shared/form/Button";

/* GQLWS1 Stage 4 */
// const TOGGLE_WATCHED = gql``;

const WatchedToggle = ({ show }: { show: Show }) => {
  return (
    <div className={styles.toggleHolder}>
      {show.watched ? "Watched" : "Still to watch"}
      <Button onClick={() => {}}>Toggle</Button>
    </div>
  );
};

export default WatchedToggle;
