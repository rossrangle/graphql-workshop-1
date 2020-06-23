import React from "react";

import ShowsGrid from "../ShowsGrid";
import Heading from "../shared/typography/Heading";

import styles from "./styles.module.scss";
import { User, ShowType } from "showkeeper-backend";

/* GQLWS1 Stage 2 */
// export const USER_SHOWS = gql``;

const MyShows = () => {
  const loading = false;
  const error = false;

  // We want data from the server in this shape
  const data: { User: User } = {
    User: {
      id: "",
      shows: [
        {
          title: "Test show 1",
          type: "TV" as ShowType,
          id: "1",
          watched: false,
        },
        {
          title: "Test show 2",
          type: "Movie" as ShowType,
          id: "2",
          watched: false,
        },
        {
          title: "Test show 3",
          type: "TV" as ShowType,
          id: "3",
          watched: false,
        },
      ],
      name: "",
    },
  };

  return (
    <section className={styles.section}>
      <Heading level={2}>My shows</Heading>

      {/* Loading and error states */}
      {loading && <div>Loading...</div>}
      {error && <div>Error!!!</div>}

      {/* Success state */}
      {!loading && !error && data && (
        <ShowsGrid shows={data.User.shows}></ShowsGrid>
      )}
    </section>
  );
};

export default MyShows;
