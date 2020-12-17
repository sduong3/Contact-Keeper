import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default () => (
  <Fragment>
    <img
      sec={spinner}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
        alt: "Loading...",
      }}
    />
  </Fragment>
);
