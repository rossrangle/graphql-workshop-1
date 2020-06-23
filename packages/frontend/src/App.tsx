import React from "react";

import Heading from "./components/shared/typography/Heading";
import "./App.scss";
import Paragraph from "./components/shared/typography/Paragraph";
import MyShows from "./components/MyShows";
import AddShowBox from "./components/AddShowBox";

function App() {
  return (
    <div className="App">
      <Heading level={1}>Show Keeper</Heading>
      <Paragraph>
        This is a simple app that stores the TV shows and movies you want to
        watch.
      </Paragraph>
      <Heading level={2}>Add a show</Heading>
      <AddShowBox></AddShowBox>
      <MyShows></MyShows>
    </div>
  );
}

export default App;
