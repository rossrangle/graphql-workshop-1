import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql, FetchResult } from "apollo-boost";
import { DataProxy } from "apollo-cache";

import styles from "./styles.module.scss";
import { USER_SHOWS } from "../MyShows";
import { Show } from "showkeeper-backend";
import Button from "../shared/form/Button";

const DELETE_MY_SHOW = gql`
  mutation DeleteMyShow($id: String!) {
    deleteMyShow(id: $id) {
      id
    }
  }
`;

// TODO: Update to take care of show watched/unwatched cache
function updateLocalCacheRemoveMyShow(
  cache: DataProxy,
  { data: { deleteMyShow } }: FetchResult<any>
) {
  const { User } = cache.readQuery({
    query: USER_SHOWS,
    variables: { watched: null },
  }) as any;

  cache.writeQuery({
    query: USER_SHOWS,
    variables: { watched: null },
    data: {
      User: {
        ...User,
        shows: User.shows.filter((show: Show) => show.id !== deleteMyShow.id),
      },
    },
  });
}

const DeleteMyShow = ({ id }: { id: String }) => {
  const [deleteShowMutation, { loading: mutationRunning }] = useMutation(
    DELETE_MY_SHOW,
    {
      update: updateLocalCacheRemoveMyShow,
    }
  );

  return (
    <div className={styles.deleteHolder}>
      <Button
        onClick={() => {
          deleteShowMutation({
            variables: { id },
          });
        }}
        disabled={mutationRunning}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteMyShow;
