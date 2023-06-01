import React from "react";
import HOC from "./HOC";

function Hover({count, inc}) {
  return (
    <div>
      <button onMouseOver={inc}>Hovered {count} times</button>
    </div>
  );
}

export default HOC(Hover);
