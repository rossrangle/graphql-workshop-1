import React from "react";

import styles from "./styles.module.scss";
import ShowCard from "../ShowCard";
import { Show } from "showkeeper-backend/src/types/graphql";
import { Maybe } from "graphql/jsutils/Maybe";

const ShowsGrid = ({ shows }: { shows: Maybe<Show>[] | undefined }) => {
  return (
    <section className={styles.section}>
      {shows &&
        shows.map(
          (show) => show && <ShowCard show={show} key={show.title}></ShowCard>
        )}
    </section>
  );
};

export default ShowsGrid;
