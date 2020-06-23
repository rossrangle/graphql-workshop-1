import React from "react";

import styles from "./styles.module.scss";
import ShowType from "../shared/typography/ShowType";
import { Show } from "showkeeper-backend/src/types/graphql";
import ShowTitle from "./showTitle";

/*
  Component
*/
const ShowCard = ({ show }: { show: Show }) => {
  return (
    <div className={styles.showCard}>
      <ShowTitle title={show.title}></ShowTitle>
      <ShowType>{show.type}</ShowType>
      <span></span>
    </div>
  );
};

export default ShowCard;
