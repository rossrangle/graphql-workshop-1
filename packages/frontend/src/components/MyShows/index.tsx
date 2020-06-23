import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import ShowsGrid from "../ShowsGrid";
import Heading from "../shared/typography/Heading";

import styles from "./styles.module.scss";
import { User } from "showkeeper-backend";
import Button from "../shared/form/Button";

/* GQLWS1 Stage 2 */
export const USER_SHOWS = gql`
  query GetUserShows($watched: Boolean) {
    User {
      shows(watched: $watched) {
        id
        title
        watched
        type
      }
    }
  }
`;

const MyShows = () => {
  const [
    displayShowWatchedType,
    setDisplayShowWatchedType,
  ] = useState<Boolean | null>(null);

  /* GQLWS1 Stage 5 */
  const { loading, error, data } = useQuery<{ User: User }>(USER_SHOWS, {
    variables: { watched: displayShowWatchedType },
  });

  return (
    <section className={styles.section}>
      <Heading level={2}>My shows</Heading>

      {/* Loading and error states */}
      {loading && <div>Loading...</div>}
      {error && <div>Error!!!</div>}

      {/* Success state */}
      {!loading && !error && data && (
        <>
          <Button onClick={() => setDisplayShowWatchedType(null)}>
            Show all shows
          </Button>
          <Button onClick={() => setDisplayShowWatchedType(false)}>
            Show unwatched shows only
          </Button>
          <Button onClick={() => setDisplayShowWatchedType(true)}>
            Show watched shows only
          </Button>
          <ShowsGrid shows={data.User.shows}></ShowsGrid>
        </>
      )}
    </section>
  );
};

export default MyShows;
