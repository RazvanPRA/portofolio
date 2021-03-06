import React from "react";
import "../style/StyleTicTacToe.css";

function Player({ title, isActive, numberOfWins }) {
  return (
    <div className="playerContainer">
      <span
        className={
          isActive === true ? "activePlayerText" : "inActivePlayerText"
        }
      >
        {title}
      </span>
      <div>Wins: {numberOfWins}</div>
    </div>
  );
}

export default Player;
