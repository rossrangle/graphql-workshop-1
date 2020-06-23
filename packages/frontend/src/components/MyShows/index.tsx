import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import ShowsGrid from "../ShowsGrid";
import Heading from "../shared/typography/Heading";

import styles from "./styles.module.scss";
import { User } from "showkeeper-backend";
import Button from "../shared/form/Button";

/* GQLWS1 Stage 2 */
export const USER_SHOWS = gql`
  {
    User {
      shows {
        id
        title
        watched
        type
      }
    }
  }
`;

const MyShows = () => {
  /* GQLWS1 Stage 5 */
  const { loading, error, data } = useQuery<{ User: User }>(USER_SHOWS);

  return (
    <section className={styles.section}>
      <Heading level={2}>My shows</Heading>

      {/* Loading and error states */}
      {loading && <div>Loading...</div>}
      {error && <div>Error!!!</div>}

      {/* Success state */}
      {!loading && !error && data && (
        <>
          {/* GQLWS1 Stage 5 */}
          <Button onClick={() => console.log("See all shows")}>
            Show all shows
          </Button>
          <Button onClick={() => console.log("See unwatched shows")}>
            Show unwatched shows only
          </Button>
          <Button onClick={() => console.log("See watched shows")}>
            Show watched shows only
          </Button>
          <ShowsGrid shows={data.User.shows}></ShowsGrid>
        </>
      )}
    </section>
  );
};

export default MyShows;
