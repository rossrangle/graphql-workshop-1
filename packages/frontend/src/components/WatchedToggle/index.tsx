import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Show } from "showkeeper-backend/src/types/graphql";

import styles from "./styles.module.scss";
import Button from "../shared/form/Button";

/* GQLWS1 Stage 4 */
const TOGGLE_WATCHED = gql`
  mutation ToggleWatched(
    $id: String!
    $title: String!
    $watched: Boolean
    $type: String!
  ) {
    updateMyShow(id: $id, title: $title, watched: $watched, type: $type) {
      watched
      id
    }
  }
`;

const WatchedToggle = ({ show }: { show: Show }) => {
  const [toggleWatchedMutation] = useMutation(TOGGLE_WATCHED);

  return (
    <div className={styles.toggleHolder}>
      {show.watched ? "Watched" : "Still to watch"}
      <Button
        onClick={() => {
          toggleWatchedMutation({
            variables: { ...show, watched: !Boolean(show.watched) },
          });
        }}
      >
        Toggle
      </Button>
    </div>
  );
};

export default WatchedToggle;
