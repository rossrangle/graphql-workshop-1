import React from "react";

import styles from "./styles.module.scss";
import WatchedToggle from "../WatchedToggle";
import ShowType from "../shared/typography/ShowType";
import { Show } from "showkeeper-backend/src/types/graphql";
import DeleteMyShow from "../DeleteMyShow";
import ShowTitle from "./showTitle";

/*
  Component
*/
const ShowCard = ({ show }: { show: Show }) => {
  return (
    <div
      className={`${styles.showCard} ${
        show.watched ? styles.watched : styles.towatch
      }`}
    >
      <ShowTitle title={show.title}></ShowTitle>
      <ShowType>{show.type}</ShowType>
      <WatchedToggle show={show}></WatchedToggle>
      <DeleteMyShow id={show.id}></DeleteMyShow>
    </div>
  );
};

export default ShowCard;
