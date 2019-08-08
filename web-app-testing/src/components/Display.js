import React from "react";

function Display(props) {
  return (
    <div className="displayContainer">
      <div className="ballCount">
        <h3>Ball Count</h3>
        <h4 data-testid="ballDisplay">{props.ball}</h4>
      </div>

      <div className="strikeCount">
        <h3>Strike Count</h3>
        <h4 data-testid="strikeDisplay">{props.strike}</h4>
      </div>
    </div>
  );
}

export default Display;
