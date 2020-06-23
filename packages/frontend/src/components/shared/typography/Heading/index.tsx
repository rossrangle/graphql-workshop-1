import React from "react";

import "./styles.scss";

const Heading = ({ level, children }: { level: number; children: any }) => {
  let headingComponent = null;
  switch (level) {
    case 1:
      headingComponent = <h1>{children}</h1>;
      break;
    case 2:
      headingComponent = <h2>{children}</h2>;
      break;
    case 3:
      headingComponent = <h3>{children}</h3>;
      break;
    default:
      headingComponent = <h1>{children}</h1>;
  }
  return headingComponent;
};

export default Heading;
