import React from "react";

function DashBoard(props) {
  return (
    <div className="dashBoardContainer">
      <div className="buttonContainer">
        <button
          className="strikeBtn"
          onClick={() =>
            props.trackStrike(props.strike, props.setStrike, props.setBall)
          }
        >
          Strike
        </button>
        <button
          className="ballBtn"
          onClick={() =>
            props.trackBall(props.ball, props.setBall, props.setStrike)
          }
        >
          Ball
        </button>
        <button className="foulBtn">Foul</button>
        <button
          className="hitBtn"
          onClick={() => props.trackHit(props.setBall, props.setStrike)}
        >
          Hit
        </button>
      </div>
    </div>
  );
}

export default DashBoard;
