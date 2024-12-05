//ReactComponent

import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
function Heading() {
  return <h1>My Favourite Foods</h1>;
}

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
