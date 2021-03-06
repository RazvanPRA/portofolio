import React from "react";

function Button({ setSetGameOver, setTableValues, setPlayerTurn }) {
  return (
    <div className="buttonContainer">
      <div
        className="resetButton"
        onClick={() => {
          setTableValues(["", "", "", "", "", "", "", "", ""]);
          setPlayerTurn("X");
          setSetGameOver(false);
        }}
      >
        Reset
      </div>
    </div>
  );
}

export default Button;
