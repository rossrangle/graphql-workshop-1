import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql, FetchResult } from "apollo-boost";
import { DataProxy } from "apollo-cache";

import styles from "./styles.module.scss";
import { USER_SHOWS } from "../MyShows";
import TextInput from "../shared/form/TextInput";
import ChooseShowType from "../ChooseShowType";
import Button from "../shared/form/Button";

/* GQLWS1 Stage 3 */
const ADD_MY_SHOW = gql`
  mutation AddMyShow($title: String!, $type: String!) {
    addMyShow(title: $title, watched: false, type: $type) {
      title
      type
      watched
      id
    }
  }
`;

// TODO: Update to take care of show watched/unwatched cache
function updateLocalCacheAddShow(
  cache: DataProxy,
  { data: { addMyShow } }: FetchResult<any>
) {
  const { User } = cache.readQuery({
    query: USER_SHOWS,
  }) as any;
  cache.writeQuery({
    query: USER_SHOWS,
    data: {
      User: {
        ...User,
        shows: User.shows.concat([addMyShow]),
      },
    },
  });
}

const AddShowBox = () => {
  const [newShowTitle, setNewShowTitle] = useState<string>("");
  const [newShowType, setNewShowType] = useState<string>("TV");

  const [addMyNewShow, { loading: mutationRunning }] = useMutation(
    ADD_MY_SHOW,
    {
      update: updateLocalCacheAddShow,
    }
  );

  return (
    <div className={styles.addShowBox}>
      <TextInput
        label="Show name:"
        onChange={(e: any) => setNewShowTitle(e.target.value)}
        value={newShowTitle}
      ></TextInput>

      <ChooseShowType onChange={setNewShowType}></ChooseShowType>

      <Button
        onClick={() => {
          addMyNewShow({
            variables: { title: newShowTitle, type: newShowType },
          });
          setNewShowTitle("");
        }}
        disabled={mutationRunning}
      >
        Add show
      </Button>
    </div>
  );
};

export default AddShowBox;
