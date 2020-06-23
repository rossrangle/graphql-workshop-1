import React, { useState } from "react";

import styles from "./styles.module.scss";
import TextInput from "../shared/form/TextInput";
import ChooseShowType from "../ChooseShowType";
import Button from "../shared/form/Button";

/* GQLWS1 Stage 3 */
// const ADD_MY_SHOW = gql``;

/* GQLWS1 Stage 3 */
// function updateLocalCacheAddShow(
//   cache: DataProxy,
//   { data: { addMyShow } }: FetchResult<any>
// ) {

// }

const AddShowBox = () => {
  const [newShowTitle, setNewShowTitle] = useState<string>("");
  const [newShowType, setNewShowType] = useState<string>("TV");

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
          /* GQLWS1 Stage 3 */
          console.log({ newShowTitle, newShowType });
        }}
      >
        Add show
      </Button>
    </div>
  );
};

export default AddShowBox;
